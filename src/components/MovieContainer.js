import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieContainer(props) {
  return (
    <Link to="/sessoes">
      <MovieContainers
        onClick={() => {
          props.onclick("Yves");
        }}
      >
        <img src={props.objects.posterURL} alt="poster" />
      </MovieContainers>
    </Link>
  );
}

const MovieContainers = styled.div`
  cursor: pointer;
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
  &:hover {
    box-shadow: 0px 4px 8px 4px #0000002a;
  }
`;
