import {NavLink} from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
    return (
        <Wrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/todos/open">Open</NavLinkStyled>
            <NavLinkStyled to="/todos/doing">In Progress</NavLinkStyled>
            <NavLinkStyled to="/todos/done">Done</NavLinkStyled>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const NavLinkStyled = styled(NavLink)`
text-decoration: none;
`
