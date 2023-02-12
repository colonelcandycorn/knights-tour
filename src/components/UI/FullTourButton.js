import StyledButton from "./StyledButton";

const FullTourButton = (props) => {
    const fullTourHandler = () => {
        console.log('full tour')
        props.onFullTourClick();
    };
    return (
        <StyledButton type={"submit"} onClick={fullTourHandler}>Full Tour</StyledButton>
    );
};
export default FullTourButton;