import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import axios from "axios";
import "../css/LoginPage.css";
import { useHistory } from "react-router-dom";

const initialValues = { email: "", password: "", rememberMe: true };
const validatForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (values.password.length < 8) {
    errors.password = "Need at least 8 characters";
  }
  return errors;
};

const LoginPage = ({ setToken, setUserId }) => {
  const history = useHistory();
  const submit = (values, { setSubmitting }) => {
    console.log(values);
    axios({
      method: "GET",
      url: "https://60dff0ba6b689e001788c858.mockapi.io/token",
      data: values,
    }).then((response) => {
      setSubmitting(false);
      alert("SUCCESS!!");
      setToken(response.data.token);
      setUserId(response.data.userId);
      axios.defaults.headers.common["Authorization"] = response.data.token;
      history.push("/");
    });
  };

  return (
    <div className="LoginPage">
      <h1>Form Login</h1>
      <Formik
        initialValues={initialValues}
        validate={validatForm}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="Loginpage-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                // x={console.log(values, errors)}
                // x={console.log(touched, errors)}
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
                name="email"
                className="form-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                name="password"
                className="form-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={values.rememberMe}
                onChange={handleChange}
                onBlur={handleBlur}
                name="rememberMe"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="btn-submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginPage;
