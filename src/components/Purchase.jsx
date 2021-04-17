import React from "react";
import "../styles/purchase.css";
import "../styles/slider.css";
import Web3 from 'web3'

const jabba_forms_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_JABBAS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"METADATA_PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numJabbas","type":"uint256"}],"name":"adoptJABBA","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"calculatePriceTest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]

const jabba_forms_contract_address = "0xa0d8c43465f1Aa6F361ef572F79FBbbfD387DA0f"

class PURCHASE extends React.Component {



    constructor() {
      super();
      this.state = {
        address: "No wallet connected",
        connected: false,
        signedIn: false,
        network: null,
        currPrice: 0,
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
    }

    async componentWillMount(){
      await this.ConnectMetamask()
      //await this.DisplayPurchasePrice()
      var currPrice = await this.GetPurchasePrice()
      this.setState({currPrice: currPrice})
    }

    GetNetwork() {
      return new Promise(resolve => {
        window.web3.eth.net.getNetworkType().then(response => resolve(response))
      })
    }

    async ConnectMetamask(){
      this.setState({connected:false, signedIn: false});

      if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        var net = await this.GetNetwork();
        this.setState({connected: true, network: net})
      } else {
        this.setState({connected: false})
        return;
      }

      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        if(window.ethereum.selectedAddress){
          this.setState({signedIn: true});
        }
      } else {
        this.setState({signedIn: false});
      }
    }

    async GetPurchasePrice(){
      if(this.state.connected){
        const jabbaContract = new window.web3.eth.Contract(jabba_forms_abi, jabba_forms_contract_address)
        const currPrice = await jabbaContract.methods.calculatePrice().call()
        return currPrice
      }
      return 0;
    }

    CreatePurchasePrice(){

      if(!this.state.signedIn){
        return (
          <img class="connect-wallet-52Wjwg" src="img/connect-wallet-1@2x.png" />
        )
      }

      if(this.state.currPrice == 80000000000000000){
        return (
          <img class="x08-eth-1-52Wjwg" src="img/08eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 140000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/14eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 250000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/25eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 330000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/33eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 400000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/40eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 500000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/50eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 600000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/60eth-1@2x.png" />
        )
      }
      else if(this.state.currPrice == 1000000000000000000){
        return(
          <img class="x08-eth-1-52Wjwg" src="img/1eth-1@2x.png" />
        )
      }

    }

    async PurchaseJabba(){
      this.ConnectMetamask()

      if(!this.state.signedIn){
        alert("wallet not connected")
        return;
      }

      const jabbaContract = new window.web3.eth.Contract(jabba_forms_abi, jabba_forms_contract_address)
      const currPrice = await jabbaContract.methods.calculatePrice().call()

      const transactionParameters = {
        to: jabba_forms_contract_address,
        from: window.ethereum.selectedAddress,
        value: currPrice.toString(),
      };

      var res = await jabbaContract.methods.adoptJABBA(1).send(transactionParameters)

    }

    
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
    };
  


    render(){
        return (
            <div class="container-center-horizontal">
            <div class="purchase screen">
              <div class="flex-col-C61RwL">
                <div class="overlap-group1-0xy0vn">
                  <img class="you-doodle202-9-t072157-z-1-NG5cxJ" src="img/you-doodle-2021-04-09t07-21-57z-1@1x.png" />

                  {/* THE PURCHASE BUTTON */}
                  <button onClick={this.PurchaseJabba.bind(this)}> <img class="jabbaform-purchase-button3-1-NG5cxJ" src="img/jabbaform-purchase-button3-1@1x.png" /> </button>
                  <img onClick={this.PurchaseJabba.bind(this)} class="asset-22-purchjabb-2-NG5cxJ" src="img/asset-22purchjabb-2@2x.png" />


                   {/* THE PURCHASE TEXT */}
                  <div class="frame-3-NG5cxJ">
                  <div class="frame-5-AdpH7j"></div>
                  </div>


                  <div class="frame-4-NG5cxJ">

                  </div>
                  <img class="shiny-1-NG5cxJ" src="img/shiny-1@2x.png" />
                  <div class="flex-col-NG5cxJ">
                    <img class="shiny-2-xbkSRC" src="img/shiny-2@2x.png" />
                    <img class="shiny-3-xbkSRC" src="img/shiny-3@2x.png" />
                  </div>
                  <img class="shiny-4-NG5cxJ" src="img/shiny-4@2x.png" />
                  <div class="flex-col-IMpwyX">
                    <img class="shiny-6-y0Ojnz" src="img/shiny-6@2x.png" />
                    <img class="shiny-5-y0Ojnz" src="img/shiny-5@2x.png" />
                  
                  
                  {/* START SLIDER */}
                    <div className="slider-wrapper">
                    <div className="slider-input">
                      <span>SLIDER GOES HERE</span>
                        <input
                          type="range"
                          ref={this.slider}
                          defaultValue={this.state.priceInputValue}
                          onChange={this.handlePricingSlide}
                        />
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
                  {/* END SLIDER */}

                  </div>
                </div>
                <img class="clickthecan-1-0xy0vn" src="img/clickthecan-1@2x.png" />
                <div class="overlap-group2-0xy0vn">

                  <img class="currentpricejabbaform-1-52Wjwg" src="img/current-price-jabbaform-1@2x.png" />
                  <img class="asset-4-l3-2-52Wjwg" src="img/asset-4l3-2@1x.png" />

                   {/* ETHEREUM PRICE INDICATION */}
                  {/*<img class="x08-eth-1-52Wjwg" src="img/08eth-1@2x.png" />*/}
                  {this.CreatePurchasePrice()}
                </div>
                <div class="flex-row-0xy0vn">
                  <img class="bwgan-251-GyJUNH" src="img/bw-gan---251-@2x.png" />
                  <img class="bwgan-221-GyJUNH" src="img/bw-gan---221-@2x.png" />
                  <img class="bwgan-226-GyJUNH" src="img/bw-gan---226-@2x.png" />
                </div>
                <div class="flex-col-0xy0vn">
            <img class="asset-67curve-2-xpmbvu" src="img/asset-67curve-2@1x.png" />
            <div class="flex-row-xpmbvu">
              <div class="overlap-group-fKmFVR">
                <img class="asset-3-l1-2-H5vPvf" src="img/asset-3l1-2@2x.png" />
                <div class="flex-col-H5vPvf">
                <a href="https://discord.com/invite/NYkTbFv4" target="_blank"><img class="asset-35-discord-1-ASQbkE" src="img/asset-35discord-1@2x.png" /></a>
                  <div class="frame-1-ASQbkE"></div>
                </div>
                <img class="asset-26-j48-messy-1-H5vPvf" src="img/asset-26j48messy-1-1@2x.png" />
                <img class="asset-41-grottolab1-1-H5vPvf" src="img/asset-41grottolab1-1@2x.png" />
                <img class="grotto-labs-logo-5-H5vPvf" src="img/grotto-labs-logo-6@2x.png" />
              </div>
              <a href="https://twitter.com/j48baforms" target="_blank"><img class="asset-34-twitter-1-fKmFVR" src="img/asset-34twitter-1@2x.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }

};
export default PURCHASE;
