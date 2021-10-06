import styled from "styled-components/macro";
import Board from "./Board";
import Navigation from "./Navigation";
import {Route, Switch} from "react-router-dom";

export default function BoardsOverview({todos, onAdvance, onDelete}) {

    const openTodos = todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = todos.filter(todo => todo.status === "DONE")

    return (
        <main>
            <Navigation/>
            <Switch>
                <Route path="/todos/open">
                    <Board title="Open"
                           todos={openTodos}
                           onAdvance={onAdvance}/>
                </Route>

                <Route path="/todos/doing">
                    <Board title="In Progress"
                           todos={inProgressTodos}
                           onAdvance={onAdvance}/>
                </Route>

                <Route path="/todos/done">
                    <Board title="Done"
                           todos={doneTodos}
                           onDelete={onDelete}/>
                </Route>

                <Route path="/">
                    <HomeBoard>
                        <Board title="Open"
                               todos={openTodos}
                               onAdvance={onAdvance}/>
                        <Board title="In Progress"
                               todos={inProgressTodos}
                               onAdvance={onAdvance}/>
                        <Board title="Done"
                               todos={doneTodos}
                               onDelete={onDelete}/>
                    </HomeBoard>
                </Route>
            </Switch>

        </main>
    )
}

const HomeBoard = styled.div`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

