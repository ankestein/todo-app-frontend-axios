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