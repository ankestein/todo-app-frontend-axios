import styled from 'styled-components/macro'

export default function TodoItem({ todo, onAdvance, onDelete }) {
  return (
    <Wrapper>
      <p>{todo.description}</p>
      <ButtonGroup>
        {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
        {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
      </ButtonGroup>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 1px solid #333;
  box-shadow: 1px 2px 4px #666;
  padding: 12px;
  p {
    margin: 0 0 12px 0;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`
