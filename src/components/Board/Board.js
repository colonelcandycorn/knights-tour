import styled from "styled-components";
import BoardTiles from "./BoardTiles";


const StyledBoard = styled.div `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    cursor: pointer;
`

const Board = () => {
    const tileArray = []
    for (let i = 0; i < 64; ++i) {
        tileArray.push(<BoardTiles key={i} color={i} knight={''}/>);
    }

    const boardClickHandler = (event) => {
        console.log(event.target.closest('div'));
    }

    return (
        <StyledBoard onClick={boardClickHandler}>
            {tileArray}
        </StyledBoard>
    )
};

export default Board;
