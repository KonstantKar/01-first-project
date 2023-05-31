import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
const LoginForm = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Вы не ввели свою почту!"),
    password: Yup.string().required("Вы не ввели свой пароль"),
  });
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={props.handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Email</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
