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
            <h2>Task Details</h2>
            <p>{`ID: ${todo.id}`}</p>
            <p>{`Description: ${todo.description}`}</p>
            <p>{`Status: ${todo.status}`}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
  margin: 20px 0 0 0 ;
`