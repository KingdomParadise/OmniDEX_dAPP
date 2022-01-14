import React, { useContext } from "react";
import NavBar from "../NavBar";
import Container from "../../general/Container";
import Card from "../../general/Card";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import InputField from "../../elements/InputField";
import Button from "../../elements/Button";
import Form from "../../elements/Form";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Section from "../../elements/Section";
import FormGroup from "../../general/FormGroup";
import { darkTheme } from "../../theme/colors";
import Footer from "../../components/PageFooter";
import Countdown from "react-countdown";
import { Divider } from "@mui/material";
import "../../assets/styles/preSale.css";
import Slider from "@mui/material/Slider";
import cube from "../../assets/images/omni-documnet-box.png";
import icon from "../../assets/images/page1/lo_icon.png";
import { ThemeContext } from "../../theme/ThemeContext";

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

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

function valuetext(value) {
  return `${value}`;
}
function PreSale() {
  const [value, setValue] = React.useState([0, 100]);
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  const date = new Date("01/14/2022 08:44:00");
  const futureDate = new Date("04/14/2022 16:00:00");
  const milliseconds = date.getTime();
  const futuremilliseconds = futureDate.getTime();
  const futureDays = futuremilliseconds - milliseconds;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log(Date.now());
  // console.log(milliseconds);

  const Finished = () => <span style={{ color: "blue" }}>Time Out!</span>;

  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      return (
        <>
          <div style={{ display: "flex" }}>
            <span className={darkMode ? "box_c" : "box_c_l"}>{days}</span>
            <span className={darkMode ? "box_c" : "box_c_l"}>{hours}</span>
            <span className={darkMode ? "box_c" : "box_c_l"}>{minutes}</span>
            <span className={darkMode ? "box_c" : "box_c_l"}>{seconds}</span>
          </div>
          <div style={{ display: "flex" }}>
            <span className={darkMode ? "box_c1" : "box_c1"}>DAY</span>
            <span className={darkMode ? "box_c1" : "box_c1"}>HOUR</span>
            <span className={darkMode ? "box_c1" : "box_c1"}>MIN</span>
            <span className={darkMode ? "box_c1" : "box_c1"}>SEC</span>
          </div>
        </>
      );
    } else {
      // Render a finished state
      return <Finished />;
    }
  };
  function numFormatter(value) {
    if (value >= 0 && value <= 50) {
      return "Soft Cap :" + value.toFixed(0);
    } else {
      return "Hard Cap :" + value.toFixed(0);
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        {/* className={darkMode ? "check" : "check1"} */}
        <FlexCenter>
          <Section
            className={darkMode ? "bg_card" : "bg_card2"}
            style={{ marginTop: 190 }}
          >
            <div
              className="my-auto"
              style={{ marginLeft: darkMode ? "75%" : "50%" }}
            >
              <img src={cube} alt="" className="logo_button" />
            </div>
            <Card
              large
              style={{
                width: "100%",
                maxWidth: 700,
                paddingBottom: 35,
              }}
              className={darkMode ? "" : "bg_light"}
            >
              <Typography cardTitle>Pre-Sale</Typography>

              <Card
                className={darkMode ? "" : "bg_light_i"}
                innerCard
                style={{ marginTop: 10, padding: "30px 35px" }}
              >
                {/* {console.log(`seconds elapsed = ${Math.floor(Date.now() / 1000)}
                `)} */}
                <Countdown
                  date={milliseconds + futureDays}
                  renderer={renderer}
                />
                <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                  <div>
                    <Typography blockLabel>Token Price</Typography>
                  </div>

                  <div>
                    <Typography cardTitle>1 VZN = 0.8 BUSD</Typography>
                  </div>
                </CardBlock>
                <Grid style={{ marginTop: "1rem" }}>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Min Purchase</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 1 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Max Purchase</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 25,000 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Soft Cap</Typography>
                    </div>
                    <div>
                      <Typography cardTitle>1 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Hard Cap</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 750,000</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Launch Price</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.95 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Launch Date</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> Jan 2022</Typography>
                    </div>
                  </CardBlock>

                  <Typography style={{ marginLeft: "20px" }}>
                    Raised: 749,999 BUSD
                  </Typography>
                  <Typography style={{ marginLeft: "20px" }}>
                    Target: 750,000 BUSD
                  </Typography>
                </Grid>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelFormat={numFormatter}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </Card>
            </Card>
          </Section>
          <div className="my-auto" style={{ marginLeft: "-60%" }}>
            <img src={cube} alt="" className="logo_button1" />
          </div>

          <Section style={{ marginTop: 100 }}>
            <Card
              className={darkMode ? "" : "bg_light"}
              style={{
                width: "100%",
                maxWidth: 700,

                paddingBottom: 35,
              }}
              large
            >
              <Typography cardTitle>Tokens</Typography>
              <Form>
                <Card
                  innerCard
                  className={darkMode ? "" : "bg_light_i"}
                  style={{ marginTop: 10, paddingBottom: 35 }}
                >
                  <FormGroup>
                    <Typography fieldLabel>Wallet address</Typography>
                    <InputField className={darkMode ? "" : "bg_light_i_b"} />
                  </FormGroup>
                  <FormGroup>
                    <Typography fieldLabel>Amount</Typography>

                    <InputField className={darkMode ? "" : "bg_light_i_b"} />
                  </FormGroup>
                </Card>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button type="button" style={{ marginTop: 20 }} primary>
                    Approve Contract
                  </Button>
                </div>
              </Form>
            </Card>
          </Section>
          <div className="icon_new" style={{ display: "flex" }}>
            <p style={{ fontSize: "20px" }}>BUSD</p>
            <img src={icon} alt="logo" width={30} height={30} />
          </div>

          <Section
            style={{
              marginTop: 200,
            }}
            className={darkMode ? "check" : "check1"}
          >
            <Card
              className={darkMode ? "" : "bg_light"}
              style={{
                width: "100%",
                maxWidth: 700,
                paddingBottom: 35,
              }}
              large
            >
              <Typography cardTitle>My Tokens</Typography>
              <Card
                innerCard
                className={darkMode ? "" : "bg_light_i"}
                style={{ marginTop: 10, padding: "30px 35px" }}
              >
                <Grid>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Total Deposited</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.95 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Total Received</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 299.99 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Unlocked Tokens</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.00 VZN</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock className={darkMode ? "" : "bg_light_i_b"}>
                    <div>
                      <Typography blockLabel>Total Witndrawl</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 59.00 VZN</Typography>
                    </div>
                  </CardBlock>
                </Grid>
              </Card>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="button" style={{ marginTop: 20 }} primary>
                  Withdraw Tokens
                </Button>
              </div>
            </Card>
          </Section>
        </FlexCenter>
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default PreSale;
