import styled from "styled-components/macro";
import useTodo from "../hooks/useTodo";
import * as PropTypes from "prop-types";


DetailsPage.propTypes = {
   onDetails: PropTypes.func.isRequired,
}
export default function DetailsPage({onDetails}) {

 const {todo} = useTodo({onDetails});


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