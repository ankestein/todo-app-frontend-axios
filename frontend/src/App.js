import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import styled from "styled-components/macro";

function App() {

    const todos = [
        {
            id: "1",
            description: "learn react",
            status: "IN_PROGRESS"
        },
        {
            id: "2",
            description: "sleep",
            status: "OPEN"
        },
        {
            id: "3",
            description: "drink beer",
            status: "DONE"
        },
        {
            id: "4",
            description: "chill",
            status: "OPEN"
        },
        {
            id: "5",
            description: "drink another beer",
            status: "IN_PROGRESS"
        }

    ]
    return (
        <PageLayout>
            <Header/>
            <BoardsOverview todos={todos}/>
            <NewTodo/>
        </PageLayout>
    );
}

export default App;

const PageLayout = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;


  display: grid;
  grid-template-rows: min-content 1fr min-content;

`
