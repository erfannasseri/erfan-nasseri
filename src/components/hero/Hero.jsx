import React, { useState ,  useEffect} from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/erfan1.jpg";
import heroImgMobile from "../../assets/img/hero/erfan2.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Logo from "../Logo/Logo";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "erfan nasseri",
  heroDesignation: "web developer & graphic designer",
  heroDescriptions: `I'm a Iranian based graphic designer & front‑end developer focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const [isDark, setisDark] = useState(true);

  useEffect(() => {
    let theme = document.querySelector("body").classList.value
    console.log(theme);
  }, []);
  

  return (
    <>
      <div className="row home-details-container align-items-center">
        
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
                  
            <Logo />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
