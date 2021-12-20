import React from "react";
import "./style.css";
import breaker from "assets/images/breaker.png";

import HeroPluniverse from "components/HeroPluniverse";
import textImg from "assets/images/text-img.png";
import adventureImg from "assets/images/adventure-img.png";
import gameModeBox from "assets/images/game-modes-box.png";
import arrowLeft from "assets/images/left-arrow.png";
import arrowRight from "assets/images/right-arrow.png";
import expeditionImg from "assets/images/Expedition.jpg";
import Card from "components/Card/Card";
import roadmapBtn from "assets/images/roadmap-button.png";
import RoadmapCard from "components/RoadmapCard/RoadmapCard";
import BackedByCard from "components/BackedByCard/BackedByCard";

import Plu1 from "assets/images/plu-ent.png";
import Plu2 from "assets/images/plu-predator.png";
import Plu3 from "assets/images/plu-ember.png";
import Plu4 from "assets/images/plu-obsidian.png";
import Plu5 from "assets/images/plu-phoenix.png";
import breedingImg from "assets/images/breeding.jpg";
import guildQuest from "assets/images/Guild-Quest.jpg";
import pvpImg from "assets/images/PVP.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation } from "swiper";
import AudioPlayer from "components/AudioPlayer";

// Imported Special Features Imges
import Deflationary from "../../assets/images/featuresImages/deflationary.png";
import Guild from "../../assets/images/featuresImages/Guild.png";
import Marketplace from "../../assets/images/featuresImages/Marketplace.png";
import Ownerships from "../../assets/images/featuresImages/Ownerships.png";
import Footer from "layouts/Footer/Footer";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation]);

function Home() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  const [swiperIndex, setSwiperIndex] = React.useState(0);
  const swiperData = [
    {
      title: "Expedition",
      subtitle:
        "Join hands with other players and for a Guild in order to go overcome and defeat the ancient Gods and seige their territories for grand rewards and various treasures.",
    },
    {
      title: "Breeding",
      subtitle:
        "Breed and train your plus to maximize your potential in various game moes to earn more!",
    },
    {
      title: "Guild Quest",
      subtitle:
        "Join Hands with other plays and form a guild in order to overcome and defeat the ancient gods and seige their territories.",
    },
    {
      title: "PVP",
      subtitle:
        "Prove yourself in the coliseum and show off your skills with fellow players to earn more rewards!",
    },
  ];
  return (
    <>
      <div className="App">
        <AudioPlayer />
        <Link to="/foundersbadge">
          <img className="breaker" src={breaker} alt="..." />
        </Link>

        <div className="container">
          <HeroPluniverse />
        </div>

        <div className="adventure-wrapper">
          <div className="container-wrapper">
            <div className="adventure">
              <div className="adventure-left">
                <div className="adventure-titles">
                  <p className="waghu-family  fs-40px white lh-1">
                    The most awaited <br />
                    <span className="fs-70px green ">PlaytoEarn Adventure</span>
                  </p>
                  <img src={textImg} alt="..." />
                  <div className="paragraphs">
                    <p>
                      Pluniverse is a multiplayer NFT game wherein the main
                      characters are called Plu’s which are elemental species
                      from an alternate universe. Embark on a grand expedition
                      to gain items that you can sell into the marketplace for
                      Real Money
                    </p>
                    <p>
                      Lastly, form a guild with other players to extend your
                      influence and keep building your empire during this era of
                      peace in preparation for the fated “Great War”
                    </p>
                  </div>
                </div>
              </div>
              <div className="adventure-right">
                <img src={adventureImg} alt="..." />
              </div>
            </div>

            <div className="game-modes">
              <div className="game-modes-left">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  onSlideChange={(e) => setSwiperIndex(e.activeIndex)}
                  onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                      // Override prevEl & nextEl now that refs are defined
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      // Re-init navigation
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                >
                  <SwiperSlide>
                    <img src={expeditionImg} alt="..." />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={breedingImg} alt="..." />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={guildQuest} alt="..." />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pvpImg} alt="..." />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="game-modes-right">
                <div className="game-modes-right-img-wrapper">
                  <div>
                    <img
                      src={gameModeBox}
                      className="game-modes-right-img"
                      alt="..."
                    />
                    <img src={textImg} alt="..." />
                  </div>
                </div>

                <div className="game-modes-text-title">
                  <img src={arrowLeft} ref={navigationPrevRef} alt="..." />
                  <p className="waghu-family fs-40px green text-center lh-1">
                    {swiperData[swiperIndex].title}
                  </p>
                  <img src={arrowRight} ref={navigationNextRef} alt="..." />
                </div>

                <p className="game-modes-text-subtitle fs-20px white weight-8 lh-1 text-center">
                  {swiperData[swiperIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="special-features-wrapper">
          <div className="container-wrapper">
            <div>
              <p className="green lh-1 waghu-family fs-75px">
                SPECIAL FEATURES
              </p>
              <img src={textImg} alt="..." />
            </div>

            <div className="special-features-cards">
              <Card
                image={Ownerships}
                className="special-feature-ownership  special-feature-image"
                title="OWNERSHIPS"
                subtitle="All game assets are securely stores on the blockchain giving players exclusive ownership"
              />
              <Card
                image={Marketplace}
                className="special-feature-marktplace   special-feature-image"
                title="MARKETPLACE"
                subtitle="Trade with various players while creating your own impact to the marketplace"
              />
              <Card
                image={Deflationary}
                className="special-feature-deflationary special-feature-image"
                title="DEFLATIONARY TOKEN"
                subtitle="Various burning mechanisms allow preservation of the token value"
              />
              <Card
                image={Guild}
                className="special-feature-guide special-feature-image"
                title="GUILD SYSTEM"
                subtitle="Create an exciting ecosystem for the cmunity to earn more & connect with others"
              />
            </div>
          </div>
        </div>

        <div className="roadmap-wrapper">
          <div className="container-wrapper">
            <div className="roadmap">
              <a href="#" className="roadmap-btn">
                <img src={roadmapBtn} alt="..." />
              </a>

              <div className="roadmap-cards">
                <div className="roadmap-cards-middle-line">
                  <RoadmapCard
                    tickImg="true"
                    title="Year 2020"
                    pointes={[
                      "-Idea & research",
                      "-Game Development Consultations",
                      "-Blockchain Tech Consultations",
                      "-Business plan",
                      "-Team creation",
                      "-Characters and Gameplay concept development",
                      "-Private fund allocation",
                      "-Network selection Negotiation",
                    ]}
                  />
                  <RoadmapCard
                    tickImg="true"
                    title="Q3 2021"
                    pointes={[
                      "-Smart contracts development",
                      "-Game concept adjustments.",
                      "-Mini Website Launch",
                    ]}
                    to="left"
                  />
                  <RoadmapCard
                    title="Q4 2021"
                    pointes={[
                      "-Airdrop 1",
                      "-Plu class back stories release",
                      "-Events & Activities Tokens Giveaways",
                      "-Founder's Badge Sale.",
                      "-Opensea Collection",
                    ]}
                  />

                  <RoadmapCard
                    title="Q1 2022"
                    pointes={[
                      "-Pluniverse Team Reveal",
                      "-Airdrop 2",
                      "-Token Presale 1&2",
                      "-Pluniverse NFT Marketplace",
                      "-Pancakeswap Listing.",
                      "-Locked Pancakeswap Liquidity.",
                    ]}
                    to="left"
                  />

                  <RoadmapCard
                    title="Q2 2022"
                    pointes={[
                      "-Landsale Whitelisting",
                      "-Multi Chain connectivity",
                      "-2D Alpha Release",
                      "-Pluniverse Land sale",
                      "-PLV Staking",
                    ]}
                  />
                  <RoadmapCard
                    title="Q3 2022"
                    pointes={[
                      "-Major Exchange Listing, Preferably Binance.",
                      "-Mainstream release of Pluniverse Mini Games on Android",
                      "-Land Gameplay Sneak Peaks",
                    ]}
                    to="left"
                  />
                </div>
              </div>
              <div className="backed-by-wrapper">
                <p className="fs-57px text-center green lh-1 waghu-family">
                  Meet the Plus (Revealed) earn free tokens by joining the Guess
                  that plu Event!
                </p>

                <div className="backed-by-cards">
                  <BackedByCard img={Plu1} />
                  <BackedByCard img={Plu2} />
                  <BackedByCard img={Plu3} />
                  <BackedByCard img={Plu4} />
                  <BackedByCard img={Plu5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
