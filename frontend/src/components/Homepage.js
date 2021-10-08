import BoardsOverview from "./BoardsOverview";
import NewTodo from "./NewTodo";
import * as PropTypes from "prop-types";
import { todosProps } from '../service/todo-service';


Homepage.propTypes = {
    todos: PropTypes.arrayOf(todosProps).isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func.isRequired,
}

export default function Homepage({todos, onAdvance, onDelete, onAdd}) {
    return (
        <>
            <BoardsOverview
                todos={todos}
                onAdvance={onAdvance}
                onDelete={onDelete}
            />
            <NewTodo onAdd={onAdd}/>
        </>
    )
};