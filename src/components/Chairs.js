import styled from "styled-components"

export default function Chairs({chairs}){

    console.log(chairs)

    return(
        chairs.map((chair, index) => {
            return(
                <SeatItem 
                    key={index}
                    isAvailable={chair.isAvailable}
                >
                    {[index]}
                </ SeatItem>
            )
        })
    )
    
}

const SeatItem = styled.div`

    /* 
    
    green: #0E7D71 - #1AAE9E
    yellow: #F7C52B - #FBE192
    gray: #7B8B99 - #C3CFD9
    */
    background-color: ${(props) => props.isAvailable ? "#1AAE9E" : "#FBE192"};    
    border-color: ${(props) => props.isAvailable ? "#1AAE9E" : "#FBE192"};             // Essa cor deve mudar

    border: 1px solid;          
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
