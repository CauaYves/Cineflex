import styled from "styled-components"

export default function Chairs({ chairs, selectedChairs, setSelectedChairs }) {

    function chooseChair(index) {
        const chair = chairs[index];
        if (!chair.isAvailable) {
            alert("Esse assento não está disponível.");
            return;
        }
        if (selectedChairs.includes(index)) {
            setSelectedChairs(selectedChairs.filter(chairIndex => chairIndex !== index));
        } else {
            setSelectedChairs([...selectedChairs, index]);
        }
    }

    return (
        chairs.map((chair, index) => {
            const isAvailable = chair.isAvailable;
            const isSelected = selectedChairs.includes(index);
            const backgroundColor = isSelected ? "#1AAE9E" : (isAvailable ? "#C3CFD9" : "#FBE192");
            const borderColor = isSelected ? "#0E7D71" : (isAvailable ? "#808F9D" : "#F7C52B");
            return (
                <SeatItem
                    data-test="seat"            // DATA TEST                     
                    key={index}
                    onClick={() => chooseChair(index)}
                    backgroundColor={backgroundColor}
                    borderColor={borderColor}>
                    {[index]}
                </SeatItem>
            )
        })
    )

}

const SeatItem = styled.div`
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid ${(props) => props.borderColor};
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
