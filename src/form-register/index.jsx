import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
export default function FormRegister() {
  // dùng useFromik để quản lý form
  // useFormik : tạo state, validate, submit form
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      gender: "",
      country: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      gender: Yup.string().required(" Gender is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      console.log("values:", values);
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-start items-start px-5 space-y-3"
      >
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="rounded p-2"
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <span className="text-red-500">{formik.errors.username}</span>
        )}
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="rounded p-2"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-red-500">{formik.errors.email}</span>
        )}
        <label>Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={formik.handleChange}
            checked={formik.values.gender == "male"}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={formik.handleChange}
            checked={formik.values.gender == "female"}
          />
          Female
        </label>
        {formik.errors.gender && (
          <span className="text-red-500">{formik.errors.gender}</span>
        )}
        <select
          className="rounded p-2"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          <option value="">Select country</option>
          <option value="vietnam">Việt Nam</option>
          <option value="other">Other</option>
        </select>
        {formik.errors.country && (
          <span className="text-red-500">{formik.errors.country}</span>
        )}
        <button
          type="submit"
          className="px-5 py-2 bg-red-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
