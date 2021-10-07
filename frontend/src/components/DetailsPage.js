import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components/macro";


export default function DetailsPage({onDetails}) {

    const [todo, setTodo] = useState({});
    const {idSlug} = useParams()

    useEffect(() => {
        onDetails(idSlug)
            .then(todo => setTodo(todo))
            .catch(error => console.error(error))
    }, [idSlug, onDetails])


    return(
        <Wrapper>
            <h3>Task Details</h3>
            <p>{todo.id}</p>
            <p>{todo.description}</p>
            <p>{todo.status}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`