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
/*display: grid;
  grid-template-columns: repeat(4, 1fr);*/
  grid-column-start: 1;
  grid-column-end: 4;
  justify-content: space-between;
  
  /*direction: ltr;*/
  /*wrap: nowrap;*/

`

