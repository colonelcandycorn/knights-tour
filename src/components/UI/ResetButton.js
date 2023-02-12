import StyledButton from "./StyledButton";

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