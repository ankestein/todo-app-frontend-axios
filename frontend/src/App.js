import styled from 'styled-components/macro'
import AppHeader from './components/AppHeader'
import NewTodo from './components/NewTodo'
import Boards from './components/Boards'
import { useEffect, useState } from 'react'
import axios from 'axios'

const nextStatus = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
}

export default function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = () =>
    axios
      .get('/api/todo')
      .then(response => setTodos(response.data))
      .catch(console.error)

  useEffect(() => {
    axios
      .get('/api/todo')
      .then(response => setTodos(response.data))
      .catch(console.error)
  }, [])

  const advanceTodo = todo => {
    const advancedTodo = { ...todo, status: nextStatus[todo.status] }
    axios
      .put(`/api/todo/${todo.id}`, advancedTodo)
      .then(fetchTodos)
      .catch(console.error)
  }

  const deleteTodo = id =>
    axios.delete(`/api/todo/${id}`).then(fetchTodos).catch(console.error)

  const addTodo = description => {
    const todo = { description, status: 'OPEN' }
    axios.post('/api/todo', todo).then(fetchTodos).catch(console.error)
  }

  return (
    <PageLayout>
      <AppHeader />
      <Boards todos={todos} onAdvance={advanceTodo} onDelete={deleteTodo} />
      <NewTodo onAdd={addTodo} />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`
