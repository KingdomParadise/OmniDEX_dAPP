import styled from "@emotion/styled";

const FormGroup = styled.div`
    display : flex;
    flex-direction : column;

    &:not(:first-of-type){
        margin-top: 15px;
    }
`;

export default FormGroup;
