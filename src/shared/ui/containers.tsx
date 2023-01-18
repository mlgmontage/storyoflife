import styled from "@emotion/styled";
import { PropsWithChildren, useEffect } from "react";

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

export const Month = styled.div`
  height: 150px;
  background-color: var(--gray-100);

  overflow-y: auto;
  overflow-x: hidden;
`;

export const OverlayStyled = styled.div`
  position: absolute;

  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: var(--overlay);
`;

export const Overlay: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const root = document.querySelector("#root");
    root?.classList.add("overflow-hidden");

    return () => {
      root?.classList.remove("overflow-hidden");
    };
  }, []);

  return <OverlayStyled>{children}</OverlayStyled>;
};