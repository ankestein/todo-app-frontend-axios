import styled from 'styled-components/macro';
import TodoItem from './TodoItem';

export default function Board({ title, todos, onAdvance, onDelete }) {
    return (
        <section>
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
                    );
                })}
            </List>
        </section>
    );
}

const List = styled.ul`
    list-style: none;
    padding: 0;
`;
