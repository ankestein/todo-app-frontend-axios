import styled from "styled-components/macro";

export default function NewTodo() {
    return (
        <FooterStyled>
            <input/>
            <button>Add</button>
        </FooterStyled>
    )
};

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 1fr min-content;
  margin-bottom: 18px;
`