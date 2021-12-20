import React, { useEffect, useRef,useLayoutEffect } from "react";
import "./HeroPluniverse.css";
import pluniverseImage1 from "assets/images/pluniverseImage1.png";
import pluniverseImage10 from "assets/images/pluniverseImage10.png";
import pluniverseImage11 from "assets/images/pluniverseImage11.png";
import pluniverseImage12 from "assets/images/pluniverseImage12.png";
import pluniverseImage13 from "assets/images/pluniverseImage13.png";
import pluniverseImage14 from "assets/images/pluniverseImage14.png";
import pluniverseImage15 from "assets/images/pluniverseImage15.png";
import pluniverseImage16 from "assets/images/pluniverseImage16.png";
import pluniverseImage17 from "assets/images/pluniverseImage17.png";
import pluniverseImage18 from "assets/images/pluniverseImage18.png";
import pluniverseImage19 from "assets/images/pluniverseImage19.png";
import pluniverseImage20 from "assets/images/pluniverseImage20.png";
import pluniverseImage21 from "assets/images/pluniverseImage21.gif";
import pluniverseImage22 from "assets/images/pluniverseImage22.gif";
import pluniverseImage23 from "assets/images/pluniverseImage23.png";
import gsap from "gsap";

import twitterIcon from "assets/images/twitter-icon.png";
import discordIcon from "assets/images/discord-icon.png";
import instagramIcon from "assets/images/instagram-icon.png";
import facebookIcon from "assets/images/facebook-icon.png";
import telegramIcon from "assets/images/telegram-icon.png";
import Navbar from "layouts/Navbar/Navbar";

function HeroPluniverse() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pluniverseEl = useRef();
  const q = gsap.utils.selector(pluniverseEl);
  const mediaMatch = window.matchMedia("(min-width: 500px)");
  const [matches, setMatches] = React.useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  useEffect(() => {
    gsap.set(q("#Glitters>*"), { scale: 0, transformOrigin: "center" });
    gsap.to(q("#Glitters>*"), {
      duration: 1,
      scale: 1,
      stagger: {
        each: 0.2,
        from: "random",
        repeat: -1,
        repeatDelay: 0.2,
        yoyo: true,
      },
      delay: -15,
    });
    gsap.to(q("#crystalGlows>*"), {
      duration: 3,
      opacity: 0.2,
      stagger: { each: 0.3, repeat: -1, yoyo: true },
    });

    let moveMent = (selector, signDir, delay) => {
      gsap.to(q(selector), {
        duration: 4,
        x: 5 * signDir,
        repeat: -1,
        yoyo: true,
        delay: delay,
        ease: "power1.inOut",
      });
      gsap.to(q(selector), {
        duration: 7,
        y: -5,
        repeat: -1,
        yoyo: true,
        delay: delay,
        ease: "power1.inOut",
      });
    };
    moveMent("#frost", 1, -3);
    moveMent("#cryptid", 1, -1.5);
    moveMent("#grass", 1, -3.3);
    moveMent("#naga", 1, -0.2);
    moveMent("#ent", -1, -1.5);
    moveMent("#beetle2", -1, -1.5);
    moveMent("#moth", -1, -2.7);
    moveMent("#predator", -1, -0.7);
  }, []);

  return (
    <div
      ref={pluniverseEl}
      style={matches ? { height: "100%", width: "100%" } : {}}
    >
      <div
        className="Canvas"
        style={
          matches ? { height: "100%", width: "100%", position: "relative" } : {}
        }
      >
        <Navbar />
        <div className="hero-content">
          <div className="social-icons">
            <a
              className="social-icon-btn"
              href="https://twitter.com/pluniversegame"
              target="_blank"
              rel="noopener"
            >
              <img src={twitterIcon} alt="..." />
            </a>
            <a
              className="social-icon-btn"
              href="https://discord.gg/Du3jUNjZc8"
              target="_blank"
              rel="noopener"
            >
              <img src={discordIcon} alt="..." />
            </a>
            <a
              className="social-icon-btn"
              href="https://www.instagram.com/pluniversegame/"
              target="_blank"
              rel="noopener"
            >
              <img src={instagramIcon} alt="..." />
            </a>
            <a
              className="social-icon-btn"
              href="https://www.facebook.com/pluniversegame"
              target="_blank"
              rel="noopener"
            >
              <img src={facebookIcon} alt="..." />
            </a>
            <a
              className="social-icon-btn"
              href="https://t.me/pluniversegame"
              target="_blank"
              rel="noopener"
            >
              <img src={telegramIcon} alt="..." />
            </a>
          </div>

          <a href="#" className="terms-condition">
            Privacy Policy | Terms & Conditions
          </a>
        </div>
        <svg
          style={
            matches
              ? {
                  transform: "none",
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }
              : {}
          }
          preserveAspectRatio={"none"}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1382.4 817.92"
        >
          <defs>
            <style>{`.cls-1{isolation:isolate;}.cls-2{mix-blend-mode:screen;}.cls-3,.cls-6{opacity:0.3;}.cls-3{mix-blend-mode:multiply;}.cls-4{mix-blend-mode:color-dodge;}.cls-5{fill:#fff200;}.cls-6,.cls-7{fill:#5bebf1;}.cls-7{opacity:0.7;}`}</style>
          </defs>
          <g className="cls-1">
            <g id="For_animation_svg_Layer" data-name="For animation svg Layer">
              <g id="BG_sky">
                <image
                  id="Group_1_Image"
                  data-name="Group 1 Image"
                  width="1920"
                  height="1065"
                  transform="scale(0.72)"
                  xlinkHref={pluniverseImage1}
                />
              </g>
              <g id="BG_ground">
                <image
                  id="BG_ground_Image"
                  data-name="BG_ground Image"
                  width="1920"
                  height="772"
                  transform="translate(0 262.08) scale(0.72)"
                  xlinkHref={pluniverseImage10}
                />
              </g>
              <g id="yellow">
                <image
                  id="yellow_Image"
                  data-name="yellow Image"
                  className="cls-2"
                  width="1920"
                  height="364"
                  transform="translate(0 555.84) scale(0.72)"
                  xlinkHref={pluniverseImage11}
                />
              </g>
              <g id="Charecters">
                <g id="frost">
                  <image
                    id="frost_Image"
                    data-name="frost Image"
                    width="156"
                    height="200"
                    transform="translate(812.88 138.24) scale(0.72)"
                    xlinkHref={pluniverseImage12}
                  />
                </g>
                <g id="cryptid">
                  <image
                    id="cryptid_Image"
                    data-name="cryptid Image"
                    width="151"
                    height="210"
                    transform="translate(678.96 115.92) scale(0.72)"
                    xlinkHref={pluniverseImage13}
                  />
                </g>
                <g id="ent">
                  <image
                    id="ent_Image"
                    data-name="ent Image"
                    width="279"
                    height="280"
                    transform="translate(448.56 140.4) scale(0.72)"
                    xlinkHref={pluniverseImage14}
                  />
                </g>
                <g id="beetle2">
                  <image
                    id="beetle2_Image"
                    data-name="beetle2 Image"
                    width="204"
                    height="289"
                    transform="translate(520.56 113.76) scale(0.72)"
                    xlinkHref={pluniverseImage15}
                  />
                </g>
                <g id="moth">
                  <image
                    id="moth_Image"
                    data-name="moth Image"
                    width="148"
                    height="143"
                    transform="translate(606.96 151.92) scale(0.72)"
                    xlinkHref={pluniverseImage16}
                  />
                </g>
                <g id="grass">
                  <image
                    id="grass_Image"
                    data-name="grass Image"
                    width="201"
                    height="310"
                    transform="translate(730.8 113.76) scale(0.72)"
                    xlinkHref={pluniverseImage17}
                  />
                </g>
                <g id="Layer_343" data-name="Layer 343">
                  <image
                    id="Layer_343_Image"
                    data-name="Layer 343 Image"
                    className="cls-3"
                    width="588"
                    height="545"
                    transform="translate(567.36 178.56) scale(0.72)"
                    xlinkHref={pluniverseImage18}
                  />
                </g>
                <g id="naga">
                  <image
                    id="naga_Image"
                    data-name="naga Image"
                    width="256"
                    height="225"
                    transform="translate(752.4 237.6) scale(0.72)"
                    xlinkHref={pluniverseImage19}
                  />
                </g>
                <g id="predator">
                  <image
                    id="predator_Image"
                    data-name="predator Image"
                    width="265"
                    height="242"
                    transform="translate(447.12 245.52) scale(0.72)"
                    xlinkHref={pluniverseImage20}
                  />
                </g>
                <g id="ember_open_eyes">
                  <image
                    id="ember_open_eyes_Image"
                    data-name="ember_open eyes Image"
                    width="272"
                    height="296"
                    transform="translate(592.56 164.16) scale(0.72)"
                    xlinkHref={pluniverseImage21}
                  />
                </g>
                <g id="fire_fx">
                  <image
                    id="fire_fx_Image"
                    data-name="fire fx Image"
                    width="337"
                    height="108"
                    transform="translate(563.76 280.8) scale(0.72)"
                    xlinkHref={pluniverseImage22}
                  />
                </g>
              </g>
              <g id="pluniverse">
                <image
                  id="pluniverse_Image"
                  data-name="pluniverse Image"
                  width="630"
                  height="216"
                  transform="translate(465.84 341.28) scale(0.72)"
                  xlinkHref={pluniverseImage23}
                />
              </g>
              <g id="Glitters" className="cls-4">
                <g id="Glitter007">
                  <path
                    className="cls-5"
                    d="M555.77,759.89c0-.74-2-1.4-5.15-1.82a7.3,7.3,0,0,1-6.29-6.28c-.41-3.13-1.07-5.15-1.81-5.15s-1.4,2-1.81,5.15a7.3,7.3,0,0,1-6.29,6.28c-3.13.42-5.15,1.08-5.15,1.82s2,1.39,5.15,1.81a7.31,7.31,0,0,1,6.29,6.29c.41,3.13,1.07,5.15,1.81,5.15s1.4-2,1.81-5.15a7.31,7.31,0,0,1,6.29-6.29C553.75,761.28,555.77,760.63,555.77,759.89Z"
                  />
                </g>
                <g id="Glitter007-2" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M571.77,745.91c0-.45-1.22-.84-3.11-1.1a4.39,4.39,0,0,1-3.8-3.8c-.26-1.89-.65-3.11-1.1-3.11s-.84,1.22-1.1,3.11a4.39,4.39,0,0,1-3.8,3.8c-1.89.26-3.11.65-3.11,1.1s1.22.84,3.11,1.1a4.39,4.39,0,0,1,3.8,3.8c.26,1.89.65,3.11,1.1,3.11s.84-1.22,1.1-3.11a4.39,4.39,0,0,1,3.8-3.8C570.55,746.75,571.77,746.36,571.77,745.91Z"
                  />
                </g>
                <g id="Glitter007-3" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M307.92,727.25c0-.74-2-1.39-5.15-1.81a7.3,7.3,0,0,1-6.28-6.29c-.42-3.13-1.08-5.15-1.82-5.15s-1.39,2-1.81,5.15a7.3,7.3,0,0,1-6.28,6.29c-3.13.42-5.15,1.07-5.15,1.81s2,1.4,5.15,1.82a7.29,7.29,0,0,1,6.28,6.28c.42,3.13,1.08,5.15,1.81,5.15s1.4-2,1.82-5.15a7.29,7.29,0,0,1,6.28-6.28C305.9,728.65,307.92,728,307.92,727.25Z"
                  />
                </g>
                <g id="Glitter007-4" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M328.06,732.19c0-.47-1.27-.88-3.24-1.14a4.6,4.6,0,0,1-3.94-3.94c-.26-2-.67-3.24-1.14-3.24s-.87,1.27-1.14,3.24a4.58,4.58,0,0,1-3.94,3.94c-2,.26-3.23.67-3.23,1.14s1.27.87,3.23,1.13a4.58,4.58,0,0,1,3.94,3.95c.27,2,.68,3.23,1.14,3.23s.88-1.27,1.14-3.23a4.6,4.6,0,0,1,3.94-3.95C326.79,733.06,328.06,732.65,328.06,732.19Z"
                  />
                </g>
                <g id="Glitter007-5" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M277.78,773.14c0-.74-2-1.4-5.15-1.82a7.29,7.29,0,0,1-6.28-6.28c-.42-3.13-1.08-5.15-1.82-5.15s-1.39,2-1.81,5.15a7.3,7.3,0,0,1-6.28,6.28c-3.14.42-5.16,1.08-5.16,1.82s2,1.39,5.16,1.81a7.3,7.3,0,0,1,6.28,6.28c.42,3.14,1.07,5.16,1.81,5.16s1.4-2,1.82-5.16a7.29,7.29,0,0,1,6.28-6.28C275.76,774.53,277.78,773.88,277.78,773.14Z"
                  />
                </g>
                <g id="Glitter007-6" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M300.39,767.52c0-.48-1.32-.91-3.38-1.19a4.78,4.78,0,0,1-4.11-4.11c-.27-2.05-.7-3.38-1.19-3.38s-.91,1.33-1.19,3.38a4.76,4.76,0,0,1-4.11,4.11c-2.05.28-3.37.71-3.37,1.19s1.32.91,3.37,1.19a4.76,4.76,0,0,1,4.11,4.11c.28,2,.71,3.38,1.19,3.38s.92-1.33,1.19-3.38a4.78,4.78,0,0,1,4.11-4.11C299.07,768.43,300.39,768,300.39,767.52Z"
                  />
                </g>
                <g id="Glitter007-7" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M348.2,752.08c0-.48-1.32-.91-3.37-1.19a4.76,4.76,0,0,1-4.11-4.11c-.28-2.06-.71-3.38-1.19-3.38s-.92,1.32-1.19,3.38a4.78,4.78,0,0,1-4.12,4.11c-2.05.28-3.37.71-3.37,1.19s1.32.91,3.37,1.19a4.77,4.77,0,0,1,4.12,4.11c.27,2,.7,3.38,1.19,3.38s.91-1.33,1.19-3.38a4.75,4.75,0,0,1,4.11-4.11C346.88,753,348.2,752.56,348.2,752.08Z"
                  />
                </g>
                <g id="Glitter007-8" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M339.24,713.94c0-.47-1.29-.89-3.3-1.16a4.67,4.67,0,0,1-4-4c-.27-2-.69-3.29-1.16-3.29s-.9,1.29-1.16,3.29a4.67,4.67,0,0,1-4,4c-2,.27-3.3.69-3.3,1.16s1.3.89,3.3,1.16a4.67,4.67,0,0,1,4,4c.26,2,.68,3.29,1.16,3.29s.89-1.29,1.16-3.29a4.67,4.67,0,0,1,4-4C338,714.83,339.24,714.41,339.24,713.94Z"
                  />
                </g>
                <g id="Glitter007-9" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M523.2,756.16c0-.55-1.51-1-3.85-1.36a5.43,5.43,0,0,1-4.68-4.68c-.32-2.34-.81-3.85-1.36-3.85s-1,1.51-1.35,3.85a5.44,5.44,0,0,1-4.69,4.68c-2.34.32-3.85.81-3.85,1.36s1.51,1,3.85,1.35A5.45,5.45,0,0,1,512,762.2c.31,2.34.8,3.85,1.35,3.85s1-1.51,1.36-3.85a5.44,5.44,0,0,1,4.68-4.69C521.69,757.2,523.2,756.71,523.2,756.16Z"
                  />
                </g>
                <g id="Glitter007-10" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M819.87,708.57c0-.79-2.16-1.49-5.52-1.94a7.82,7.82,0,0,1-6.73-6.73c-.44-3.35-1.15-5.51-1.94-5.51s-1.49,2.16-1.94,5.51a7.81,7.81,0,0,1-6.73,6.73c-3.35.45-5.51,1.15-5.51,1.94s2.16,1.5,5.51,1.95a7.81,7.81,0,0,1,6.73,6.72c.45,3.36,1.15,5.52,1.94,5.52s1.5-2.16,1.94-5.52a7.82,7.82,0,0,1,6.73-6.72C817.71,710.07,819.87,709.37,819.87,708.57Z"
                  />
                </g>
                <g id="Glitter007-11" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M843.06,716.41c0-.6-1.66-1.14-4.23-1.49a6,6,0,0,1-5.16-5.16c-.34-2.57-.88-4.23-1.49-4.23s-1.15,1.66-1.49,4.23a6,6,0,0,1-5.16,5.16c-2.57.35-4.23.89-4.23,1.49s1.66,1.15,4.23,1.49a6,6,0,0,1,5.16,5.16c.34,2.58.88,4.23,1.49,4.23s1.15-1.65,1.49-4.23a6,6,0,0,1,5.16-5.16C841.4,717.56,843.06,717,843.06,716.41Z"
                  />
                </g>
                <g id="Glitter007-12" data-name="Glitter007">
                  <path
                    className="cls-5"
                    d="M784.06,726.66c0-.54-1.47-1-3.75-1.32a5.3,5.3,0,0,1-4.56-4.56c-.3-2.28-.78-3.74-1.32-3.74s-1,1.46-1.32,3.74a5.3,5.3,0,0,1-4.56,4.56c-2.28.31-3.74.78-3.74,1.32s1.46,1,3.74,1.32a5.3,5.3,0,0,1,4.56,4.56c.31,2.28.78,3.75,1.32,3.75s1-1.47,1.32-3.75a5.3,5.3,0,0,1,4.56-4.56C782.59,727.68,784.06,727.2,784.06,726.66Z"
                  />
                </g>
              </g>
              <g id="crystalGlows">
                <polygon
                  className="cls-6"
                  points="1298.63 797.53 1283.77 766.8 1279.2 717.53 1295.2 678.1 1294.63 651.82 1323.77 655.82 1356.34 674.67 1375.77 704.39 1365.49 740.5 1341.06 773.14 1298.63 797.53"
                />
                <polygon
                  className="cls-7"
                  points="873.49 782.39 879.49 766.8 911.63 755.39 918.91 757.53 950.2 736.29 957.49 739.53 960.49 759.34 969.06 759.34 978.06 769.1 978.06 776.39 1005.06 787.1 1007.63 794.82 1003.77 803.82 986.2 803.82 951.49 803.82 905.63 799.96 888.49 793.96 873.49 782.39"
                />
                <polygon
                  className="cls-7"
                  points="639.06 726.66 649.34 713.39 659.63 710.82 668.2 716.41 675.06 729.67 672.06 737.9 680.2 737.9 685.77 746.64 691.2 759.89 674.2 766.05 654.06 749.82 641.2 738.43 639.06 726.66"
                />
                <polygon
                  className="cls-7"
                  points="567.36 701.82 574.77 691.1 581.2 681.25 590.63 679.1 601.77 686.39 610.34 683.39 618.06 681.67 622.34 686.82 625.77 694.39 619.34 705.47 606.06 710.82 593.63 717.04 571.77 717.04 567.36 701.82"
                />
                <polygon
                  className="cls-7"
                  points="304.34 793.53 313.34 786.38 328.06 786.38 325.34 773.14 344.2 745.91 352.34 745.91 371.2 758.84 376.77 769.72 387.49 769.72 395.63 769.72 397.34 780.67 402.49 788.39 396.49 799.53 381.91 805.96 363.49 807.67 333.49 807.67 315.91 807.67 304.34 802.1 304.34 793.53"
                />
                <polygon
                  className="cls-6"
                  points="23.2 738.67 20.2 719.82 39.49 703.1 58.34 678.25 70.34 675.67 96.06 675.67 102.91 690.67 102.91 713.94 100.77 723.87 123.06 716.82 140.2 706.32 148.34 713.94 155.2 723.87 151.77 736.96 150.49 752.08 138.91 762.67 125.63 776.79 136.77 783.67 144.91 793.96 140.63 801.67 122.63 801.67 102.91 801.67 57.91 786.38 33.49 760.76 23.2 738.67"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroPluniverse;
