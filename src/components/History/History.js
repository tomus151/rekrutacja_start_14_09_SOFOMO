import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { selectGetHistory } from "../../store/slices/historySlice";
import { lang } from "../../lang/pl";

const StyledDiv = styled.div`
    width: 300px;
    height: 639px;
    border: 1px solid black;
    margin-right: 10px;
    overflow: auto;

    h2 {
        text-align: center;
    }
`;

const StyledLi = styled.li`
    word-break: break-all;
`;

const { TITLE, NAME, LAT, LNG, IP } = lang.history;

export const History = () => {
    const { searchValues } = useSelector(selectGetHistory);

    const generateList = searchValues.length
        ? searchValues.map((item) => (
              <StyledLi key={uuidv4()}>
                  {NAME}
                  {item.name}
                  <br />
                  {LAT}
                  {item.lat}
                  <br />
                  {LNG}
                  {item.lng}
                  <br />
                  {IP}
                  {item.ip}
                  <p>----------------</p>
              </StyledLi>
          ))
        : "";

    return (
        <StyledDiv>
            <h2>{TITLE}</h2>
            <ul>{generateList}</ul>
        </StyledDiv>
    );
};

export default History;
