import Chairs from "../../components/Chairs"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams} from "react-router-dom"
import styled from "styled-components"

export default function SeatsPage(props) {

    const [selectedChairs, setSelectedChairs] = useState([]);
    const [chairs, setChairs] = useState([])
    const id = useParams()
    const { moviePoster, title } = props
    const navigate = useNavigate();
    useEffect(() => {
        const chairUrl = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id.idSessao}/seats`
        const promise = axios.get(chairUrl)

        promise.then((answer) => {
            setChairs(answer.data.seats)
        })
    }, [])

    function sendName(input) {
        props.setName(input)
    }
    function sendCpf(input) {
        props.setCpf(input)
    }
    function ReserveChairs(event, name, cpf, chairsId) {

        event.preventDefault();

        const obj = {
            ids: chairsId,
            name: name,
            cpf: cpf,
        }
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
        const promise = axios.post(url, obj)

        promise.then((answer) => {
            console.log(answer.data)
            navigate(`/sucesso`)
        })
        promise.catch((answer) => {
            alert(answer.response.data)
        })
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                <Chairs
                    chairs={chairs}
                    selectedChairs={selectedChairs}
                    setSelectedChairs={setSelectedChairs}
                />
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircleClicked />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircleAvailable />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircleReserved />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainers>
                <form>
                    Nome do Comprador:
                    <input
                        data-test="client-name"                        // DATA TEST                        
                        type="text"
                        required
                        placeholder="Digite seu nome..."
                        value={props.name}
                        onChange={(e) => sendName(e.target.value)}
                    />
                    CPF do Comprador:
                    <input
                        data-test="client-cpf"                        // DATA TEST                        
                        type="text"
                        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                        required
                        placeholder="Digite seu CPF..."
                        onChange={(e) => sendCpf(e.target.value)}
                        value={props.cpf}
                    />
                    <button
                        data-test="book-seat-btn"                     // DATA TEST                        
                        type="submit"
                        onClick={(e) => ReserveChairs(e, props.name, props.cpf, selectedChairs)}>
                        Reservar Assento(s)
                    </button>
                </form>
            </FormContainers>

            <FooterContainer data-test="footer">                         {/*// DATA TEST */}
                <div>
                    <img src={moviePoster} alt="poster" />
                </div>
                <div>
                    <p>{title}</p>
                    <p> - </p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}
const FormContainers = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircleClicked = styled.div`
    border: 1px solid #0E7D71;
    background-color: #1AAE9E;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleReserved = styled.div`
    border: 1px solid #F7C52B;
    background-color: #FBE192;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleAvailable = styled.div`
    border: 1px solid #7B8B99;
    background-color: #C3CFD9;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
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
`