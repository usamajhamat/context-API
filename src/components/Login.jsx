import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} =  useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
        <input type='text'
         value={userName}
         onChange={(e)=> setUserName(e.target.value)}
         placeholder='Username'/>
        <input type='text'
        value={password}
         onChange={(e)=> setPassword(e.target.value)}
         placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
