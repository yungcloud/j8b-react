import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/home.css";

class HOME extends React.Component {

  render(){
    return (
      <div class="container-center-horizontal">
        <div class="home screen">
          <div class="flex-col-C61RwL">
            <div class="overlap-group-0xy0vn">
              <div class="rectangle-1-y1HRxC">
                <video
                  src="https://anima-uploads.s3.amazonaws.com/projects/60738e33018db5cba1c25a5d/files/j48baformswebhead.mp4"
                  loop
                  autoplay="autoplay"
                  playsinline
                  muted
                ></video>
              </div>
              <img alt=""  class="asset-3-l1-1-y1HRxC" src="img/asset-3l1-1@2x.png" />
            </div>
            <div class="flex-row-0xy0vn">
              <div class="flex-col-GyJUNH">
                <div class="j48-baforms-pro-d-cared-for-art-3xHcwy spacemono-normal-black-12px">
                  J48BAFORMS (Pronounced Jabbaforms) <br />
is a multifaceted artistic experiment minted on a boutique bonding curve. A series of 4848 Works of art are available at random. An exciting array of different rarities are present, from original hand-drawings to animated works with accompanying musical scores. J48BAFORMS started with 1000 hand drawn “LEGACYFORMS” produced by the artist, which serves as the foundation for the series.                </div>
                <div class="overlap-group3-3xHcwy">
                  <img alt=""  class="rectangle-3-DTrHo1" src="img/j8ba-front-page.png" />
                  <div class="computer-genera-d-ganj48-baform-DTrHo1 spacemono-normal-black-12px">
                    COMPUTER GENERATED “GANJ48BAFORM”
                  </div>
                </div>
              </div>
              <div class="flex-col-gkUG7I">
                <div class="overlap-group2-nFOi0F">
                  <div class="we-started-with-afted-with-love-jexT3O spacemono-normal-black-12px">
                  After digitizing each LEGACYFORM, the dataset was processed through our GAN (Generative Adversarial Network) over 2 weeks. In this time period, the neural network learned and interpreted the original drawings and their inherent style, producing highly interesting machine-generated variants that feel like an organic extension of the artist’s work. J48BAFORMS is a unique NFT multimedia project that elegantly displays the talents of the artist and GAN, working in symbiosis.                  </div>
                  <img alt=""  class="rectangle-2-jexT3O" src="img/rectangle-2@2x.png" />
                </div>
                <div class="hand-made-legacy-j48-baform-nFOi0F spacemono-normal-black-12px">
                  HAND MADE “LEGACY” J48BAFORM
                </div>
              </div>
              <img alt=""  class="purchasejabbaform-final-2-GyJUNH" src="img/purchasejabbaform-final-2@2x.png" />
            </div>
            <div class="flex-col-0xy0vn">
              <img alt=""  class="asset-4-l3-1-xpmbvu" src="img/asset-4l3-1@1x.png" />
              <div class="flex-row-xpmbvu">
                <img alt=""  class="barre-lj48-1-fKmFVR" src="img/barrelj48-1@2x.png" />

                {/* PURCHASE BUTTON */}
                <Link class="" to="/Purchase"><img alt="purchase"  class="purchasejabbaform-final-1-fKmFVR" src="img/purchasejabbaform-final-1@2x.png" /></Link>

                <img alt=""  class="barre-lj48-2-fKmFVR" src="img/barrelj48-1@2x.png" />
              </div>
              <img alt=""  class="asset-67curve-3-xpmbvu" src="img/asset-67curve-3@1x.png" />
              <div class="flex-row-9Sxrs4">
                <div class="flex-col-4xxXEe">
                  <div class="overlap-group1-Ee5ApG">
                    <img alt=""  class="asset-3-l1-2-xYI43P" src="img/asset-3l1-2@2x.png" />
                    <a href="https://discord.com/invite/NYkTbFv4" target="_blank"><img alt=""  class="asset-35-discord-1-xYI43P" src="img/asset-35discord-1@2x.png" /></a>
                    <img alt=""  class="asset-26-j48-messy-1-xYI43P" src="img/asset-26j48messy-1@2x.png" />
                    <img alt=""  class="asset-41-grottolab1-1-xYI43P" src="img/asset-41grottolab1-1@2x.png" />
                    <img alt=""  class="grotto-labs-logo-6-xYI43P" src="img/grotto-labs-logo-3-6@2x.png" />
                  </div>
                  <div class="frame-1-Ee5ApG"></div>
                </div>
                <a href="https://twitter.com/j48baforms" target="_blank"><img alt=""  class="asset-34-twitter-1-4xxXEe" src="img/asset-34twitter-1@2x.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HOME;
