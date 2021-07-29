import TodoItem from './TodoItem'
import styled from 'styled-components/macro'

export default function TodoList({ title, todos, onAdvance, onDelete }) {
  return (
    <section>
      <h2>{title}</h2>
      <List>
        {todos.map(todo => (
          <li key={todo.description}>
            <TodoItem todo={todo} onAdvance={onAdvance} onDelete={onDelete} />
          </li>
        ))}
      </List>
    </section>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-row-gap: 12px;
`
