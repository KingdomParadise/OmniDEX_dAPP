import React from "react";
import NavBar from "../NavBar";
import Container from "../../general/Container";
import Card from "../../general/Card";
import Typography from "../../general/Typography";
import styled from "@emotion/styled";
import InputField from "../../elements/InputField";
import Button from "../../elements/Button";
import Form from "../../elements/Form";
import Section from "../../elements/Section";
import FormGroup from "../../general/FormGroup";
import { darkTheme } from "../../theme/colors";
import Footer from "../../components/PageFooter";

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

function PreSale() {
  return (
    <>
      <NavBar />
      <Container>
        <FlexCenter>
          <Section style={{ marginTop: 150 }}>
            <Card
              large
              style={{
                width: "100%",
                maxWidth: 700,
                paddingBottom: 35,
              }}
            >
              <Typography cardTitle>Pre-Sale</Typography>
              <Card innerCard style={{ marginTop: 10, padding: "30px 35px" }}>
                <CardBlock>
                  <div>
                    <Typography blockLabel>Token Price</Typography>
                  </div>
                  <div>
                    <Typography cardTitle>1 VZN = 0.8 BUSD</Typography>
                  </div>
                </CardBlock>
                <Grid style={{ marginTop: "1rem" }}>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Min Purchase</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 1 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Max Purchase</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 25,000 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Soft Cap</Typography>
                    </div>
                    <div>
                      <Typography cardTitle>1 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Hard Cap</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 750,000</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Launch Price</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.95 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Launch Date</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> Jan 2022</Typography>
                    </div>
                  </CardBlock>
                </Grid>
              </Card>
            </Card>
          </Section>

          <Section style={{ marginTop: 100 }}>
            <Card
              style={{
                width: "100%",
                maxWidth: 700,
                paddingBottom: 35,
              }}
              large
            >
              <Typography cardTitle>Tokens</Typography>
              <Form>
                <Card innerCard style={{ marginTop: 10, paddingBottom: 35 }}>
                  <FormGroup>
                    <Typography fieldLabel>Wallet address</Typography>
                    <InputField />
                  </FormGroup>
                  <FormGroup>
                    <Typography fieldLabel>Amount</Typography>
                    <InputField />
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

          <Section style={{ marginTop: 100 }}>
            <Card
              style={{
                width: "100%",
                maxWidth: 700,
                paddingBottom: 35,
              }}
              large
            >
              <Typography cardTitle>My Tokens</Typography>
              <Card innerCard style={{ marginTop: 10, padding: "30px 35px" }}>
                <Grid>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Total Deposited</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.95 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Total Received</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 299.99 BUSD</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
                    <div>
                      <Typography blockLabel>Unlocked Tokens</Typography>
                    </div>
                    <div>
                      <Typography cardTitle> 0.00 VZN</Typography>
                    </div>
                  </CardBlock>
                  <CardBlock>
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
