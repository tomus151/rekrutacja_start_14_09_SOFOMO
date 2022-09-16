import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import History from "../components/History";
import SearchBar from "../components/SearchBar/SearchBar";
import MapComponent from "../components/MapComponent";
import UserInfo from "../components/UserInfo";
import { useGetIpQuery } from "../api/ipInfo";
import SearchInfo from "../components/SearchInfo";
import { selectGetHistory } from "../store/slices/historySlice";
import { defaultMapPositionConstant } from "../constants/mapConstants";
import { useGetIpStackMutation } from "../api/ipStackApi";

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 310px 1fr;
    padding: 10px;
`;

const StyledRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MainSearchContainer = styled.div`
    display: flex;
    height: 300px;
    margin-bottom: 10px;

    & > div {
        width: calc(100% - 5px);
    }
`;

const App = () => {
    const [userLocation, setUserLocation] = useState({
        lat: 0,
        lng: 0
    });
    const [userInfo, setUserInfo] = useState({ ip: "" });

    const { data: userIp } = useGetIpQuery();
    const [startFetching, { data, isSuccess }] = useGetIpStackMutation();

    const { searchValues } = useSelector(selectGetHistory);

    const { ZOOM, LAT, LNG } = defaultMapPositionConstant;

    useEffect(() => {
        if (userIp?.ip) {
            setUserInfo(userIp.ip);
            startFetching(userIp.ip);
        }
    }, [userIp?.ip]);

    useEffect(() => {
        if (isSuccess && !data.error) {
            setUserLocation({
                lat: data.latitude,
                lng: data.longitude
            });
        }
        if (data?.error) alert("ilość zapytań w darmowym planie wykorzystana zmień klucz api");
    }, [isSuccess]);

    return (
        <StyledContainer>
            <History />
            <StyledRightContainer>
                <MainSearchContainer>
                    <MapComponent key={String(userLocation.lat + userLocation.lng)} center={userLocation} zoom={ZOOM} />
                    <UserInfo userIp={userInfo} userLat={userLocation.lat} userLng={userLocation.lng} />
                </MainSearchContainer>
                <SearchBar />
                <MainSearchContainer>
                    <MapComponent
                        key={String(searchValues[0]?.lat) + String(searchValues[0]?.lng)}
                        center={{
                            lat: searchValues[0]?.lat || LAT,
                            lng: searchValues[0]?.lng || LNG
                        }}
                        zoom={ZOOM}
                    />
                    <SearchInfo />
                </MainSearchContainer>
            </StyledRightContainer>
        </StyledContainer>
    );
};

export default App;
