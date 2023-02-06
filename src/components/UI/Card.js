import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #312635;
`;

const Card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}

export default Card;