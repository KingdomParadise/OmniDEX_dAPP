import React, { useState, useContext, makeStyles } from "react";
import Footer from "../../components/Footer";
import "../../assets/styles/buycrypto.css";
import InputField from "../../elements/InputField";
import Card from "../../general/Card";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../../elements/Button";
import FormGroup from "../../general/FormGroup";
import Section from "../../elements/Section";
import bsc_icon from "../../assets/images/buycrypto/bsc.png";
import { darkTheme } from "../../theme/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ThemeContext } from "../../theme/ThemeContext";
import { Grid } from "@material-ui/core";
import { Input, TextField } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl, { useFormControl } from "@mui/material/FormControl";

import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import bsc from "../../assets/images/bsc.png";
import solana from "../../assets/images/network/solana.png";
import uniswap from "../../assets/images/uniswap.svg";
import MediaQuery from "react-responsive";
import avalanche from "../../assets/images/network/avalanche.svg";
import polygon from "../../assets/images/network/polygon.svg";
import ethereum from "../../assets/images/ethereum.svg";

const WhiteBorderTextField = styled(TextField)`
  & label {
    color: white;
  }
  #outlined-select-amount {
    color: white;
  }
  #outlined-select-amount1 {
    color: black;
  }

  & .MuiOutlinedInput-root {
    border: 1px solid white;
  }

  & .MuiSelect-icon {
    display: none;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid white;
    }
  }
`;

const WhiteBorderTextField1 = styled(TextField)`
  & label {
    color: white;
  }
  & .MuiOutlinedInput-root {
    border: 1px solid white;
  }

  & .MuiSelect-icon {
    display: none;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid white;
    }
  }
`;

const network = [
  {
    id: 0,
    title: "Ethereum",
    icon: ethereum,
    isActive: false,
  },
  {
    id: 1,
    title: "Polygon",
    icon: polygon,
    isActive: false,
  },
  {
    id: 2,
    title: "Binance",
    icon: bsc,
    isActive: false,
  },
  {
    id: 3,
    title: "Avalanche",
    icon: avalanche,
    isActive: false,
  },
  {
    id: 4,
    title: "Solana",
    icon: solana,
    isActive: false,
  },
];
const payment = [
  { id: 1, value: "CC", label: "Credit Card" },
  { id: 2, value: "DC", label: "Debit Card" },
  {
    id: 3,
    value: "UPI",
    label: "UPI",
  },
];
const currencies = [
  {
    value: "USD",
    label: "$    USD",
    symbol: "$",
  },
  {
    value: "EUR",
    label: "€    EUR",
    symbol: "€",
  },
  {
    value: "BTC",
    label: "฿    BTC",
    symbol: "฿ ",
  },
  {
    value: "JPY",
    label: "¥     JPY",
    symbol: "¥ ",
  },
];

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

const BuyCrepto = () => {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;

  const [values, setValues] = React.useState("Binance");
  const [currency, setCurrency] = React.useState("USD");
  const [pay, setPay] = React.useState("CC");
  const [amount, setAmount] = React.useState({
    amount: "50000",
  });

  const handleChange2 = (prop) => (event) => {
    setAmount({ ...values, [prop]: event.target.value });
    console.log(event.target.value);
  };
  const handleChange = (event) => {
    setValues(event.target.value);
    console.log(event.target.value);
  };

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const handleChange4 = (event) => {
    setPay(event.target.value);
  };

  return (
    <>
      <FlexCenter className="containerBackgroundImage">
        <Section
          style={{
            marginTop: 150,
            marginBottom: 200,
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
            <span>
              <Typography cardTitle>Buy Crypto</Typography>

              <MenuIcon
                style={{ color: darkMode ? "" : "black", float: "right" }}
              />
            </span>

            <Card
              innerCard
              className={darkMode ? "" : "bg_light_i"}
              style={{ marginTop: 10, padding: "30px 35px" }}
            >
              <Typography>I want to buy</Typography>

              <CardBlock
                style={{ marginBottom: "10px", padding: 0 }}
                className={darkMode ? "" : "bg_light_i_b"}
              >
                <MediaQuery maxWidth={480}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "23ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <WhiteBorderTextField
                        id="outlined-select-currency"
                        select
                        label=" "
                        size="small"
                        value={values}
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <ArrowForwardIosIcon
                                style={{
                                  color: darkMode ? "white" : "#c2c2c2",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        //   helperText="Please select your currency"
                      >
                        {network.map((option) => (
                          <MenuItem key={option.id} value={option.title}>
                            <div>
                              <img src={option.icon} width={20} height={20} />
                              &nbsp;&nbsp;
                              <span
                                style={{ color: darkMode ? "white" : "black" }}
                              >
                                {option.title}
                              </span>
                            </div>
                          </MenuItem>
                        ))}
                      </WhiteBorderTextField>
                    </div>
                  </Box>
                </MediaQuery>
                <MediaQuery minWidth={481}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "54ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <WhiteBorderTextField
                        id="outlined-select-currency"
                        select
                        label=" "
                        size="small"
                        value={values}
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <ArrowForwardIosIcon
                                style={{
                                  color: darkMode ? "white" : "#c2c2c2",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        //   helperText="Please select your currency"
                      >
                        {network.map((option) => (
                          <MenuItem key={option.id} value={option.title}>
                            <div>
                              <img src={option.icon} width={20} height={20} />
                              &nbsp;&nbsp;
                              <span
                                style={{ color: darkMode ? "white" : "black" }}
                              >
                                {option.title}
                              </span>
                            </div>
                          </MenuItem>
                        ))}
                      </WhiteBorderTextField>
                    </div>
                  </Box>
                </MediaQuery>
              </CardBlock>
              <div>
                <Typography fieldLabel>Amount</Typography>
                <Typography fieldLabel style={{ marginLeft: "275px" }}>
                  USD/ETH
                </Typography>
                <Typography fieldLabel style={{ marginLeft: "25px" }}>
                  Currancy
                </Typography>
              </div>
              <Grid>
                <MediaQuery maxWidth={480}>
                  <CardBlock
                    style={{ marginBottom: "10px", padding: "inherit" }}
                    className={darkMode ? "" : "bg_light_i_b"}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "13ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id={
                            darkMode
                              ? "outlined-select-amount"
                              : "outlined-select-amount1"
                          }
                          label=" "
                          size="small"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {" "}
                                {currencies.map((option) => (
                                  <span
                                    key={option.value}
                                    style={{
                                      color: darkMode ? "white" : "black",
                                    }}
                                  >
                                    {currency == option.value
                                      ? option.symbol
                                      : ""}
                                  </span>
                                ))}
                              </InputAdornment>
                            ),
                          }}
                          style={{ fontColor: "white" }}
                          value={amount.amount}
                          defaultValue={amount.amount}
                          InputLabelProps={{ shrink: true }}
                          onChange={handleChange2("amount")}
                          // helperText="Please Enter Amount"
                        />
                      </div>
                    </Box>
                  </CardBlock>

                  <CardBlock
                    style={{
                      marginBottom: "10px",
                      marginLeft: "18px",
                      padding: "inherit",
                    }}
                    className={darkMode ? "" : "bg_light_i_b"}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "6ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id="outlined-select-currency"
                          select
                          label=" "
                          size="small"
                          value={currency}
                          onChange={handleChange1}
                          // helperText="Please select your currency"
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <span
                                style={{
                                  color: darkMode ? "white" : "black",
                                }}
                              >
                                {option.label}
                              </span>
                            </MenuItem>
                          ))}
                        </WhiteBorderTextField>
                      </div>
                    </Box>
                  </CardBlock>
                </MediaQuery>
                <MediaQuery minWidth={481}>
                  <CardBlock
                    style={{ marginBottom: "10px", padding: "inherit" }}
                    className={darkMode ? "" : "bg_light_i_b"}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "40ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id={
                            darkMode
                              ? "outlined-select-amount"
                              : "outlined-select-amount1"
                          }
                          label=" "
                          size="small"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {" "}
                                {currencies.map((option) => (
                                  <span
                                    key={option.value}
                                    style={{
                                      color: darkMode ? "white" : "black",
                                    }}
                                  >
                                    {currency == option.value
                                      ? option.symbol
                                      : ""}
                                  </span>
                                ))}
                              </InputAdornment>
                            ),
                          }}
                          style={{ fontColor: "white" }}
                          value={amount.amount}
                          defaultValue={amount.amount}
                          InputLabelProps={{ shrink: true }}
                          onChange={handleChange2("amount")}
                          // helperText="Please Enter Amount"
                        />
                      </div>
                    </Box>
                  </CardBlock>

                  <CardBlock
                    style={{
                      marginBottom: "10px",
                      marginLeft: "18px",
                      padding: "inherit",
                    }}
                    className={darkMode ? "" : "bg_light_i_b"}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "10ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id="outlined-select-currency"
                          select
                          label=" "
                          size="small"
                          value={currency}
                          onChange={handleChange1}
                          // helperText="Please select your currency"
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <span
                                style={{ color: darkMode ? "white" : "black" }}
                              >
                                {option.label}
                              </span>
                            </MenuItem>
                          ))}
                        </WhiteBorderTextField>
                      </div>
                    </Box>
                  </CardBlock>
                </MediaQuery>
                <Grid />

                <Typography fieldLabel>Payment Method</Typography>

                <CardBlock
                  style={{ marginBottom: "10px", padding: 0 }}
                  className={darkMode ? "" : "bg_light_i_b"}
                >
                  <MediaQuery minWidth={481}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "54ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id="outlined-select-payment"
                          select
                          label=" "
                          hiddenLabel
                          size="small"
                          value={pay}
                          onChange={handleChange4}
                          //   helperText="Please select your currency"
                        >
                          {payment.map((option) => (
                            <MenuItem key={option.id} value={option.value}>
                              <span
                                style={{ color: darkMode ? "white" : "black" }}
                              >
                                {" "}
                                {option.label}
                              </span>
                            </MenuItem>
                          ))}
                        </WhiteBorderTextField>
                      </div>
                    </Box>
                  </MediaQuery>
                  <MediaQuery maxWidth={480}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "23ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <WhiteBorderTextField
                          id="outlined-select-payment"
                          select
                          label=" "
                          hiddenLabel
                          size="small"
                          value={pay}
                          onChange={handleChange4}
                          //   helperText="Please select your currency"
                        >
                          {payment.map((option) => (
                            <MenuItem key={option.id} value={option.value}>
                              <span
                                style={{ color: darkMode ? "white" : "black" }}
                              >
                                {" "}
                                {option.label}
                              </span>
                            </MenuItem>
                          ))}
                        </WhiteBorderTextField>
                      </div>
                    </Box>
                  </MediaQuery>
                </CardBlock>
              </Grid>
            </Card>
            <br />
            <center>
              <h3>0.05500280 ETH </h3>
              <p style={{ fontSize: "7pt" }}>Best offer found (approximate)</p>
            </center>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="button" style={{ marginTop: 20 }} primary>
                Connect Wallet
              </Button>
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

export default BuyCrepto;
