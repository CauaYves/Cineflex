import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

export default function FormContainer({ selectedChairs }) {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    function sendName(input) {
        setName(input)
    }
    function sendCpf(input) {
        setCpf(input)
    }
    function ReserveChairs(event, name, cpf, chairsId) {

        event.preventDefault();

        const obj = {
            ids: chairsId,
            name: name,
            cpf: cpf,
        }
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
        const promise = axios.post(url, obj);
        promise.then(() => {
        });
        promise.catch((answer) => {
            alert(answer.response.data);
        });
    }
    return (
        <FormContainers>
            <form action={`/sucesso`} onSubmit={ReserveChairs}>
                Nome do Comprador:
                <input
                    type="text"
                    required
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={(e) => sendName(e.target.value)}
                />
                CPF do Comprador:
                <input
                    type="text"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    required
                    placeholder="Digite seu CPF..."
                    onChange={(e) => sendCpf(e.target.value)}
                    value={cpf}
                />
                <button type="submit" onClick={(e) => ReserveChairs(e, name, cpf, selectedChairs)}>Reservar Assento(s)</button>
            </form>
        </FormContainers>
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