import Board from "./Board";
import {useParams} from "react-router-dom";
import * as PropTypes from "prop-types";


BoardsPage.propTypes = {
    /*todos: PropTypes.arrayOf(PropTypes.object).isRequired,*/
    todos: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string
    })).isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func,
}

export default function BoardsPage({todos, onAdvance, onDelete}) {

    const {statusSlug} = useParams()
    /*const params = useParams()
    console.log(params)*/

    const slugToStatus = {
        open: 'OPEN',
        doing: 'IN_PROGRESS',
        done: 'DONE'
    }

    const filteredTodos = todos.filter(todo => todo.status === slugToStatus[statusSlug])

    const slugToTitle = {
        open: "Open",
        doing: "In Progress",
        done: "Done"
    }

    const title = slugToTitle[statusSlug]

    return (
        <Board
            todos={filteredTodos}
            onAdvance={onAdvance}
            onDelete={onDelete}
            title={title}
        />
    )
}