import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Address = ({submit,setFormValues,preValues}) => {
  return (
    <Formik
      initialValues={preValues}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 5 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 5 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
          submit(1)
          setFormValues({...values})
     
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br/><br/>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br/><br/>
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" /><br/><br/>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};