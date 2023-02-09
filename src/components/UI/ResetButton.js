import styled from "styled-components";


const StyledButton =styled.button`
    background-color: #CC4651;
    color: #e9d9bb;
    padding: .25rem 2rem;
    font-size: 1.5rem;
    border-radius: 12px;
`;
const ResetButton = (props) => {
    const resetHandler = () => {
        console.log('reset')
        props.onReset();
    };
    return (
        <StyledButton type={"submit"} onClick={resetHandler}>Reset</StyledButton>
    );
};

export default ResetButton;