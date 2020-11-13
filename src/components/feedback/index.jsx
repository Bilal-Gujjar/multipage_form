import React from 'react';
import { Formik, Field, Form, ErrorMessage, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';

export const Feedback = ({submit,values}) => {
  return (
   <div>
     <p>Area : {values.area}</p>
     <p>City: {values.city}</p>
     <p>Card Number : {values.cardNumber}</p>
     <p>Card Name : {values.cardName}</p>
     <p>E-Mail : {values.email}</p>
     <p>$ Total : 20$</p>
     <button onClick = {()=>submit(1)} >Back</button>
   </div>
  );
};