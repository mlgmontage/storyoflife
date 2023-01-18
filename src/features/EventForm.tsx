import { useAppDispatch } from "app/store";
import { create, edit } from "entities";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Event } from "entities";

type Props = {
  event: Partial<Event>;
  type: "create" | "edit";
};

export const EventForm: React.FC<Props> = ({ event, type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        event: event.event ?? "",
        title: event.title ?? "",
      }}
      onSubmit={(values, helpers) => {
        if (type === "create") {
          dispatch(
            create({
              id: uuid(),
              event: values.event,
              title: values.title,
              year: event.year!,
              month: event.month!,
            })
          );
        }

        if (type === "edit") {
          dispatch(
            edit({
              id: event.id!,
              event: values.event,
              title: values.title,
              year: event.year!,
              month: event.month!,
            })
          );
        }

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
  );
};
