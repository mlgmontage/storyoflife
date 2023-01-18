import styled from "@emotion/styled";
import { useAppDispatch } from "app/store";
import { create } from "entities";
import { Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Overlay } from "shared";
import { v4 as uuid } from "uuid";

const EventBox = styled.div`
  width: 40vw;
  height: 100vh;
  float: right;
  padding: 1rem;

  background-color: white;
`;

const AddEvent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { year, month } = useParams();

  return (
    <Overlay>
      <EventBox>
        <div className="flex space-between">
          <h2>Event</h2>
          <h1 className="pointer" onClick={() => navigate(-1)}>
            X
          </h1>
        </div>

        <div className="mb-1">
          {Number(month) + 1}/{year}
        </div>

        <Formik
          initialValues={{
            event: "",
            title: "",
          }}
          onSubmit={(values, helpers) => {
            dispatch(
              create({
                id: uuid(),
                event: values.event,
                title: values.title,
                year: Number(year),
                month: Number(month),
              })
            );
            helpers.resetForm();
            navigate(-1);
          }}
        >
          {() => {
            return (
              <Form>
                <label>
                  Title
                  <Field name="title" type="text" autoFocus />
                </label>

                <label>
                  Event
                  <Field name="event" as="textarea" rows={15} />
                </label>

                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </EventBox>
    </Overlay>
  );
};

export default AddEvent;
