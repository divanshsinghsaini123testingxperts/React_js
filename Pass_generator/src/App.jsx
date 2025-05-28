import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Password , setPassword] = useState("")
  const [Characters , setCharacters] = useState(false)
  const [Numbers , setNumbers] = useState(false)
  const [Length , setLength] = useState(8)
  //we need to write a function which contains all the logic 
  const generatePassword = useCallback(() =>{
     //here we write all the logic 
     const items = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     const nums = "0123456789";
     const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
      let available_items = items; //default password
      if(Characters == true) {
        available_items += symbols;
      }
      if(Numbers == true) {
        available_items += nums;
      }
      let generatedPassword = "";
      for(let i = 0 ; i< Length ; i++) {
        const randomIndex = Math.floor(Math.random() * available_items.length);
        generatedPassword += available_items[randomIndex];
      } 
      setPassword(generatedPassword);
       
  } , [Characters, Numbers , Length]);

  const copytoclip = () => {
    navigator.clipboard.writeText(Password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
   useEffect(() => {
    generatePassword();
  }
  , [Characters , Numbers, Length]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/80 shadow-2xl rounded-2xl p-10 w-[400px] flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-8 drop-shadow-lg">
            Password Generator
          </h1>
          <div className="flex w-full mb-6">
            <input
              type="text"
              className="flex-1 rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg bg-white/90"
              value={Password}
              readOnly
            />
            <button
              className="rounded-r-lg bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 font-semibold transition"
              onClick={copytoclip}
            >
              Copy
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="range"
                min={8}
                max={20}
                value={Length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="flex-1 accent-indigo-500"
              />
              <span className="ml-4 font-medium text-indigo-700">Length: {Length}</span>
            </div>
            <div className="flex items-center gap-6 justify-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Characters}
                  onChange={() => setCharacters((Prev) => !Prev)}
                  className="accent-pink-500"
                />
                <span className="text-gray-700 font-medium">Characters</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Numbers}
                  onChange={() => setNumbers((Prev) => !Prev)}
                  className="accent-indigo-500"
                />
                <span className="text-gray-700 font-medium">Numbers</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
