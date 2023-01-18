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
