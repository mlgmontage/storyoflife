import styled from "@emotion/styled";
import { Overlay } from "shared";

const EventBox = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  padding: 1rem;

  background-color: white;
`;

const AddEvent = () => {
  return (
    <Overlay>
      <EventBox>
        <h2>Event</h2>
      </EventBox>
    </Overlay>
  );
};

export default AddEvent;
