const FullTourButton = (props) => {
    const fullTourHandler = () => {
        console.log('full tour')
    };
    return (
        <button type={"submit"} onClick={fullTourHandler}>Reset</button>
    );
};
export default FullTourButton;