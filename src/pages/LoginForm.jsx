import { useFormik } from "formik";
import React, { useContext } from "react";
import { schema } from "./schema";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/coins");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      signUser(values);
      actions.resetForm();
      navigate("/coins");
    },
  });
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/coinlogo.png" alt="" />
          <h3>CoinMania</h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              className={formik.errors.email && formik.touched.email && "error"}
              onChange={formik.handleChange}
              type="text"
              onBlur={formik.handleBlur}
              placeholder="örn : isim@gmail.com"
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label>Yas</label>
            <input
              name="age"
              className={formik.errors.age && formik.touched.age && "error"}
              onChange={formik.handleChange}
              type="number"
              onBlur={formik.handleBlur}
              placeholder="örn : 34"
            />
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
            )}
          </div>
          <div>
            <label>Sifre</label>
            <input
              name="password"
              className={
                formik.errors.password && formik.touched.password && "error"
              }
              onChange={formik.handleChange}
              type="password"
              onBlur={formik.handleBlur}
              placeholder="••••••"
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div>
            <label>Sifre Onay</label>
            <input
              name="confirmPassword"
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              onChange={formik.handleChange}
              type="password"
              onBlur={formik.handleBlur}
              placeholder="••••••"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>
          <div className="check-wrapper">
            <div className="check">
              <input
                name="terms"
                className={
                  formik.errors.terms && formik.touched.terms && "error"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">Kosullari okudum ve onayliyorum.</label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
