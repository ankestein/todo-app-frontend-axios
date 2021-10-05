import styled from "styled-components/macro";

export default function TodoItem(props) {
    return (
        <Wrapper>
            <h3>{props.todo.description}</h3>
            { props.onAdvance && <button onClick={() => props.onAdvance(props.todo)}>Advance</button> }
            <button>Delete</button>
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