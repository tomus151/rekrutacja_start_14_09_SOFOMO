import styled from "styled-components";

import loader from "../../assets/gif/loader.gif";

const StyledP = styled.span`
    ${({ additionalStyle }) => additionalStyle}

    img {
        width: 100%;
        height: 100%;
    }
`;

const Loader = ({ additionalStyle }) => {
    return (
        <StyledP additionalStyle={additionalStyle}>
            <img src={loader} alt="ikona ładowania" />
        </StyledP>
    );
};

export default Loader;
