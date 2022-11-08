import styled from "styled-components";
import { MAX_CONTAINER_WIDTH, mq } from "@/styles";

// This App container will be used to wrap all components which are main one
export const AppContainer = styled.div`
  overflow-x: hidden;
  margin-left: 2vw;
  margin-right: 2vw;

  @media ${mq.sm} {
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media ${mq.md} {
    margin-left: 8vw;
    margin-right: 8vw;
  }
  @media ${mq.xl} {
    max-width: ${MAX_CONTAINER_WIDTH}px;
    margin: 0 auto;
  }
`;
