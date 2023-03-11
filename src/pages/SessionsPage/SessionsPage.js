import styled from "styled-components"
import axios from "axios"
import SessionContainer from "../../components/SessionContainer"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function SessionsPage(props) {

  const { days, setMoviePoster, setTitle, setDays, moviePoster, title } = props
  const { movieId } = useParams()
  const sessionsURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`

  useEffect(() => {
    const promise = axios.get(sessionsURL)
    promise.then(({ data }) => {

      const { title, posterURL, days } = data
      setDays(days)
      setMoviePoster(posterURL)
      setTitle(title)
    })
  }, [])

  return (
    <PageContainer>
      Selecione o horário
      <div>
        {
          days.map((day) => {
            return <SessionContainer key={day.id} properties={day} />
          })
        }
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
