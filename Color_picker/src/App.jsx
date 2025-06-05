import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Color_box from './components/ColorBox.jsx'

function App() {
  const colors_arry = ["red", "blue", "black", "yellow", "green"];
  const [color , setColor] = useState('pink')
  return (
    <>
      <div className='h-screen w-screen' style={{backgroundColor:color}}>
         <div className='flex gap-4'>
            {colors_arry.map((item) => (
              <button onClick={()=>setColor(item)}>
                  {item}
              </button>
            ))}
          </div>
      </div>
    </>
  );
}


export default App
