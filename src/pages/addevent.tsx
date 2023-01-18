import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Overlay } from "shared";

const EventBox = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  padding: 1rem;

  background-color: white;
`;

const AddEvent = () => {
  const navigate = useNavigate();

  return (
    <Overlay>
      <EventBox>
        <div className="flex space-between">
          <h2>Event</h2>
          <h1 className="pointer" onClick={() => navigate(-1)}>
            X
          </h1>
        </div>
      </EventBox>
    </Overlay>
  );
};

export default AddEvent;
