import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
    return (
        <Wrapper>
            <Link to="/">Home</Link>
            <Link to="/open">Open</Link>
            <Link to="/doing">Doing</Link>
            <Link to="/done">Done</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

