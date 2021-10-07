import styled from "styled-components/macro";
import {useState} from "react";
import * as PropTypes from "prop-types";


NewTodo.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default function NewTodo({onAdd}) {

    const [description, setDescription] = useState("");

    const handleClick = (event) => {
        event.preventDefault()
        if (!description) {
            return
        }
        onAdd(description)
        setDescription("")
    }

    return (
        <Form onSubmit={handleClick}>
            <input
                value={description}
                onChange={event => setDescription(event.target.value)}/>
            <button>Add</button>
        </Form>
    )
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr min-content;
  margin-bottom: 18px;
`