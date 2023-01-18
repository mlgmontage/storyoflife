import styled from "@emotion/styled";

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

export const Month = styled.div`
  height: 150px;
  background-color: var(--gray-100);
`;

export const Overlay = styled.div`
  position: absolute;

  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: var(--overlay);
`;
