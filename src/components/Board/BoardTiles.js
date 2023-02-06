import styled from "styled-components";

const StyledBoardTiles = styled.div `
  min-height:2.5rem;
  min-width:2.5rem;
  font-size: 1.5rem;
  color: #312635;
  text-align: center;
  background-color: ${props => { return (((props.color % 2 === 0) && (Math.floor(props.color / 8) % 2 === 0)) ||
                                         ((props.color % 2 !== 0) && (Math.floor(props.color / 8) % 2 !== 0))) ? '#E9D9BB' : '#C2754B'}};
`;

const BoardTiles = (props) => {

    const clickHandler = () => {
        props.onTileClick(props.color)
    }

    return (
        <StyledBoardTiles color={props.color} onClick={clickHandler}>
            {props.knight}
        </StyledBoardTiles>
    )
}

export default BoardTiles;

//*&#9822; knight unicode