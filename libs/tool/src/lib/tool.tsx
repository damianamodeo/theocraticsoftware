import styled from 'tailwind';

/* eslint-disable-next-line */
export interface ToolProps {}

const StyledTool = styled.div`
  color: pink;
`;

export function Tool(props: ToolProps) {
  return (
    <StyledTool>
      <h1>Welcome to Tool!</h1>
    </StyledTool>
  );
}

export default Tool;
