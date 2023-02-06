import styled from "styled-components";
import BoardTiles from "./BoardTiles";
import {useState} from "react";
import Tour from "../Knight/Tour";

const StyledBoard = styled.div `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    cursor: pointer;
`

const Board = () => {
    let isKnightPlaced = false;
    let knightLocation = null;
    let isLocationPicked = false;


    // this needs to be declared first so it can be placed in tileArray
    // kind of confusing because we use setTiles which declared after function declaration
    const tileClickHandler = (index) => {
        console.log(index);
        console.log(isKnightPlaced)
        if (!isKnightPlaced) {
            setTiles(prevState => {
                const prevArray = [...prevState];
                prevArray[index] = <BoardTiles key={index} color={index} knight={'♞'} onTileClick={tileClickHandler}/>
                knightLocation = index;
                return prevArray;
            })

            isKnightPlaced = true;
        } else if (!isLocationPicked) {
            console.log(Tour(knightLocation, index))
        }

    }

    const tileArray = []

    for (let i = 0; i < 64; ++i) {
        tileArray.push(<BoardTiles key={i} color={i} knight={''} onTileClick={tileClickHandler} />);
    }

    const [tiles, setTiles] = useState(tileArray);

    return (
        <StyledBoard>
            {tiles}
        </StyledBoard>
    )
};

export default Board;
