import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom' ;
function App() {
  const [Token , setToken] = useState(localStorage.getItem('token') || null) 
  //ya to ye null hoga ya token hoga
  //localStorage se token le lo agar hai to
  const navigate = useNavigate()
  const handleLogin = () =>{
     navigate('/Login')
  }
  const handleRegister = () =>{
    navigate('/Register')
  }
  return (
    <>
    {Token?
       <div>
         <button className="button" onClick={handleLogin}> Login</button>
         <button className="button" onClick={handleRegister}> Register</button>
       </div>
       :
       navigate('/Login')
    }
    {/* <div>
         <button className="button" onClick={handleLogin}> Login</button>
         <button className="button" onClick={handleRegister}> Register</button>
       </div> */}
    </>
  )
}

export default App
