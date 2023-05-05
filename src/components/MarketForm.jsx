import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Snackbar, Alert } from "@mui/material";
import { useState, useContext } from "react";
import { NewsContext } from "../../App";
import { useNavigate } from "react-router-dom";

const authenticationFormSchema = Yup.object({
  login: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

const MarketForm = () => {
  const { getProfile } = useContext(NewsContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const initialValues = {
    login: "",
    password: "",
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={authenticationFormSchema}
      onSubmit={handleClick}
    >
      <Form className="authentication__form">
        <div className="form-group">
          <Field
            className="form-field"
            type="text"
            name="login"
            placeholder="Username"
          />
          <p className="error-text">
            <ErrorMessage name="login" />
          </p>
        </div>
        <div className="form-group">
          <Field
            className="form-field"
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="error-text">
            <ErrorMessage name="password" />
          </p>
        </div>
        <Button variant="outlined" color="success" type="submit">
          Login
        </Button>

        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </Form>
    </Formik>
  );
};

export default MarketForm;
