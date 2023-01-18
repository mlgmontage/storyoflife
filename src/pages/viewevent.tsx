import { useEvent } from "entities";
import { useNavigate, useParams } from "react-router-dom";
import { EventBox, Overlay } from "shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { EventForm } from "features";

const ViewEvent = () => {
  const [view, setView] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id)
    return (
      <div>
        <strong>Error:</strong> id is not provided
      </div>
    );

  const event = useEvent(id);

  return (
    <Overlay>
      <EventBox>
        <div className="flex space-between">
          <FontAwesomeIcon
            icon={faEdit}
            className="pointer"
            onClick={() => setView(!view)}
          />
          <FontAwesomeIcon
            icon={faClose}
            className="pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        {view ? (
          <>
            <h1 className="underline">{event?.title}</h1>
            <div>{event?.event}</div>
          </>
        ) : (
          <EventForm event={event!} type="edit" />
        )}
      </EventBox>
    </Overlay>
  );
};

export default ViewEvent;
