import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"


export default function App() {

    const [imagens, setImagens] = useState([])
    
    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

        const promise = axios.get(url)
        promise.then((answer) => {
            setImagens(answer.data)
        })
        promise.catch((answer) =>{
            alert('ERROR',answer.response.data)
        })
    }, [])

    return (
        <BrowserRouter>

            <NavContainer>CINEFLEX</NavContainer>
                <Routes>

                    <Route path="/" element={<HomePage imagens={imagens}/>} />
                    <Route path="/sessoes/:movieId" element={<SessionsPage imagens={imagens}/>} />
                    <Route path="/assentos/:idSessao" element={<SeatsPage imagens={imagens}/>} />
                    <Route path="/" element={<SuccessPage />} />

                </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
