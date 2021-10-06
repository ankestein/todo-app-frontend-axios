import {NavLink} from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
    return (
        <Wrapper>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todos/open">Open</NavLink>
            <NavLink to="/todos/doing">In Progress</NavLink>
            <NavLink to="/todos/done">Done</NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

