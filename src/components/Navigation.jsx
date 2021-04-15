import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/navigation.css";

function Navigation(props) {
  return (
        <div class="flex-row-navigation">
                <Link class="" to="/"><img class="asset-31-main-2" src="img/asset-31main-1@2x.png" /></Link>
                <Link class="" to="/Purchase"><a href="purchase.html"><img class="asset-21-purchase-2" src="img/asset-21purchase-1@2x.png" /></a></Link>
                <Link class="" to="/Wallet"><a href="wallet-true.html"><img class="asset-23-wallet-3" src="img/asset-23wallet-3@2x.png" /></a></Link>
                <Link class="" to="/Bounty"><a href="bounty.html"><img class="asset-28-bounty-2" src="img/asset-28bounty-1@2x.png" /></a></Link>
                <Link class="" to="/Gallery"><a href="formgallery.html"><img class="asset-20-gallery-2" src="img/asset-20gallery-1@2x.png" /></a></Link>
                <Link class="" to="/About"><img class="asset-18-prov-2" src="img/asset-18prov-1@2x.png" /></Link>
                <Link class="" to="/Grid"><img class="asset-18-prov-grid" src="img/grid-menu-button2x.png" /></Link>

        </div>
        
  );
}

export default withRouter(Navigation);
