import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: #312635;
    color: #E9D9BB;
    font-size: 2rem;
    font-weight: 500;
    padding-block: 1rem;
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Knight's Tour</h1>
        </StyledHeader>
    )
}

export default Header;