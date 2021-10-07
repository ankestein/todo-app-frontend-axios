import BoardsOverview from "./BoardsOverview";
import NewTodo from "./NewTodo";
import * as PropTypes from "prop-types";

Homepage.propTypes = {
    todos: PropTypes.array.isRequired,
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