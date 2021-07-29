import styled from 'styled-components/macro'
import { useState } from 'react'

export default function NewTodo({ onAdd }) {
  const [description, setDescription] = useState('')

  const handleDescriptionChange = event => setDescription(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    onAdd(description)
    setDescription('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="new-todo"
        placeholder="Describe the new todo"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button>Add</button>
    </Form>
  )
}

const Form = styled.form`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr min-content;

  input {
    display: block;
    width: 100%;
  }
`
