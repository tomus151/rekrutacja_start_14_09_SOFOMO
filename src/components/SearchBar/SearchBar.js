import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useGetIpStackMutation } from "../../api/ipStackApi";
import { lang } from "../../lang/pl";
import { addHistory } from "../../store/slices/historySlice";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    input {
        width: 70%;
    }
    button {
        width: calc(30% - 10px);
    }
`;

const { ALERT_MESSAGE, BUTTON_TEXT, PLACEHOLDER } = lang.searchBar;

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const [startFetching, { data }] = useGetIpStackMutation({ fixedCacheKey: "qwertyuiop1234567890" });

    const hangleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        if (inputValue.length) return startFetching(inputValue);

        return alert(ALERT_MESSAGE);
    };

    useEffect(() => {
        if (data?.ip && data?.latitude && data?.longitude) {
            dispatch(
                addHistory({ history: { name: inputValue, lat: data.latitude, lng: data.longitude, ip: data.ip } })
            );
            setInputValue("");
        }
        // eslint-disable-next-line
    }, [data?.ip, data?.latitude, data?.longitude, dispatch]);

    return (
        <StyledDiv>
            <input type="text" onChange={hangleChangeInputValue} value={inputValue} placeholder={PLACEHOLDER} />
            <button onClick={handleClick}>{BUTTON_TEXT}</button>
        </StyledDiv>
    );
};

export default SearchBar;
