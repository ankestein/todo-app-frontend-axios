export const getTodos = () => {
    return  fetch("/api/todo")
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("fetch todos failed")
            }
        )
}

export const postTodo = (description) => {
    return fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({description, status: "OPEN"}),
    })  .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("fetch todos failed")
        }
    )
}

