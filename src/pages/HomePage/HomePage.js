import axios from "axios"
import MovieContainer from "../../components/MovieContainer"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function HomePage() {
    const [imagens, setImagens] = useState([])


    function redirect(param){
        console.log(`Você foi redirecionado ${param}`)
    }


    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

        const promise = axios.get(url)
        promise.then((answer) => {
            setImagens(answer.data)
        })
    }, [])


    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {imagens.map((objects) => {
                    return <MovieContainer onclick={redirect} key={objects.id} objects={objects} />
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
