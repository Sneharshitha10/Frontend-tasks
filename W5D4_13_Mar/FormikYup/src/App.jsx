import React from 'react'
import './App.css'
import {useFormik} from 'formik'
import { formSchema } from './schemas';

const initialValues = {
  fname : "",
  lname : "",
  email : "",
  password : "",
  cpassword : ""
};

const App = () => {

  const {values , handleBlur, handleChange, handleSubmit , errors , touched } = useFormik({
    initialValues,

    validationSchema : formSchema,

    onSubmit : (values) => {
        console.log(values);
    },
  });

  //console.log(errors);

  return(
    <div className='App'>
          <form className='form-container' autoComplete='off' onSubmit={handleSubmit}>

              <div className='form-div'>
                  <label> FirstName </label>
                   <input type = "text" name="fname" id="fname"  value={values.fname} onChange={handleChange} onBlur={handleBlur}/>
                   {errors.fname && touched.fname && <div className='errors'> {errors.fname} </div> } 
               </div>

              <div className='form-div'>
                  <label> LastName </label>
                   <input type = "text" name="lname" id="lname"  value={values.lname} onChange={handleChange} onBlur={handleBlur}/>
                   {errors.lname && touched.lname && <div className='errors'> {errors.lname} </div> } 
              </div>  

              <div className='form-div'>
                  <label> E-mail </label>
                   <input type = "email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                   {errors.email && touched.email && <div className='errors'> {errors.email} </div> } 
              </div> 

              <div className='form-div'>
                  <label> Password </label>
                   <input type = "password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                   {errors.password && touched.password && <div className='errors'> {errors.password} </div> } 
              </div> 

              <div className='form-div'>
                  <label> Confirm Password </label>
                   <input type = "password" name="cpassword" id="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
                   {errors.cpassword && touched.cpassword && <div className='errors'> {errors.cpassword} </div> } 
              </div> 

              <button type = "submit"> Register </button> 

          </form>
      </div>
  )
  
}

export default App
