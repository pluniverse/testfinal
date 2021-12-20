import React from "react";
import facebook from "assets/images/facebook.png";
import discord from "assets/images/discord.png";
import twitter from "assets/images/twitter.png";
import instagram from "assets/images/instagram.png";
import SocialLink from "components/SocialLink/SocialLink";
import footerImg from "assets/images/footer-img.png";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container-wrapper">
          <div className="footer">
            <div className="footer-top">
              <img className="footer-brand" src={footerImg} alt="" />

              <form
                className="footer-input-wrapper validate"
                action="https://pluniverse.us20.list-manage.com/subscribe/post?u=798d52f555bfd5f27183bec75&amp;id=61b9e4eb3a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email Address"
                  className="footer-input required email"
                  // required
                  id="mce-EMAIL"
                />
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_798d52f555bfd5f27183bec75_61b9e4eb3a"
                    tabIndex={-1}
                    defaultValue
                  />
                </div>
                <button
                  className="footer-input-btn"
                  id="mc-embedded-subscribe"
                  type="submit"
                  name="subscribe"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <div className="footer-bottom">
              <div className="stay-connected-wrapper">
                <p className="fs-22px white weight-8 lh-1">Stay Connected!</p>

                <div className="social-links">
                  <SocialLink
                    img={facebook}
                    route="https://www.facebook.com/pluniversegame"
                  />
                  <SocialLink
                    img={discord}
                    route="https://discord.gg/Du3jUNjZc8"
                  />
                  <SocialLink
                    img={twitter}
                    route="https://twitter.com/pluniversegame"
                  />
                  <SocialLink
                    img={instagram}
                    route="https://www.instagram.com/pluniversegame/"
                  />
                </div>
              </div>

              <div className="footer-links">
                <a href="/foundersbadge">
                  <p className="fs-25px green weight-8 pointer lh-1">
                    Founders Badge
                  </p>
                </a>
                <a
                  href="https://whitepaper.pluniverse.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="fs-25px green weight-8 pointer lh-1">
                    Whitepaper
                  </p>
                </a>
                <a
                  href="https://whitepaper.pluniverse.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="fs-25px green weight-8 pointer lh-1">
                    Tokenomics
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
