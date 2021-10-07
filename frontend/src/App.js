import Header from "./components/Header";
import styled from "styled-components/macro";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import BoardsPage from "./components/BoardsPage";
import Homepage from "./components/Homepage";
import DetailsPage from "./components/DetailsPage";
import {getSingleTodo} from "./service/todo-api-service";
import useTodos from "./hooks/useTodos";


function App() {

    const {todos, addTodo, advanceTodo, removeTodo} = useTodos();

    return (
        <Router>
            <PageLayout>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route path="/" exact>
                        <Homepage
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                            onAdd={addTodo}
                        />
                    </Route>

                    <Route path="/todos/:statusSlug">
                        <BoardsPage
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                        />
                    </Route>

                    <Route path="/todo/:idSlug">
                        <DetailsPage
                            onDetails={getSingleTodo}/>
                    </Route>
                </Switch>
            </PageLayout>
        </Router>
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
  grid-template-rows: min-content min-content 1fr min-content;
  font-family: sans-serif;

`
