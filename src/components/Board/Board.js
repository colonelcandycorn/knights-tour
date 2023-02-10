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
    let isKnightPlaced = false; // the knight can be placed once so that we know where to start Tour function
    let knightLocation = null;
    let isLocationPicked = false; // This is arbitrary, but it prevents the user from running tour back to back times

    const tileClickHandler = (index) => {
        if (!isKnightPlaced) {
            setTiles(prevState => {
                const prevArray = [...prevState];
                prevArray[index] = <BoardTiles key={index} color={index} knight={'♞'} onTileClick={tileClickHandler}/>
                knightLocation = index;
                return prevArray;
            })

            isKnightPlaced = true;
        } else if (!isLocationPicked) {
            /* Tour is a function that performs BFS to find the shortest path between two points on our board.
            * It accepts a starting and an ending location, and it will return an array of ints that represents
            * the path we need to take to get to our destination.*/
            let tourArray = Tour(knightLocation, index)
            let count = 1;
            /*
            * As opposed to updating the tiles array inside setTiles with prevState, I decided to do this outside
            * because when updating with prevState I was unable to set a tile's text content with variables like count
            */
            while (tourArray.length > 1) {
                let index = tourArray.shift();
                tiles[index] = <BoardTiles key={index} color={index} knight={count++} onTileClick={tileClickHandler} />;
            }
            tiles[tourArray[0]] = <BoardTiles key={tourArray[0]} color={tourArray[0]} knight={'♞'} onTileClick={tileClickHandler}/>;
            knightLocation = tourArray[0];
            setTiles(tiles);
            isLocationPicked = true;
        }

    }

    const tileArray = []

    // Generation of blank board
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
