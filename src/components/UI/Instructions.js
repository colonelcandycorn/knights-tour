import Card from "./Card";
import styled from "styled-components";

const StyledPara = styled.p `
  max-width: 22rem;
  padding: 1rem;
  color: #E9D9BB;
  font-size: 1.25rem;
`
const Instructions = () => {
    return (
        <Card>
            <StyledPara>
                Place your knight by clicking on the board. Then, you can either click on another space to find the
                shortest path between two spaces, or you can hit the Full Tour button to see the path the knight can
                take to touch every space without touching the same space twice.
            </StyledPara>
        </Card>
    )
};

export default Instructions;