import React, { useLayoutEffect, useEffect, useState } from "react";
import "./style.css";
import LordImg from "../../assets/images/badge_Section/loard.png";
import LegendaryImg from "../../assets/images/badge_Section/legendary.png";
import KingImg from "../../assets/images/badge_Section/king.png";
import ConqureImg from "../../assets/images/badge_Section/conqure.png";
import Footer from "../../layouts/Footer/Footer";
import {
  Conqueror_ListData,
  King_ListData,
  Lord_ListData,
  Legendary_ListData,
} from "./BadgeCardsData/components";

import Cardcomponent from "./cardComponent";
import Navbar from "../../layouts/Navbar/Navbar";

import { LordCA, LordABI, KingCA, KingABI, LegendaryCA, LegendaryABI, ConquerorCA, ConquerorABI } from "./../../contracts.js"
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from "web3";

const Foundarbadge = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [web3, setWeb3] = useState("");
  const [provider, setProvider] = useState("");
  const [selectedAddress, setAddress] = useState("");

  const [Lord, setInstanceLord] = useState("");
  const [King, setInstanceKing] = useState("");
  const [Legendary, setInstanceLegendary] = useState("");
  const [Conqueror, setInstanceConqueror] = useState("");

  useEffect(() => {
    const checkMetamask = async () => {
      let provider = await detectEthereumProvider()

      let web3 = new Web3(provider)
      setWeb3(web3)
      setProvider(provider)
    }
    checkMetamask()
  }, [])

  const setAccount = async () => {
    let address = await provider.request({ method: 'eth_requestAccounts' });

    const chainId = await web3.eth.getChainId();
    console.log("chainId ", chainId)

    if (chainId != 137) {
      console.log("call to change eth netwrok")
      try {

        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: "0x89"
            }
          ]
        })
        console.log("provider", web3);
        setAddress(address[0])
        setInstances()

      }
      catch {
        console.log(' connect agin')
      }
    } else {
      setAddress(address[0])
      setInstances()
    }
  }

  const setInstances = async () => {
    let lords = new web3.eth.Contract(LordABI, LordCA)
    setInstanceLord(lords);

    let king = new web3.eth.Contract(KingABI, KingCA)
    setInstanceKing(king);

    let legendary = new web3.eth.Contract(LegendaryABI, LegendaryCA)
    setInstanceLegendary(legendary);

    let conqueror = new web3.eth.Contract(ConquerorABI, ConquerorCA)
    setInstanceConqueror(conqueror);

  }

  const mintLord = async () => {
    if(Lord === "") return
    let lordsPrice = await Lord.methods.cost().call()
    Lord.methods.mint("1").send({
      from: selectedAddress,
      value: lordsPrice.toString()
    })
      .on('transactionHash', (hash) => {
        console.log("Transaction Hash: ", hash)
      })
      .on('receipt', (receipt) => {
        console.log("Transaction Receipt: ", receipt)
      })
      .on('error', (error) => {
        console.log("Error: ", error)
      })
  }

  const mintKing = async () => {
    if(King === "") return

    let kingPrice = await King.methods.cost().call()

    King.methods.mint("1").send({
      from: selectedAddress,
      value: kingPrice.toString()
    })
      .on('transactionHash', (hash) => {
        console.log("Transaction Hash: ", hash)
      })
      .on('receipt', (receipt) => {
        console.log("Transaction Receipt: ", receipt)
      })
      .on('error', (error) => {
        console.log("Error: ", error)
      })
  }

  const mintLegendary = async () => {
    if(Legendary === "") return

    let legendaryPrice = await Legendary.methods.cost().call()

    Legendary.methods.mint("1").send({
      from: selectedAddress,
      value: legendaryPrice.toString()
    })
      .on('transactionHash', (hash) => {
        console.log("Transaction Hash: ", hash)
      })
      .on('receipt', (receipt) => {
        console.log("Transaction Receipt: ", receipt)
      })
      .on('error', (error) => {
        console.log("Error: ", error)
      })
  }

  const mintConqueror = async () => {
    if(Conqueror === "") return

    let conquerorPrice = await Conqueror.methods.cost().call()

    Conqueror.methods.mint("1").send({
      from: selectedAddress,
      value: conquerorPrice.toString()
    })
      .on('transactionHash', (hash) => {
        console.log("Transaction Hash: ", hash)
      })
      .on('receipt', (receipt) => {
        console.log("Transaction Receipt: ", receipt)
      })
      .on('error', (error) => {
        console.log("Error: ", error)
      })
  }



  return (
    <>
      <Navbar showConnectBtn="true" connect={setAccount} isConnected={selectedAddress ? true : false} />
      <div className="badge-section-parent d-flex flex-column align-items-center">
        <div className="badge-section-main ">
          <div className="badge-heading-section d-flex justify-content-center d-flex flex-column mb-5">
            <h1 className="founder-header text-center text-light mb-4">
              Founders Badge Sale!
            </h1>
            <p className="founder-para text-center text-light">
              To enable anyone from the community to show support to the project
              We will be releasing our Founder’s badges! The badge will be NFT’s
              and will serve as proof that you were there from the start of the
              Project! Only 1 badge can be minted per Wallet address.
            </p>
          </div>

          <div className="badge-cards-parent d-flex justify-content-center">
            <Cardcomponent
              className="lord"
              Cardscolors={{
                background: "#FDECDC",
                header: "#b97b08",
                li_color: "#ed8a25",
                btnbackground_color: "#EE8924",
                cardBottom_border_color: "#e6a222",
              }}
              CardImage={LordImg}
              CardHeading="LORD"
              Card_ContentList={Lord_ListData}
              usdc="25 Matic"
              card_btn="Mint NFT"
              remainings="800/800 Remaining"
              mint={mintLord}
            />

            <Cardcomponent
              className="king"
              Cardscolors={{
                background: "#FEFAFD",
                header: "#089EB6",
                li_color: "#09B2D3",
                btnbackground_color: "#05B4CB",

                cardBottom_border_color: "#0BC2E9",
              }}
              CardImage={KingImg}
              CardHeading="KING"
              Card_ContentList={King_ListData}
              usdc="65 MATIC"
              card_btn="Mint NFT"
              remainings="400/400 Remaining"
              mint={mintKing}
            />

            <Cardcomponent
              className="legendary"
              Cardscolors={{
                background: "#FEF1EE",
                header: "#BB3C1D",
                li_color: "#EB7B3B",
                btnbackground_color: "#FE4A27",

                cardBottom_border_color: "#E76C26",
              }}
              CardImage={LegendaryImg}
              CardHeading="LEGENDARY"
              Card_ContentList={Legendary_ListData}
              usdc="125 Matic"
              card_btn="Mint NFT"
              remainings="200/200 Remaining"
              mint={mintLegendary}
            />

            <Cardcomponent
              className="conqueror"
              Cardscolors={{
                background: "#DFE0F8",
                header: "#482296",
                li_color: "#8539B2",
                btnbackground_color: "#602CC5",
                cardBottom_border_color: "#5423B1",
              }}
              CardImage={ConqureImg}
              CardHeading="CONQUEROR"
              Card_ContentList={Conqueror_ListData}
              usdc="250 Matic"
              card_btn="Mint NFT"
              remainings="100/100 Remaining"
              mint={mintConqueror}
            />
          </div>
          <p className="badge-note text-light mt-4 mb-5">
            *Note: Badges are immediately transferred to founding partners’
            wallet after minting. <br /> *Note: Founding Plus, Headstart Packs
            and PLV tokens will be distributed in Q2 2022 Before game launch.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Foundarbadge;
