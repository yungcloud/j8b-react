import React, {useState} from "react";
import "../styles/wallet.css";
import Web3 from 'web3'

const jabba_forms_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_JABBAS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"METADATA_PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numJabbas","type":"uint256"}],"name":"adoptJABBA","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"calculatePriceTest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]

const jabba_forms_contract_address = "0xa0d8c43465f1Aa6F361ef572F79FBbbfD387DA0f"


class WALLET extends React.Component {

    constructor() {
      super();
      this.state = {
        address: "No wallet connected",
        connected: false,
        signedIn: false,
        network: null,
        jabbas: [],
        init: false
      };
    }

    async componentWillMount(){
      await this.ConnectMetamask()
      await this.DisplayWalletInfo();
      await this.GetOwnerJabbaForms();
    }

    GetNetwork() {
      return new Promise(resolve => {
        window.web3.eth.net.getNetworkType().then(response => resolve(response))
      })
    }

    async ConnectMetamask(){
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

    UpdateWalletInfo() {
      console.log(this.state)
      if(!this.state.connected){
        this.setState({address: "No wallet available"})
        return;
      }

      if(!this.state.signedIn){
        this.setState({address: "wallet not connected"})
        return;
      }

      if(window.ethereum.selectedAddress){
        if(this.state.network == "main"){
          this.setState({address: window.ethereum.selectedAddress})
        } else {
          this.setState({address: window.ethereum.selectedAddress + " (" + this.state.network + " network)"})
        }
      } else {
        this.setState({address: "wallet not connected"})
      }

    }

    async DisplayWalletInfo() {
      this.UpdateWalletInfo();

      if(this.state.connected){
        let self = this
        window.ethereum.on('accountsChanged', function(accounts) {
          self.UpdateWalletInfo();
        })
      }

    }


    async FetchJson(url){
      return new Promise(resolve => {
        fetch(url).then(response => resolve(response.json()))
      })
    }

    async GetOwnerJabbaForms(){
      if(!this.state.signedIn){
        this.setState({init: true})
        return
      }

      const jabbaContract = new window.web3.eth.Contract(jabba_forms_abi, jabba_forms_contract_address)
      var numJabbas = await jabbaContract.methods.balanceOf(window.ethereum.selectedAddress).call()

      if(numJabbas == 0){
        return
      }

      var totalSupply = await jabbaContract.methods.totalSupply().call()

      if(totalSupply < 1){
        return
      }

      var i;
      var token;
      for(var i=0;i<numJabbas;i++){
        token = await jabbaContract.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, i).call()
        var uri = await jabbaContract.methods.tokenURI(token).call()
        var json = await this.FetchJson(uri);
        this.state.jabbas.push(json)
      }
      console.log(this.state.jabbas)

      this.setState({init: true})
      return;

    }

    CreateJabbaForms(){
      var jabba_forms = [];

      if(!this.state.init){
        return(
          <img class="loading" src="img/loading.png" />
        )
      }

        //<div class="flex-row-4iD7zR">
        //<img class="image-1-ossvxU" src="img/image-1@2x.png" />
        //<div class="j48-baform-2397-e-ganj48-baform-ossvxU spacemono-normal-black-15px">
        //J48BAFORM #2397<br />TYPE: GANJ48BAFORM
        //</div>
        //</div>


      for(var i=0 ; i < this.state.jabbas.length; i++){
        console.log(this.state.jabbas[i])
        jabba_forms.push(
          <div class="flex-row-4iD7zR">
          <img class="image-1-ossvxU" src={this.state.jabbas[i].image} />
          <div class="j48-baform-2397-e-ganj48-baform-ossvxU spacemono-normal-black-15px">
          {this.state.jabbas[i].name} <br />TYPE: {this.state.jabbas[i].attributes[0].value}
          </div>
          </div>
        )
      }
      //console.log(jabba_forms)

      return jabba_forms;


    }

    render(){
        return(
    <div class="container-center-horizontal">
      <div class="wallet-true screen" onclick="window.open('home.html', '_self');">
        <div class="flex-col-C61RwL">
          <div class="flex-row-0xy0vn">
            <img class="asset-38-wallett-3-GyJUNH" src="img/asset-38wallett-3@2x.png" />
            <img class="asset-23-wallet-2-GyJUNH" src="img/asset-23wallet-2-1@2x.png" />
            <img class="asset-38-wallett-2-GyJUNH" src="img/asset-38wallett-2@2x.png" />
          </div>
          <div class="flex-row-oV5UrE">
            <div class="your-wallet-0xc-d53-c511-a30631-QkTteQ spacemono-normal-black-15px">
              {this.state.address}
            </div>
          </div>
          {this.CreateJabbaForms()}
          <div class="flex-row-exd5BQ">
            <div class="overlap-group-BISixz">
              <img class="asset-3-l1-2-GqJPlL" src="img/asset-3l1-2-1@2x.png" />
              <a href="https://discord.com/invite/NYkTbFv4" target="_blank"><img class="asset-35-discord-1-GqJPlL" src="img/asset-35discord-1@2x.png" /></a>
              <img class="asset-26-j48-messy-1-GqJPlL" src="img/asset-26j48messy-1-2@2x.png" />
              <img class="asset-41-grottolab1-1-GqJPlL" src="img/asset-41grottolab1-1@2x.png" />
              <img class="grotto-labs-logo-4-GqJPlL" src="img/grotto-labs-logo-6@2x.png" />
            </div>
            <a href="https://twitter.com/j48baforms" target="_blank"><img class="asset-34-twitter-1-BISixz" src="img/asset-34twitter-1@2x.png" /></a>
          </div>
          <div class="frame-2-0xy0vn"></div>
        </div>
      </div>
    </div>

        )
    }
};
export default WALLET;