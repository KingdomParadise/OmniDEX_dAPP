import React, { useState, useContext, makeStyles } from "react";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import { darkTheme } from "../../theme/colors";

import Button from "../../elements/Button";
import { ThemeContext } from "../../theme/ThemeContext";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Checkbox from "@mui/material/Checkbox";
import "../../assets/styles/staking.css";
import { FiSearch } from "react-icons/fi";
import Footer from "../../components/Footer";
import faddedBox from "../../assets/images/faddedBox.png";
import bsc from "../../assets/images/staking/bsc.png";
import fate from "../../assets/images/staking/fate.png";
import pancake from "../../assets/images/staking/pancakeswap.png";
import MibIcon from "../../assets/images/staking/mid_icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import share from "../../assets/images/staking/share.png";
import shareLight from "../../assets/images/staking/share_light.png";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import MediaQuery from "react-responsive";
const CardBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  width: 90%;

  padding: 10px 10px;
  margin-bottom: 10px;
  background-color: #1b1b1b;
  border-radius: 5px;
`;

const CardBlock1 = styled.div`
  width: 82%;
  padding: 10px 10px;
  margin-bottom: 10px;
  background-color: #1b1b1b;
  border-radius: 5px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 70px;

  width: 96%;
`;

const data = [
  {
    id: 1,
    title: "VZN",
    percentage: "16.9%",
    amount: "$3,332,263",
    icon: faddedBox,
  },
  {
    id: 2,
    title: "Cake",
    percentage: "16.9%",
    amount: "$3,332,263",
    icon: pancake,
  },
  {
    id: 3,
    title: "Fate",
    percentage: "16.9%",
    amount: "$3,332,263",
    icon: fate,
  },
  {
    id: 4,
    title: "Bnb",
    percentage: "16.9%",
    amount: "$3,332,263",
    icon: bsc,
  },
];

const ListView = () => {
  const [view, setView] = useState(0);
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  return (
    <>
      {data.map((option) => (
        <CardBlock style={{ background: darkMode ? "" : "#dfdfdf" }}>
          <Grid container spacing={1}>
            <Grid
              item
              md={1}
              xs={4}
              style={{
                background: darkMode ? "#202020" : "#c3c3c3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70px",
              }}
            >
              <img
                src={option.icon}
                width={30}
                height={40}
                alt="icon"
                style={{
                  background: "#1a1a1a",
                  borderRadius: "50px",
                }}
              />
            </Grid>
            <Grid item md={2} xs={1} className="title_c">
              {" "}
              <Typography className="f_size">{option.title}</Typography>
            </Grid>
            <Grid item md={2} className="title_c_1">
              <Typography className="f_size">{option.percentage}</Typography>
            </Grid>
            <Grid item md={1} className="title_c_1">
              <img src={MibIcon} width={20} alt="icon" />
            </Grid>
            <Grid item md={2} className="title_c_1">
              {" "}
              <Typography className="f_size">{option.amount}</Typography>
            </Grid>
            <Grid item md={1} className="title_c_1">
              <Typography className="f_size">?</Typography>
            </Grid>
            <Grid item md={3} className="title_c_2">
              {" "}
              <Button type="button" primary>
                Unlock Wallet{" "}
              </Button>
            </Grid>
            <Grid item md={1} className="title_c_1">
              {view == 1 ? (
                <KeyboardArrowUpIcon size={20} onClick={() => setView(0)} />
              ) : (
                <KeyboardArrowDownIcon size={20} onClick={() => setView(1)} />
              )}
            </Grid>

            {view == 1 ? (
              <>
                <Grid item md={12} />
                <Grid item md={12} />
                <Grid item md={12} />
                <Grid item md={5} />
                <br />
                <div style={{ display: "flex" }}>
                  <Typography
                    style={{ fontSize: "10px", marginRight: "160px" }}
                  >
                    Multiplayer: 1x &nbsp; &nbsp; &nbsp;
                    <img
                      src={darkMode ? share : shareLight}
                      alt="share"
                      style={{ width: "10px" }}
                    />
                    <br />
                    Stake: VZN <br />
                    Staked Value: -~USD <br />
                    Earned Value: -~USD{" "}
                  </Typography>
                  <Typography style={{ fontSize: "10px" }}>
                    View on BscScan&nbsp; &nbsp; &nbsp;
                    <img
                      src={darkMode ? share : shareLight}
                      alt="share"
                      style={{ width: "10px" }}
                    />
                    <br />
                    View Project Site&nbsp; &nbsp;
                    <img
                      src={darkMode ? share : shareLight}
                      alt="share"
                      style={{ width: "10px" }}
                    />
                    <br />
                    Add to Metamask
                  </Typography>
                </div>
              </>
            ) : (
              ""
            )}
          </Grid>
        </CardBlock>
      ))}
    </>
  );
};

const BoxView = () => {
  const [view, setView] = useState(0);
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  return (
    <>
      <Grid container spacing={3} direction="row">
        {data.map((option) => (
          <>
            {" "}
            <Grid item md={6} xs={12}>
              <CardBlock1
                className="sec_x"
                style={{ background: darkMode ? "" : "#dfdfdf" }}
              >
                <Grid style={{ display: "flex" }}>
                  {" "}
                  <Grid
                    item
                    md={2}
                    className="icon_cl"
                    style={{
                      background: darkMode ? "#202020" : "#c3c3c3",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "60px",
                    }}
                  >
                    <img src={option.icon} width={40} alt="icon" />
                  </Grid>
                  <Grid item md={1} xs={1} className="kin_k">
                    {" "}
                    <Typography className="f_size_b">{option.title}</Typography>
                  </Grid>
                  <Grid item md={3} xs={2} />
                  <Grid item md={2} xs>
                    <Typography className="f_size_b">APR:</Typography>
                    <Typography className="f_size_c">
                      {option.percentage}
                    </Typography>
                  </Grid>
                  <Grid item md={3} />
                  <Grid item md={1}>
                    <img src={MibIcon} width={20} alt="icon" />
                  </Grid>
                </Grid>
                <Grid
                  item
                  className="kin_d"
                  md={12}
                  style={{ marginTop: "-35px", marginLeft: "19%" }}
                >
                  {" "}
                  <Typography style={{ fontSize: "12px" }}>
                    VZN Earned <br />
                    <span style={{ fontSize: "25px" }}>?</span>
                  </Typography>
                  <Grid
                    item
                    md={5}
                    className="kin_p"
                    xs={7}
                    style={{
                      marginTop: "-10%",
                      marginLeft: "48%",
                    }}
                  >
                    <Button
                      type="button"
                      primary
                      style={{ width: "100%", borderRadius: "10px" }}
                    >
                      <Typography style={{ fontSize: "12px" }}>
                        {" "}
                        Unlock Wallet
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    md={1}
                    style={{
                      marginTop: "-35px",
                      marginLeft: "90%",
                      marginTop: "-10%",
                    }}
                  >
                    {view == 1 ? (
                      <KeyboardArrowUpIcon
                        size={20}
                        onClick={() => setView(0)}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        size={20}
                        onClick={() => setView(1)}
                      />
                    )}
                  </Grid>
                </Grid>
                {view == 1 ? (
                  <>
                    <Grid item md={12} />
                    <Grid item md={12} />
                    <Grid item md={12} />
                    <Grid item md={5} />
                    <br />
                    <div style={{ display: "flex" }}>
                      <Typography
                        style={{ fontSize: "10px", marginRight: "160px" }}
                      >
                        Multiplayer: 1x &nbsp; &nbsp; &nbsp;
                        <img
                          src={darkMode ? share : shareLight}
                          alt="share"
                          style={{ width: "10px" }}
                        />
                        <br />
                        Stake: VZN <br />
                        Staked Value: -~USD <br />
                        Earned Value: -~USD{" "}
                      </Typography>
                      <Typography style={{ fontSize: "10px" }}>
                        View on BscScan&nbsp; &nbsp; &nbsp;
                        <img
                          src={darkMode ? share : shareLight}
                          alt="share"
                          style={{ width: "10px" }}
                        />
                        <br />
                        View Project Site&nbsp; &nbsp;
                        <img
                          src={darkMode ? share : shareLight}
                          alt="share"
                          style={{ width: "10px" }}
                        />
                        <br />
                        Add to Metamask
                      </Typography>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </CardBlock1>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};
const Staking = () => {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  const [counter, setCounter] = useState(1);
  return (
    <div className={darkMode ? "main" : "main_light"}>
      <Section
        style={{
          marginTop: 100,
          marginBottom: 200,
        }}
        className="sec_p"
      >
        <Typography className="main_body">
          Stake Tokens to earn VISION COIN
        </Typography>
        <CardBlock style={{ background: darkMode ? "" : "#dfdfdf" }}>
          <Grid container spacing={0}>
            <Grid item md={1} className="btn_g">
              <IconButton
                style={{
                  color: darkMode ? "white" : "black",
                  color: counter == 2 ? "grey" : "white",
                }}
              >
                <ViewListIcon
                  className="icon_size"
                  onClick={() => {
                    setCounter(1);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item md={1} className="btn_g">
              <IconButton
                style={{
                  color: darkMode ? "white" : "black",
                  color: counter == 1 ? "grey" : "white",
                }}
              >
                <ViewModuleIcon
                  className="icon_size"
                  onClick={() => {
                    setCounter(2);
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item md={4} xs={8} className="input-icons">
              <FiSearch
                className="icon"
                size={20}
                color={darkMode ? "#fff" : "9a9a9a"}
              />
              <input
                className={darkMode ? "input-field" : "input-field-light"}
                type="text"
                placeholder="Search name or paste address"
                // onChange={() => handleSearch()}
              />
            </Grid>
            <MediaQuery maxWidth={480}>
              <Grid item md={1} xs={2} className="check_map">
                <Checkbox
                  size="large"
                  className={darkMode ? "check_box" : "check_box_li"}
                />
              </Grid>
              <Grid item md={1} xs={1} className="stak_map">
                <Typography>Staked</Typography>
              </Grid>
            </MediaQuery>
            <Grid item md={3} xs={12}>
              <Button
                type="button"
                primary
                className="button_map"
                style={{ paddingRight: "35px", borderRadius: "10px" }}
              >
                Active
              </Button>{" "}
              <Button
                type="button"
                primary
                className="button_map_1"
                style={{
                  marginLeft: "-20px",
                  paddingLeft: "25px",
                  borderRadius: "10px",
                }}
              >
                Inactive
              </Button>
            </Grid>

            <MediaQuery minWidth={481}>
              <Grid item md={1} className="check_map">
                <Checkbox
                  size="large"
                  className={darkMode ? "check_box" : "check_box_li"}
                />
              </Grid>
              <Grid item md={1} className="stak_map">
                <Typography>Staked</Typography>
              </Grid>
            </MediaQuery>
          </Grid>
        </CardBlock>
        <CardBlock style={{ background: darkMode ? "" : "#dfdfdf" }}>
          <Grid container spacing={1}>
            <Grid item md={3}>
              {" "}
              <Typography>Hot</Typography>
            </Grid>

            <Grid item md={2}>
              {" "}
              <Typography>Token </Typography>
            </Grid>

            <Grid item md={2}>
              {" "}
              <Typography>APR</Typography>
            </Grid>

            <Grid item md={2}>
              {" "}
              <Typography>Liquidity</Typography>
            </Grid>

            <Grid item md={2}>
              {" "}
              <Typography> Earned</Typography>
            </Grid>
          </Grid>
        </CardBlock>
      </Section>
      <Grid
        className="view_c"
        style={{ marginLeft: "70px", marginTop: "-190px" }}
      >
        <MediaQuery minWidth={481}>
          {" "}
          {counter == 1 ? <ListView /> : <BoxView />}
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          <BoxView />
        </MediaQuery>
      </Grid>
      <Footer />
    </div>
  );
};

export default Staking;
