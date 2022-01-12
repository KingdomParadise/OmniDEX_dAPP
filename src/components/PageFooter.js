import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.png";
import facebook from "../assets/images/communityIcons/fb.svg";
import discord from "../assets/images/communityIcons/discord.svg";
import github from "../assets/images/communityIcons/github.svg";
import email from "../assets/images/communityIcons/mail.svg";
import twitter from "../assets/images/communityIcons/twitter.svg";
import telegram from "../assets/images/communityIcons/telegram.svg";
import coingecko from "../assets/images/communityIcons/coingecko.svg";

function PageFooter() {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  return (
    <>
      <div
        className={darkMode ? " page1BodyContainer" : "page1BodyContainerLight"}
      >
        <div className="col-md-12 p-0">
          <div
            className={
              darkMode
                ? "newsLetter newsletter-dark"
                : "newsLetter newsLetter-light"
            }
          >
            <div>
              <h2 className="text-center text-md-left">
                Subscribe to our newsletter
              </h2>
              <p className="text-center text-md-left">
                Fill in your email to receive Omni's latest info and updates
              </p>
            </div>
            <div>
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control fs-lg border-0"
                    placeholder="Email Address"
                    id="mail"
                    name="email"
                  />
                  <div className="input-group-append">
                    <button className=" action_button px-4">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <footer className="footer_container">
        <div className="_2CnzWZ7-9CkSBh7Czhrq7O">
          <div className="xKGRxEZ58RoSqMJGbrrq6">
            <div>
              <h3 className="_1taTtc7XhIMqvwCgfnppti">Community</h3>
              <nav className="_3jt2oztRe9u2DB6DlqqmE_">
                <Link to="/" className="_2AYjj8ChaxuGx00GqNpb3u">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={discord} alt="dicord" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={telegram} alt="telegram" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={email} alt="email" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={github} alt="github" />
                </Link>
                <Link className="_2AYjj8ChaxuGx00GqNpb3u" to="/">
                  <img src={coingecko} alt="coingecko" />
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="_1taTtc7XhIMqvwCgfnppti">Documents</h3>
              <nav className="RmujUMsYkKkkuRY8eS296">
                <Link to="/">
                  Pitch Deck
                  <img
                    className="arrow__3f0-7"
                    src={arrow}
                    height={15}
                    width={35}
                    alt="arrow"
                  />
                </Link>
                <Link to="/">
                  One Pager
                  <img
                    className="arrow__3f0-7"
                    src={arrow}
                    height={15}
                    width={35}
                    alt="arrow"
                  />
                </Link>
                <Link to="/">
                  Roadmap
                  <img
                    className="arrow__3f0-7"
                    src={arrow}
                    height={15}
                    width={35}
                    alt="arrow"
                  />
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="_1taTtc7XhIMqvwCgfnppti">Company</h3>
              <nav className="RmujUMsYkKkkuRY8eS296">
                <Link to="/">
                  Merch Shop
                  <img
                    className="arrow__3f0-7"
                    src={arrow}
                    height={15}
                    width={35}
                    alt="arrow"
                  />
                </Link>
                <Link to="/">
                  Contact Our Team
                  <img
                    className="arrow__3f0-7"
                    src={arrow}
                    height={15}
                    width={35}
                    alt="arrow"
                  />
                </Link>
              </nav>
            </div>
          </div>
          <p className="nEVyhRp2L427W-NvwfPEX">
            ©Copyright Omni 2021,{" "}
            <Link to="/" className="_3d4_tKssgilyA1Tcp3MBFt">
              Privacy policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default PageFooter;
