import React, { useState, useContext, makeStyles } from "react";
import Footer from "../../components/Footer";
import "../../assets/styles/faqStyles.css";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import { darkTheme } from "../../theme/colors";
import Section from "../../elements/Section";
import { ThemeContext } from "../../theme/ThemeContext";
import Card from "../../general/Card";
import { typography } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: ${darkTheme.blockGrey};
  border-radius: 5px;
`;

const Faq = () => {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  return (
    <>
      <FlexCenter className="containerBackgroundImage112">
        <Section
          style={{
            marginTop: 150,
            marginBottom: 200,
          }}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: 700,
              marginBottom: "20px",
            }}
            large
            className={darkMode ? "faq_st" : "faq_st_light"}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>What is Vision</Typography>
              <ArrowForwardIosIcon
                style={{
                  color: darkMode ? "white" : "#c2c2c2",
                  // marginLeft: "80%",
                }}
              />
            </div>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: 700,
              //   paddingBottom: 35,
              marginBottom: "20px",
            }}
            large
            className={darkMode ? "faq_st" : "faq_st_light"}
          >
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Who can use our service?</Typography>
              <ArrowForwardIosIcon
                style={{
                  color: darkMode ? "white" : "#c2c2c2",
                }}
              />
            </div>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: 700,
              //   paddingBottom: 35,
              marginBottom: "20px",
            }}
            large
            className={darkMode ? "faq_st" : "faq_st_light"}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                What are the minimum and maximum trade sizes?
              </Typography>
              <ArrowForwardIosIcon
                style={{
                  color: darkMode ? "white" : "#c2c2c2",
                }}
              />
            </div>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: 700,
              //   paddingBottom: 35,
              marginBottom: "20px",
            }}
            large
            className={darkMode ? "faq_st" : "faq_st_light"}
          >
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>How does it work?</Typography>
              <ArrowForwardIosIcon
                style={{
                  color: darkMode ? "white" : "#c2c2c2",
                }}
              />
            </div>
            <Card
              innerCard
              className={darkMode ? "" : "bg_light_i"}
              style={{ marginTop: 10, padding: "30px 35px" }}
            >
              <Typography style={{ fontSize: "8pt" }}>
                The Vision Relay is a great solution for the problems projects
                face regarding low user turnover. It keeps users on your
                website, transforming trades into a simple action: the Relay
                offers users and project owners the function of buying and
                selling tokens on their own project’s webpage, leading users to
                stay on your website for longer out of sheer utility. <br />
                <br />
                The Relay is also scalable across different devices, and it’s
                possible to change the colours and size of the Relay widget
                itself as well.
              </Typography>
            </Card>
          </Card>
          <Card
            style={{
              width: "100%",
              maxWidth: 700,
              //   paddingBottom: 35,
              marginBottom: "20px",
            }}
            large
            className={darkMode ? "faq_st" : "faq_st_light"}
          >
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                What are the minimum and maximum trade sizes?
              </Typography>
              <ArrowForwardIosIcon
                style={{
                  color: darkMode ? "white" : "#c2c2c2",
                }}
              />
            </div>
          </Card>
        </Section>
      </FlexCenter>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Faq;
