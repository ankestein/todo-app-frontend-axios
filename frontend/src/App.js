import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";
import {getNextStatus} from "./service/todo-service";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (description) => {
        postTodo(description)
            .then(addedTodo => setTodos([...todos, addedTodo]))
    }

    const advanceTodo = (todo) => {
        const newStatus = getNextStatus(todo.status)
        const advancedTodo = {...todo, status: newStatus}
        putTodo(advancedTodo)
            .then(updatedTodo =>
                setTodos(todos.map(item => updatedTodo.id === item.id ? advancedTodo : item)))
    }

    const removeTodo = (id) => {
        deleteTodo(id)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
    }


    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
    }, [])

    return (
        <Router>
            <PageLayout>
                <Header/>
                <BoardsOverview
                    todos={todos}
                    onAdvance={advanceTodo}
                    onDelete={removeTodo}
                />
                <NewTodo onAdd={addTodo}/>
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
  grid-template-rows: min-content 1fr min-content;
  font-family: sans-serif;

`
