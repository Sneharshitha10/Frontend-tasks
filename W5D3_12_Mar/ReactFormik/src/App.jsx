import React from 'react'
import './App.css'
import {useFormik} from 'formik'

function App() 
{

  const formik = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : ''
    },

    onSubmit : (values) => {
        console.log('form submit ', values)   
        //axios.post('.....url' , {values})    //to send data to backend
    },

    validate : (values) => {
      let errors = {};
      if(!values.name)
      {
         errors.name = " Name is required"
      }  
      if(!values.email)
      {
          errors.email = " Email is required"
      }  
      if(!values.password)
      {
          errors.password = " Password is required"
      }  
      return errors;
    }
  })


    return(
      <div className='App'>
          <form className='form-container' autoComplete='off' onSubmit={formik.handleSubmit}>

              <div className='form-div'>
                  <label> Name </label>
                   <input type = "text" name="name" id="name"  value={formik.values.name} onChange={formik.handleChange}/>
                   {formik.errors.name ? <div className='errors'> {formik.errors.name} </div> : null}
               </div> 

              <div className='form-div'>
                  <label> E-mail </label>
                   <input type = "email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                   {formik.errors.email ? <div className='errors'> {formik.errors.email} </div> : null}
              </div> 

              <div className='form-div'>
                  <label> Password </label>
                   <input type = "password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                   {formik.errors.password ? <div className='errors'> {formik.errors.password} </div> : null}
              </div> 

              <button type = "submit"> Register </button> 

          </form>
      </div>
    )
  
}

export default App
