import { useNavigate, useParams } from "react-router-dom";
import { EventBox, Overlay } from "shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { EventForm } from "features";

const AddEvent = () => {
  const navigate = useNavigate();
  const { year, month } = useParams();

  return (
    <Overlay>
      <EventBox>
        <div className="flex space-between items-center">
          <h2 className="underline">Event</h2>
          <FontAwesomeIcon
            className="pointer"
            icon={faClose}
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="mb-1">
          {Number(month) + 1}/{year}
        </div>

        <EventForm
          type="create"
          event={{ year: Number(year), month: Number(month) }}
        />
      </EventBox>
    </Overlay>
  );
};

export default AddEvent;
