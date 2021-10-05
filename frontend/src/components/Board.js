import styled from "styled-components/macro";
import TodoItem from "./TodoItem";

export default function Board(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <List>
                {props.todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                onAdvance={props.onAdvance}
                            />
                        </li>
                    )
                })}
            </List>
        </section>
    )
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`