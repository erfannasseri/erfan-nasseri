import React from "react";
import img1 from "../../../assets/img/portfolio/iwi1.jpg";
import img2 from "../../../assets/img/portfolio/iwi2.jpg";
import portfolioVideo from "../../../assets/img/portfolio/video.mp4";
import hyperheroReels from "../../../assets/img/portfolio/vid/HyperheroReels.mp4";
import HyperheroPost from "../../../assets/img/portfolio/vid/HyperheroPost.mp4";
import DrAliNasseri from "../../../assets/img/portfolio/vid/DrAliNasseri.mp4";
import dej from "../../../assets/img/portfolio/vid/dejBoutique.mp4";
import MRYekta from "../../../assets/img/portfolio/vid/MR.Yekta.mp4";
import carEvent from "../../../assets/img/portfolio/vid/carEvent.mp4";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  if (modalId === 1) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 2) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 10) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 11) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 12) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 13) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 14) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 15) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 3) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt="portfolio project demo" />
                    </div>
                    <div>
                      <img src={img1} alt="portfolio project demo" />
                    </div>
                    <div>
                      <img src={img2} alt="portfolio project demo" />
                    </div>
                  </Slider>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 4) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={hyperheroReels} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 5) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={HyperheroPost} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 6) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={dej} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 7) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={DrAliNasseri} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 8) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={MRYekta} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 9) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  {/* <img src={item.image} alt="portfolio project demo" /> */}
                  <video
                    
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={carEvent} type="video/mp4" />
                    {/* <source src="img/" type="video/mp4" /> */}
                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
        } else if (modalId === 16) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 17) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 18) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 19) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 20) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 27) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 21) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 22) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 23) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 24) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if (modalId === 25) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else if ( modalId >= 26 && modalId <= 40 ) {
          return (
            <div className="modal_portfolio ">
              <div
                className="modal__outside"
                onClick={() => setGetModal(false)}
              ></div>
              <div></div>
              <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                  return (
                    <div key={item.id} data-aos="fade">
                      <h2 className="heading mb-2">{item.type}</h2>
                      <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                          return (
                            <div key={i} className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                Project:{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.project}
                                </span>
                              </div>
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                Client :{" "}
                                <span className="ft-wt-600 uppercase">
                                  {details.client}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <figure className="modal__img">
                        <img src={item.image} alt="portfolio project demo" />
                      </figure>
      
                      <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                      >
                        <img src={CloseImg} alt="portfolio project demo" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
    
  }
};

export default Modal;
