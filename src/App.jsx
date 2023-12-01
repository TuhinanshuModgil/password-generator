import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")


  // useCallBack is a new hook that we use look in the documentation to study more about it
  // it takes the function defination as well as all its dependencies in array form
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz"

    if (numAllow) {
      string += "1234567890"

    }
    if (charAllow) {
      string += "!@#$%^&*()"
    }

    for (let i = 0; i < length; i++) {
      const elem = Math.floor(Math.random() * (string.length + 1))

      const character = string.charAt(elem)
      pass += character

    }
    setPassword(pass)

  }, [setLength, numAllow, charAllow, password])

  // for generating and propogating our password at the start of the application 
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, setPassword])
  // we passed the setPassword as a param to the useEffect because it somehow optimises
const copyPwdToClipboard = useCallback(()=>{
  
  passwordRef.current.select()
  window.navigator.clipboard.writeText(password)
},[password])
  
const passwordRef = useRef(null)

  return (
    <>
      <div className='w-1/2  p-6 bg-gray-500 my-10 mx-auto rounded-lg'>
        <div className='password-bar flex '>
          <input 
          type="text" 
          value={password} 
          className='outline-none py-1 px-3 w-full rounded-l-lg shadow-md' 
          placeholder='Password' 
          readOnly
          ref={passwordRef} 
           />
          <button 
          className='outline-none bg-gray-900 text-white py-1 px-3 shrink-0 rounded-r-lg shadow-md'
          onClick={()=>{copyPwdToClipboard()}}
          >COPY</button>
        </div>

        <div className='flex text-sm gap-x-2 my-4 text-gray-900 font-medium justify-between'>

          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            {/* need to look into the input type:range usecase */}
            <label className='px-2'>length: {length} </label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id='numberInput' onChange={() => { setNumAllow((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} id='numberInput' onChange={() => { setCharAllow((prev) => !prev) }} />
            <label htmlFor="numberInput">Special Characters</label>
          </div>

        </div>

      </div>


    </>
  )
}

export default App

