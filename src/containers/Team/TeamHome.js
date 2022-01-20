import React, { useContext } from "react";
import NavBar from "../NavBar";
import Container from "../../general/Container";
import Card from "../../general/Card";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import { darkTheme } from "../../theme/colors";
import { ThemeContext } from "../../theme/ThemeContext";
import Section from "../../elements/Section";
import Footer from "../../components/PageFooter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../../assets/styles/teamStyles.css";
import bsc from "../../assets/images/bsc.png";
import LinkedIn from "../../assets/images/team/LinkedIn.png";
import LinkedInLight from "../../assets/images/team/LinkedIn_light.png";
import { Grid } from "@mui/material";
const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const teamDetails = [
  {
    id: 1,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 2,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 3,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 4,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 5,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 6,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 7,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 8,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 9,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 10,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 11,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
  {
    id: 12,
    firstName: "Name",
    lastName: "Surname",
    desgination: "Desgination",
  },
];

const TeamHome = () => {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  return (
    <>
      <NavBar />
      <div
        className={
          darkMode ? "containerBackgroundImage23" : "containerBackgroundImage1"
        }
      >
        <Container style={{ marginTop: 150 }}>
          <Typography className="titleTeam">Meet The Team</Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            {teamDetails.map((option) => (
              <Grid item md={3}>
                <Card
                  key={option.id}
                  style={{
                    width: "100%",
                    maxWidth: 700,
                    marginBottom: "20px",
                  }}
                  large
                  className={darkMode ? "faq_st" : "faq_st_light"}
                >
                  {" "}
                  <Card
                    innerCard
                    style={{
                      padding: "100px 110px",
                      backgroundColor: darkMode ? "" : "#c2c2c2",
                    }}
                  >
                    {/* <img src={bsc} alt="profile_pic" width={140} height={150} /> */}
                  </Card>
                  <br />
                  <Typography>
                    {option.firstName}
                    &nbsp;
                    {option.lastName}
                  </Typography>
                  <Typography className="des_fo">
                    {option.desgination}
                  </Typography>
                  <br />
                  <div style={{ display: "flex" }}>
                    <Typography>
                      <img
                        src={darkMode ? LinkedIn : LinkedInLight}
                        width={20}
                      />
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography>
                      {" "}
                      <ArrowRightAltIcon />
                    </Typography>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TeamHome;
