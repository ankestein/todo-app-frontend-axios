import styled from 'styled-components/macro';
import { useState } from 'react';

export default function NewTodo({ onAdd }) {
    const [description, setDescription] = useState('');

    const handleClick = () => {
        onAdd(description);
        setDescription('');
    };

    return (
        <FooterStyled>
            <input
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <button onClick={handleClick}>Add</button>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin-bottom: 18px;
`;
