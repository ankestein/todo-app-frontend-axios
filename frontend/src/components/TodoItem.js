import styled from "styled-components/macro";

export default function TodoItem({todo, onAdvance, onDelete}) {


    return (
        <Wrapper>
            <h3>{todo.description}</h3>
            {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
            {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  border: 3px solid darkblue;
  background-color: ghostwhite;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
`