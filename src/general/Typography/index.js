import styled from "@emotion/styled";

const Typography = styled.span`
  font-size: ${(props) => {
    if (props.fieldLabel) {
      return "1rem";
    }
    if (props.heading) {
      return "3.625rem";
    }
    if (props.subHeading) {
      return "1.875rem";
    }
    if (props.cardTitle) {
      return "1.4rem";
    }
    if (props.blockLabel) {
      return "0.900rem";
    }
  }};
`;

export default Typography;
