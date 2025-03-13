import * as Yup from 'yup'

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const formSchema = Yup.object({
    fname : Yup.string().min(5).required("Please enter your firstname"),
    lname : Yup.string().min(5).required("Please enter your lastname"),
    email : Yup.string().email("please enter valid email").required("please enter your email"),
    password : Yup.string().matches(passwordRegex,"please enter valid password").required("please enter password"),
    cpassword : Yup.string().oneOf([Yup.ref("password")] , "password do not match").required("please enter password correctly"),

    
})

