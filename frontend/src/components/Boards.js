import styled from 'styled-components/macro'
import TodoList from './TodoList'

export default function Boards({ todos, onAdvance, onDelete }) {
  const openTodos = todos.filter(todo => todo.status === 'OPEN')
  const doingTodos = todos.filter(todo => todo.status === 'IN_PROGRESS')
  const doneTodos = todos.filter(todo => todo.status === 'DONE')

  return (
    <Wrapper>
      <TodoList title="Todo" todos={openTodos} onAdvance={onAdvance} />
      <TodoList title="Doing" todos={doingTodos} onAdvance={onAdvance} />
      <TodoList title="Done" todos={doneTodos} onDelete={onDelete} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 0 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 12px;
  overflow-y: scroll;
`
