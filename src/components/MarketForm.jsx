import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/actionCreators";

const MarketFormSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  price: Yup.number()
    .required("Обязательное поле")
    .positive("Цена должна быть больше 0"),
  description: Yup.string().required("Обязательное поле"),
});

const MarketForm = () => {
  const initialValues = {
    name: "",
    price: "",
    description: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, price, description } = values;
    dispatch(addProduct(name, price, description));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={MarketFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className="market__form">
        <div className="form-group">
          <Field
            className="form-field"
            type="text"
            name="name"
            placeholder="name"
          />
          <p className="error-text">
            <ErrorMessage name="name" />
          </p>
        </div>
        <div className="form-group">
          <Field
            className="form-field"
            type="number"
            name="price"
            placeholder="price"
          />
          <p className="error-text">
            <ErrorMessage name="price" />
          </p>
        </div>
        <div className="form-group">
          <Field
            className="form-field"
            type="text"
            name="description"
            component="textarea"
            placeholder="description"
          />
          <p className="error-text">
            <ErrorMessage name="description" />
          </p>
        </div>
        <Button
          className="form__btn"
          variant="outlined"
          color="success"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </Formik>
  );
};

export default MarketForm;
