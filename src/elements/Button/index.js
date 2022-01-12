import styled from "@emotion/styled";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: fit-content;
  padding: 0 20px; 
  font-size: 1rem;
  border-radius: 5px;
  background-image: ${({ primary }) =>
    primary
      ? "linear-gradient( 81deg, rgba(120, 120, 120, 1) 0%, rgba(86, 86, 86, 1) 52% )"
      : "#000"};
  color: ${({ primary }) =>
    primary
      ? "#fff"
      : "#000"};
`;

export default Button;
