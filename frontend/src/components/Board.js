import styled from "styled-components/macro";
import TodoItem from "./TodoItem";
import * as PropTypes from "prop-types";


Board.propTypes = {
    /*title: PropTypes.string.isRequired,*/
    title: PropTypes.oneOf(['Open', 'In Progress', 'Done']).isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func,
}

export default function Board({title, todos, onAdvance, onDelete}) {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <List>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                onAdvance={onAdvance}
                                onDelete={onDelete}
                            />
                        </li>
                    )
                })}
            </List>
        </Wrapper>
    )
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`
