import styled from "@emotion/styled";

const Field = styled.input`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #383838;
  padding: 0 10px;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ error }) => (error ? "0px 0px 0px 2px #f44336" : "none")};

  &:focus {
    box-shadow: 0px 0px 0px 2px #FFFFFF;
  }
`;

export default Field;
