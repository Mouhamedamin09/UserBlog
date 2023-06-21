
import Signup from "./signup"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SignIn from "./signin";



function Form(){



    return (
        <BrowserRouter>
        <header >
            <Link to="/signup" >Signup</Link>
            <Link to="/signin" >Signin</Link>
        </header>
        <Routes>
          <Route path="/" element={<h1>Make your acc now</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>
      </BrowserRouter>
    )
}




export default Form;
