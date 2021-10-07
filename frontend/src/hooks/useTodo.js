import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function useTodo ({onDetails}) {
    const [todo, setTodo] = useState({});
    const {idSlug} = useParams();

    useEffect(() => {
        onDetails(idSlug)
            .then(todo => setTodo(todo))
            .catch(error => console.error(error))
    }, [idSlug, onDetails])

    return{todo}

}