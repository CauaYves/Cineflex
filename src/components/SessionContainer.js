import styled from "styled-components";

export default function SessionContainer({properties}) {

    const { weekday, date, showtimes } = properties

    return (
        <SessionContainers>
            {weekday} - {date}
            <ButtonsContainer>
                <button>{showtimes[0].name}</button>
                <button>{showtimes[1].name}</button>
            </ButtonsContainer>
        </SessionContainers>
    )

}


const SessionContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
`;