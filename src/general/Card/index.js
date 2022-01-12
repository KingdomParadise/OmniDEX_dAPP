import styled from "@emotion/styled";

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: ${({ large, innerCard }) => {
    if (large) {
      return "rgba(0, 0, 0, 0.25)";
    }
    if (innerCard) {
      return "rgba(36, 36, 36, 0.80)";
    }
  }};
  border-radius: ${({ large, innerCard }) => {
    if (large) {
      return "10px";
    }
    if (innerCard) {
      return "3px";
    }
  }};
  padding: ${({ large, innerCard }) => {
    if (large) {
      return "20px 45px";
    }
    if (innerCard) {
      return "20px 35px";
    }
  }};

  @media (max-width: 450px) {
    padding: ${({ large, innerCard }) => {
      if (large) {
        return "10px 20px";
      }
      if (innerCard) {
        return "10px 15px";
      }
    }};
  }
`;

export default Card;
