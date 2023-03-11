import MovieContainer from "../../components/MovieContainer"
import styled from "styled-components"

export default function HomePage({movies}) {

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map((objects) => {
                    return <MovieContainer key={objects.id} objects={objects} />
                })}
            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
