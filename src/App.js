import './App.css';
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import Board from "./components/Board/Board";
import styled from "styled-components";

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
`

function App() {
  return (
    <div className="App">
      <Header />
        <CenteredDiv>
            <Card>
                <Board />
            </Card>
        </CenteredDiv>
    </div>
  );
}

export default App;
