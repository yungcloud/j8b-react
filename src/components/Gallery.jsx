import React from "react";
import "../styles/gallery.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';


class GALLERY extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [1,2,3,4,5]
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

  renderThumbs = () =>
    <ul>{this.state.items.map((item, i) =>
      <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
    </ul>;

  renderGallery() {
    const { currentIndex, items } = this.state;

    return (<AliceCarousel
      dotsDisabled={true}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={this.onSlideChanged}
    >
      { items.map((item, i) => <div key={i} className="yours-custom-class"><h2>{ item }</h2></div>) }
    </AliceCarousel>);
  }

  render(){
    return (

<>
<div class="container-center-horizontal">
      <div class="formgallery screen">
      <div class="alice-gallery">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          ref={ el => this.Carousel = el }
        >
          
          <div className="gallery-item"><img src="img/rectangle-4@2x.png"/></div>
          <div className="gallery-item"><img src="img/legacy-monochrome--50-@2x.png"/></div>
          <div className="gallery-item"><img src="img/legacy-monochrome--39-@2x.png"/></div>
          <div className="gallery-item"><img src="img/legacy-monochrome--35-@2x.png"/></div>
          <div className="gallery-item"><img src="img/legacy-monochrome--14-@2x.png"/></div>

          <div className="gallery-item"><img src="img/greyscale-legacy--347-@2x.png" /></div>
          <div className="gallery-item"><img src="img/greyscale-legacy--288-@2x.png" /></div>
          <div className="gallery-item"><img src="img/greyscale-legacy--114-@2x.png" /></div>
          <div className="gallery-item"><img src="img/greyscale-legacy--97-@2x.png" /></div>

          <div className="gallery-item"><img  src="img/legacy-multicolor--5--1@2x.png" /></div>
          <div className="gallery-item"><img  src="img/legacy-multicolor--11--1@2x.png" /></div>
          <div className="gallery-item"><img  src="img/legacy-multicolor--26--1@2x.png" /></div>
          <div className="gallery-item"><img  src="img/legacy-multicolor--31--1@2x.png" /></div>

          <div className="gallery-item"><img  src="img/bw-gan---142--1@2x.png"/></div>
          <div className="gallery-item"><img  src="img/bw-gan---73-@2x.png" /></div>
          <div className="gallery-item"><img  src="img/bw-gan---55-@2x.png" /></div>
          <div className="gallery-item"><img  src="img/bw-gan---37-@2x.png" /></div>

          <div className="gallery-item"><img  src="img/color-gan--29-@2x.png"/></div>
          <div className="gallery-item"><img  src="img/color-gan--26-@2x.png" /></div>
          <div className="gallery-item"><img  src="img/color-gan--10-@2x.png" /></div>
          <div className="gallery-item"><img  src="img/color-gan--8-@2x.png" /></div>


          <div className="gallery-item"><img  src="img/corrupt-gan--16--1@2x.png"/></div>
          <div className="gallery-item"><img  src="img/corrupt-gan--12--2@2x.png" /></div>
          <div className="gallery-item"><img  src="img/corrupt-gan--9-@2x.png" /></div>
          <div className="gallery-item"><img  src="img/corrupt-gan--8-@2x.png" /></div>

          <div className="gallery-item"><img  src="img/gifs/speedie_1.gif"/></div>
          <div className="gallery-item"><img  src="img/gifs/speedie_90.gif" /></div>
          <div className="gallery-item"><img  src="img/gifs/speedie_79.gif" /></div>
          <div className="gallery-item"><img  src="img/gifs/speedie_109.gif" /></div>

          <div className="gallery-item"><img  src="img/gifs/hallucinogen_11.gif"/></div>
          <div className="gallery-item"><img  src="img/gifs/hallucinogen_9.gif" /></div>
          <div className="gallery-item"><img  src="img/gifs/hallucinogen_9.gif" /></div>
          <div className="gallery-item"><img  src="img/gifs/hallucinogen_2.gif" /></div>

          <div className="gallery-item">       
          <video
                  src="img/gifs/JABBAFORM10.mp4"
                  loop
                  playsinline
                  controls
                ></video></div>
          <div className="gallery-item">
          <video
                  src="img/gifs/JABBAFORM11.mp4"
                  loop
                  playsinline
                  controls
                ></video></div>
          <div className="gallery-item">
          <video
                  src="img/gifs/JABBAFORM14.mp4"
                  loop
                  playsinline
                  controls
                ></video></div>

          <div className="gallery-item"><img  src="img/ultraform-chroma-014@2x.png"/></div>
          <div className="gallery-item"><img  src="img/ultraform-chroma-012@2x.png" /></div>
          <div className="gallery-item"><img  src="img/ultraform-chroma-011@2x.png" /></div>
          <div className="gallery-item"><img  src="img/ultraform-chroma-010@2x.png" /></div>

          <div className="gallery-item"><img  src="img/ultraform-pixel-020@2x.png" /></div>
          <div className="gallery-item"><img  src="img/ultraform-pixel-015@2x.png" /></div>
          <div className="gallery-item"><img  src="img/ultraform-pixel-009@2x.png" /></div>
          <div className="gallery-item"><img  src="img/ultraform-pixel-007@2x.png" /></div>

        </AliceCarousel>
      </div>
        <img class="asset-3-l1-2-C61RwL" src="img/asset-3l1-2-1@2x.png" />
        <a href="https://twitter.com/j48baforms" target="_blank"><img class="asset-34-twitter-1-C61RwL" src="img/asset-34twitter-1@2x.png" /></a>
        <a href="https://discord.com/invite/NYkTbFv4" target="_blank"><img class="asset-35-discord-1-C61RwL" src="img/asset-35discord-1@2x.png" /></a>
        <div class="frame-2-C61RwL"></div>
        <img class="asset-26-j48-messy-1-C61RwL" src="img/asset-26j48messy-1-2@2x.png" />
        <img class="asset-41-grottolab1-1-C61RwL" src="img/asset-41grottolab1-1@2x.png" />
        <button onClick={() => this.Carousel.slideNext()}><img class="right-arrow-1-C61RwL" src="img/right-arrow-1-1@2x.png" /></button>
        <button onClick={() => this.Carousel.slidePrev()}><img class="left-arrow-1-C61RwL" src="img/left-arrow-1@2x.png" /></button>
        <img class="grotto-labs-logo-3-C61RwL" src="img/grotto-labs-logo-6@2x.png" />
        <img class="legacymulticolor-5-1-C61RwL" src="img/legacy-multicolor--5--1@2x.png" />
        <img class="legacymulticolor-11-1-C61RwL" src="img/legacy-multicolor--11--1@2x.png" />
        <img class="legacymulticolor-26-1-C61RwL" src="img/legacy-multicolor--26--1@2x.png" />
        <img class="legacymulticolor-31-1-C61RwL" src="img/legacy-multicolor--31--1@2x.png" />
        <img class="bwgan-73-C61RwL" src="img/bw-gan---73-@2x.png" />
        <img class="bwgan-55-C61RwL" src="img/bw-gan---55-@2x.png" />
        <img class="bwgan-37-C61RwL" src="img/bw-gan---37-@2x.png" />
        <img class="bwgan-142-1-C61RwL" src="img/bw-gan---142--1@2x.png" />
        <img class="colorgan-26-C61RwL" src="img/color-gan--26-@2x.png" />
        <img class="colorgan-10-C61RwL" src="img/color-gan--10-@2x.png" />
        <img class="colorgan-8-C61RwL" src="img/color-gan--8-@2x.png" />
        <img class="corruptgan-12-C61RwL" src="img/corrupt-gan--12--2@2x.png" />
        <img class="corruptgan-9-C61RwL" src="img/corrupt-gan--9-@2x.png" />
        <img class="corruptgan-8-C61RwL" src="img/corrupt-gan--8-@2x.png" />
        <img class="corruptgan-16-1-C61RwL" src="img/corrupt-gan--16--1@2x.png" />
        <img class="ultraformpixel020-C61RwL" src="img/ultraform-pixel-020@2x.png" />
        <img class="ultraformpixel015-C61RwL" src="img/ultraform-pixel-015@2x.png" />
        <img class="ultraformpixel009-C61RwL" src="img/ultraform-pixel-009@2x.png" />
        <img class="ultraformpixel007-C61RwL" src="img/ultraform-pixel-007@2x.png" />
        <div class="legacyform-lega-ries-in-the-mix-C61RwL spacemono-bold-black-12px">
          <span class="span0-lwroS2">LEGACYFORM<br /></span
          ><span class="span1-lwroS2"
            ><br />LEGACYFORMS are the original works by the Artist.<br />1000 Forms were hand-drawn and scanned for the
            collection.<br />LEGACYFORMS come in three varieties- Greyscale, Monochrome, And Multicolour.These forms
            were used as the dataset for the creation of GANJ48BAFORMS. Each Legacyform is a completely original 1/1,
            with a few Twin series in the mix. <br
          /></span>
        </div>
        <div class="ganj48-baform-g-ettings-applied-C61RwL spacemono-bold-black-12px">
          <span class="span0-PdQC4f">GANJ48BAFORM<br /></span
          ><span class="span1-PdQC4f"
            ><br />GANJ48BAFORMS are the twisted freely expressed interpretation of LEGACYFORMS by the GROTTOGAN.3048 of
            the best forms were curated into the collection by the team out of over 10000. <br />GANJ48FORMS Come in
            three varieties; Greyscale, Monochrome, and Corrupted. The Corrupted forms were drawn from collapsed
            networks that had extreme generative settings applied.</span
          >
        </div>
        <div class="ultraform-ultra-ization-is-nice-C61RwL spacemono-bold-black-12px">
          <span class="span0-9xwOVZ">ULTRAFORM<br /></span
          ><span class="span1-9xwOVZ"
            ><br />ULTRAFORMS are the statistically rarest forms in the collection. <br />ULTRAFORMS are composed of
            CHROMAFORMS and PIXELFORMS.<br />CHROMAFORMS are distinguishable by their coloured background and painterly
            disposition. PIXELFORMS are pixelized renditioned of J48BAFORMS, because pixilization is nice.
          </span>
        </div>
        <div class="motionform-moti-htly-undulating-C61RwL spacemono-bold-black-12px">
          <span class="span0-KE05Ey">MOTIONFORM<br /></span
          ><span class="span1-KE05Ey"
            ><br />MOTIONFORMS are animated GANJ48BAFORMS With Two Varieties: TRIPPYFORM and SPEEDYFORM. SPEEDIES
            quickly show their transmutational abilities, while TRIPPIES are more subtle, often just lightly undulating.
          </span>
        </div>
        <div class="musiform-musifo-ely-as-possible-C61RwL spacemono-bold-black-12px">
          <span class="span0-CsDQ4b">MUSIFORM<br /></span
          ><span class="span1-CsDQ4b"
            ><br />MUSIFORMS are extremely rare, with only 150 existing in the collection. Unlike the shorter SPEEDIES
            and TRIPPIES, MUSIFORMS are 15 seconds long, with an originally composed accompanying score by the artist.
            Each MUSIFORM is syncopated through machine learning to synergize the two elements as closely as
            possible.&nbsp;&nbsp;</span
          >
        </div>
        <img class="hallucinogen-11-C61RwL" src="img/gifs/hallucinogen_11.gif" />
        <img class="hallucinogen-9-C61RwL" src="img/gifs/hallucinogen_9.gif" />
        <img class="hallucinogen-8-C61RwL" src="img/gifs/hallucinogen_8.gif" />
        <img class="hallucinogen-2-C61RwL" src="img/gifs/hallucinogen_2.gif" />
        <img class="speedie-109-C61RwL" src="img/gifs/speedie_1.gif" />
        <img class="speedie-90-C61RwL" src="img/gifs/speedie_90.gif" />
        <img class="speedie-78-C61RwL" src="img/gifs/speedie_79.gif" />
        <img class="speedie-1-C61RwL" src="img/gifs/speedie_109.gif" />
        <img class="legacymonochrome-50-C61RwL" src="img/legacy-monochrome--50-@2x.png" />
        <img class="legacymonochrome-39-C61RwL" src="img/legacy-monochrome--39-@2x.png" />
        <img class="legacymonochrome-35-C61RwL" src="img/legacy-monochrome--35-@2x.png" />
        <img class="legacymonochrome-14-C61RwL" src="img/legacy-monochrome--14-@2x.png" />
        <img class="colorgan-29-C61RwL" src="img/color-gan--29-@2x.png" />
        <div class="rectangle-6-C61RwL"></div>

        <div class="need-to-insert-mp4-assets-here-C61RwL">

        <div class="musiform-video">
        <video
                  src="img/gifs/JABBAFORM10.mp4"
                  loop
                  playsinline
                  controls
                ></video>

        </div>
        <br></br>
        <div class="musiform-video">
        <video
                  src="img/gifs/JABBAFORM11.mp4"
                  loop
                  playsinline
                  controls
                ></video>

        </div>
        <br></br>
        <div class="musiform-video">
        <video
                  src="img/gifs/JABBAFORM14.mp4"
                  loop
                  playsinline
                  controls
                ></video>

        </div>
        <br></br>
        </div>


        <img class="ultraformchroma014-C61RwL" src="img/ultraform-chroma-014@2x.png" />
        <img class="ultraformchroma012-C61RwL" src="img/ultraform-chroma-012@2x.png" />
        <img class="ultraformchroma011-C61RwL" src="img/ultraform-chroma-011@2x.png" />
        <img class="ultraformchroma010-C61RwL" src="img/ultraform-chroma-010@2x.png" />
        <div class="text-C61RwL"></div>
        <img class="slice-1-C61RwL" src="img/slice-1@2x.png" />
        <img class="greyscalelegacy-347-C61RwL" src="img/greyscale-legacy--347-@2x.png" />
        <img class="greyscalelegacy-288-C61RwL" src="img/greyscale-legacy--288-@2x.png" />
        <img class="greyscalelegacy-114-C61RwL" src="img/greyscale-legacy--114-@2x.png" />
        <img class="greyscalelegacy-97-C61RwL" src="img/greyscale-legacy--97-@2x.png" />
      </div>
    </div>
    </>

    );
  }
}


export default GALLERY;
