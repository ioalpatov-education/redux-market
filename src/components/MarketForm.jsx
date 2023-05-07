import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/actionCreators";
import { useState, useRef } from "react";

const MarketFormSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  price: Yup.number()
    .required("Обязательное поле")
    .positive("Цена должна бельше или равно 0"),
  description: Yup.string().required("Обязательное поле"),
  count: Yup.number()
    .required("Обязательное поле")
    .positive("Кол-во должно бельше или равно 0"),
});

const MarketForm = () => {
  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const initialValues = {
    name: "",
    price: "",
    description: "",
    count: "",
  };

  const changeImageFile = () => {
    const image = fileInput.current.files[0];
    if (!image) {
      setFile(null);
    } else {
      setFile({
        file: window.URL.createObjectURL(image),
        name: image.name,
      });
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, price, description, count } = values;
    const image = !!file ? file.file : null;
    dispatch(addProduct(name, price, description, count, image));

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
            type="number"
            name="count"
            placeholder="count"
          />
          <p className="error-text">
            <ErrorMessage name="count" />
          </p>
        </div>
        <div className="form-group">
          <Button className="form-field" variant="contained" component="label">
            {!!file && file.name ? file.name : "Выбери изображение"}
            <input
              className="form-field form-field--image"
              onChange={changeImageFile}
              ref={fileInput}
              name="image"
              type="file"
              accept="image/*"
            />
          </Button>
          {/* <FileField
            className="form-field form-field--image"
            name="image"
            label="Выбери изображение"
            accept="image/*"
          /> */}

          <p className="error-text">
            <ErrorMessage name="count" />
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
