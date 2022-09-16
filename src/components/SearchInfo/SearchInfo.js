import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import Loader from "../Loader";
import { selectGetHistory } from "../../store/slices/historySlice";
import { useGetIpStackMutation } from "../../api/ipStackApi";
import { lang } from "../../lang/pl";

const StyledDiv = styled.div`
    background: white;
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
    searchInfo: { SEARCH_SOMETHING, TITLE, WRONG_VALUE },
    history: { LAT, LNG, NAME }
} = lang;

const SearchInfo = () => {
    const { searchValues } = useSelector(selectGetHistory);
    const [, { data, isLoading, isUninitialized }] = useGetIpStackMutation({
        fixedCacheKey: process.env.REACT_APP_FIXED_CASH_KEY
    });

    const generateContent = () => {
        if (isLoading)
            return (
                <StyledP>
                    <Loader additionalStyle={additionalLoaderStyle} />
                </StyledP>
            );
        if (isUninitialized) return <p>{SEARCH_SOMETHING}</p>;
        if (data?.error) return <p>{WRONG_VALUE}</p>;

        return (
            <>
                <p>
                    {NAME}
                    {searchValues.length && searchValues[0]?.name}
                </p>
                <p>
                    {LAT}
                    {data?.latitude}
                </p>
                <p>
                    {LNG}
                    {data?.longitude}
                </p>
            </>
        );
    };

    return (
        <StyledDiv>
            <h2>{TITLE}</h2>
            {generateContent()}
        </StyledDiv>
    );
};

export default SearchInfo;
