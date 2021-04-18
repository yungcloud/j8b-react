import React from "react";

class SLIDER extends React.Component {
  state = {
    priceInputValue: "0",
    priceInput: {
      0: "1",
      1: "2",
      2: "3",
      3: "4",
      4: "5",
      5: "6",
      6: "7",
      7: "8",
      8: "9",
      9: "10",
      10: "11",
      11: "12",
      12: "13",
      13: "14",
      14: "15",
      15: "16",
      16: "17",
      17: "18",
      18: "19",
      19: "20"
    },
    priceOutput: {
      plan1: {
        0: ["", "0.08", " ETH"],
        1: ["", "0.16", " ETH"],
        2: ["", "0.24", " ETH"],
        3: ["", "0.32", " ETH"],
        4: ["", "0.40", " ETh"],
        5: ["", "0.48", " ETH"],
        6: ["", "0.56", " ETH"],
        7: ["", "0.64", " ETH"],
        8: ["", "0.72", " ETH"],
        9: ["", "0.80", " ETH"],
        10: ["", "0.88", " ETH"],
        11: ["", "0.96", " ETH"],
        12: ["", "1.04", " ETH"],
        13: ["", "1.12", " ETH"],
        14: ["", "1.20", " ETH"],
        15: ["", "1.28", " ETH"],
        16: ["", "1.36", " ETH"],
        17: ["", "1.44", " ETH"],
        18: ["", "1.52", " ETH"],
        19: ["", "1.6", " ETH"]
      }
    }
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window.getComputedStyle(this.sliderValue.current),
      0
    );
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  }

  render() {
    return (
      <div className="slider-wrapper">
        <div className="slider-container center-content">
          <label className="slider-input">
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
        </div>

        <div className="slider-output-wrapper">
          <div ref={this.sliderValue} className="slider-value">
            {this.getPricingData(this.state.priceInput)} <span>J8BAS</span>
          </div>
          <span className="slider-amount">
            {this.getPricingData(this.state.priceOutput.plan1, 1)}
          </span>
        </div>
      </div>
    );
  }
}

export default SLIDER;
