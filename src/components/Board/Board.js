import styled from "styled-components";
import BoardTiles from "./BoardTiles";
import {useRef, useState} from "react";
import Tour from "../Knight/Tour";
import FullTour from "../Knight/FullTour";
import ResetButton from "../UI/ResetButton";
import FullTourButton from "../UI/FullTourButton";

const StyledBoard = styled.div `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    cursor: pointer;
`

const Board = (props) => {
    const isKnightPlaced = useRef(false); // the knight can be placed once so that we know where to start Tour function
    const knightLocation = useRef(null);
    const isLocationPicked = useRef(false); // This is arbitrary, but it prevents the user from running tour back to back times

    const generateNewBoard = ()=> {
        let tileArray = []

        for (let i = 0; i < 64; ++i) {
            tileArray.push(<BoardTiles key={i} color={i} knight={''} onTileClick={tileClickHandler} />);
        }
        return tileArray;
    }
    const generateTourBoard = (tourArray) => {
        let tileArray = generateNewBoard();
        let count = 1;
        while (tourArray.length > 1) {
            let index = tourArray.shift();
            tileArray[index] = <BoardTiles key={index} color={index} knight={count++} onTileClick={tileClickHandler} />;
        }
        tileArray[tourArray[0]] = <BoardTiles key={tourArray[0]} color={tourArray[0]} knight={'♞'} onTileClick={tileClickHandler}/>;
        setTiles(tileArray);
    }

    //Reset is handled in App.js
    const resetHandler = () => {
        props.onResetClick();
    }

    /* Full Tour is a modified version of my Tour function
    *  I use the findValidChildren function to find children and
    *  to facilitate figuring out valid grandchildren of a current
    *  node. The tour picks its next location based on its child
    *  node with the least children. If there are ties, it picks the
    *  last child with the least amount of children. This function
    *  fails to find a complete tour on several tiles (24, 49...)
    *  I am not currently sure of where the failure lies on those tiles.
     */
    const fullTourHandler = () => {
       generateTourBoard(FullTour(knightLocation.current));
    }

    const tileClickHandler = (index) => {
        if (!isKnightPlaced.current) {
            setTiles(prevState => {
                const prevArray = [...prevState];
                prevArray[index] = <BoardTiles key={index} color={index} knight={'♞'} onTileClick={tileClickHandler}/>
                knightLocation.current = index;
                return prevArray;
            })

            isKnightPlaced.current = true;
        } else if (!isLocationPicked.current) {
            /* Tour is a function that performs BFS to find the shortest path between two points on our board.
            * It accepts a starting and an ending location, and it will return an array of ints that represents
            * the path we need to take to get to our destination.*/
            /*
            * As opposed to updating the tiles array inside setTiles with prevState, I decided to do this outside
            * because when updating with prevState I was unable to set a tile's text content with variables like count
            */
            generateTourBoard(Tour(knightLocation.current, index))
            knightLocation.current = index;
            isLocationPicked.current = true;
        }

    }

    const [tiles, setTiles] = useState(generateNewBoard());

    return (
        <div>
            <StyledBoard>
                {tiles}
            </StyledBoard>
            <ResetButton  onReset={resetHandler}/>
            <FullTourButton onFullTourClick={fullTourHandler}/>
        </div>
    )
};

export default Board;
