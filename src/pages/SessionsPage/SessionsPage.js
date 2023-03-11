import styled from "styled-components";
import axios from "axios";
import SessionContainer from "../../components/SessionContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SessionsPage({ imagens }) {
  const { movieId } = useParams();
  const sessionsURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;

  const [moviePoster, setMoviePoster] = useState("https://imgs.search.brave.com/kK-qPkBwDxw2Eo0GXNTFDUD5XdXsemJ7umiqGVK1yks/rs:fit:820:981:1/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/OC85LzE4L3Bob3Rv/Z3JhcGhpYy1maWxt/LW1vdmllLWljb25z/LWNpbmVtYS1jbGFw/cGVyYm9hcmQtcG5n/LWZhdnBuZy1hUjBC/YWhFekVqQ0tlZ0JB/NUxuMllXMUZlLmpw/Zw");
  const [title, setTitle] = useState('CARREGANDO')
  const [days, setDays] = useState([])

  useEffect(() => {
    const promise = axios.get(sessionsURL);
    promise.then(({data}) => {

    const {movieTitle, posterURL, days} = data

    setDays(days)
    setMoviePoster(posterURL)
    setTitle(movieTitle)
    });
  }, []);

  return (
    <PageContainer>
      Selecione o horário
      <div>

        {days.map((day) => {
          return <SessionContainer key={day.id} properties={day}/>
        })}
        
      </div>
      <FooterContainer>
        <div>
          <img src={moviePoster} alt="movie" />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
