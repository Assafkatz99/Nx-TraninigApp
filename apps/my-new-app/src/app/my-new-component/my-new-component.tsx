import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyNewComponentProps {}

const StyledMyNewComponent = styled.div`
  color: pink;
`;

export function MyNewComponent(props: MyNewComponentProps) {
  return (
    <StyledMyNewComponent>
      <h1>Welcome to MyNewComponent!</h1>
    </StyledMyNewComponent>
  );
}

export default MyNewComponent;
