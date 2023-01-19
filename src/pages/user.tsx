import styled from "@emotion/styled";
import { setUser } from "entities";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserFormContainer = styled.div`
  max-width: 300px;
  padding: 1rem;
  margin-inline: auto;
  margin-top: 100px;

  border: 1px solid var(--gray-200);
  border-radius: var(--round);
`;

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <center>
        <h1 className="underline">Story of life</h1>
      </center>
      <UserFormContainer>
        <Formik
          initialValues={{ name: "", birthday: "" }}
          onSubmit={(values) => {
            dispatch(
              setUser({
                name: values.name,
                birthday: values.birthday,
              })
            );
            navigate("/");
          }}
        >
          {() => {
            return (
              <Form>
                <label>
                  Your name
                  <Field name="name" />
                </label>

                <label>
                  Birthday
                  <Field name="birthday" type="date" />
                </label>

                <button type="submit">Create bio</button>
              </Form>
            );
          }}
        </Formik>
      </UserFormContainer>
    </>
  );
};

export default User;
