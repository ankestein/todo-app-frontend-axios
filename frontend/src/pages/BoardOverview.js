import styled from "styled-components/macro";
import Board from "./Board";

export default function BoardOverview() {
    return (
        <Wrapper>
            <Board title={"OPEN"}/>
            <Board title={"DOING"}/>
            <Board title={"DONE"}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`