import styled from "@emotion/styled";
import { PropsWithChildren, useEffect } from "react";

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

type MonthProps = {
  type: "past" | "current" | "future";
};

export const Month = styled.div<MonthProps>`
  height: 150px;
  background-color: ${(props) =>
    props.type === "future" ? "var(--gray-100)" : "transparent"};

  border: ${(props) =>
    props.type === "past" ? "1px solid var(--gray-100)" : "none"};

  border-radius: var(--round);
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

export const EventBox = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  padding: 1rem;

  background-color: white;
`;
