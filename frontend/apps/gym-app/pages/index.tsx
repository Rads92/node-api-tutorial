import { useMount, useUnmount } from '@rads-gym-app/hooks';
import { Button } from '@rads-gym-app/shared-components';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  useMount(() => console.log('hello'));
  useUnmount(() => console.log('bye'));

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          This is gym app
          <Button>Sav!</Button>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
