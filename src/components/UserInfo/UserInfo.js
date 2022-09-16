import styled, { css } from "styled-components";

import { lang } from "../../lang/pl";
import Loader from "../Loader";

const StyledDiv = styled.div`
    width: 200px;
    padding-left: 20px;
    border: 1px solid black;

    h2 {
        text-align: center;
    }
`;

const additionalLoaderStyle = css`
    width: 20px;
    height: 20px;
`;

const StyledP = styled.p`
    display: flex;
`;

const {
    userInfo: { TITLE },
    history: { LAT, LNG, IP }
} = lang;

const UserInfo = ({ userIp, userLat, userLng }) => {
    return (
        <StyledDiv>
            <h2>{TITLE}</h2>
            {typeof userIp === "string" ? (
                <p>
                    {IP}
                    {userIp}
                </p>
            ) : (
                <StyledP>
                    {IP}
                    <Loader additionalStyle={additionalLoaderStyle} />
                </StyledP>
            )}
            <p>
                {LAT}
                {userLat || ""}
            </p>
            <p>
                {LNG}
                {userLng || ""}
            </p>
        </StyledDiv>
    );
};

export default UserInfo;
