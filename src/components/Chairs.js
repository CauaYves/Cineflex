import styled from "styled-components";

export default function Chairs({ chairs, selectedChairs, setSelectedChairs }) {

    function chooseChair(indexChair, indexLoop) {
        const chair = chairs[indexLoop];
        if (!chair.isAvailable) {
            alert("Esse assento não está disponível.");
            return;
        }

        const isSelected = selectedChairs.includes(indexChair);

        if (isSelected) {
            // Se o assento já estiver selecionado, restaure sua cor original
            const originalColor = chair.isAvailable ? "#C3CFD9" : "#FBE192";
            chair.backgroundColor = originalColor;
            setSelectedChairs(selectedChairs.filter((chairIndex) => chairIndex !== indexChair));
        } else {
            // Se o assento não estiver selecionado, defina sua cor como selecionada
            chair.backgroundColor = "#1AAE9E";
            setSelectedChairs([...selectedChairs, indexChair]);
        }
    }


    return chairs.map((chair, index) => {
        const isAvailable = chair.isAvailable;
        const isSelected = selectedChairs.includes(index);
        const backgroundColor = isSelected ? "#1AAE9E" : isAvailable ? "#C3CFD9" : "#FBE192";
        const borderColor = isSelected ? "#0E7D71" : isAvailable ? "#808F9D" : "#F7C52B";

        return (
            <SeatItem
                data-test="seat"
                key={index}
                onClick={(e) => {
                    chooseChair(chairs[index].id, index);
                    // Altera a cor de fundo do SeatItem ao ser clicado
                    const newBackgroundColor = isSelected ? (isAvailable ? "#C3CFD9" : "#FBE192") : "#1AAE9E";
                    e.currentTarget.style.backgroundColor = newBackgroundColor;
                }}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
            >
                {[index]}
            </SeatItem>
        );
    });
}

const SeatItem = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
