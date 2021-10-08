import * as PropTypes from 'prop-types';

const getNextTodoStatus = {
    OPEN : "IN_PROGRESS",
    IN_PROGRESS: "DONE"
}

export const getNextStatus = (status) => {
    return getNextTodoStatus[status]
}

export const todosProps = PropTypes.exact({
    id: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string
})