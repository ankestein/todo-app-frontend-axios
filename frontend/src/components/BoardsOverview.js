import styled from "styled-components/macro";
import Board from "./Board";

export default function BoardsOverview(props) {

    const openTodos = props.todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = props.todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter(todo => todo.status === "DONE")

    return (
        <Main>
            <Board title="Open" todos={openTodos} onAdvance={props.onAdvance}/>
            <Board title="In Progress" todos={inProgressTodos} onAdvance={props.onAdvance}/>
            <Board title="Done" todos={doneTodos}/>
        </Main>
    )
}

const Main = styled.main`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

