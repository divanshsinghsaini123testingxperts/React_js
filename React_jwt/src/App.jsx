import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handlesubmit = async (e) =>{
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
    const response = await fetch()
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
          <h1 className="text-2xl font-bold mb-4">Login Form</h1>
         <label htmlFor="email">Email:</label>
         <input type="email" id="email" className="border p-2 mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
         <label htmlFor="password">Password:</label>
         <input type="password" id="password" className="border p-2 mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
         <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </>
  )
}

export default App
