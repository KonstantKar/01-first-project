import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, FormikProps } from "formik";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm: React.FC<{
  handleSubmit: (values: LoginFormValues) => void;
}> = (props) => {
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Вы не ввели свою почту!"),
    password: Yup.string().required("Вы не ввели свой пароль!"),
  });

  const handleSubmit = (values: LoginFormValues) => {
    props.handleSubmit(values);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps: FormikProps<LoginFormValues>) => (
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
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
