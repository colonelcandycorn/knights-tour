import './App.css';
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import Board from "./components/Board/Board";
import styled from "styled-components";
import ResetButton from "./components/UI/ResetButton";
import {useState} from "react";

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 1rem;
`

function App() {
    const[boardKey, setBoardKey] = useState(1);
    const siblingResetHandler = () => {
        setBoardKey(prevState => ++prevState);
    }

  return (
    <div className="App">
      <Header />
        <CenteredDiv>
            <Card>
                <Board key={boardKey} />
            </Card>
            <ResetButton onReset={siblingResetHandler}/>
        </CenteredDiv>
    </div>
  );
}

export default App;
