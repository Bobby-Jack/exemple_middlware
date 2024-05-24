import NavDropdownExample from "../components/NavDropdownExample"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login(props){
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
    })
    const change = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }


    const login = async (e) =>{
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/api/login', {
            ...formData, 
            'connected' : props.connected
            
        })
        .then((rep)=>{
            if (rep.data.code=="LOGIN_VALID") {
                console.log(rep.data.message);
                props.setConnected(true)
                navigate('/')
            }else{
                alert(rep.data.message)
                console.log(rep.data);
            }
        })
    }

  return(
    <>
        <div className="container">
            <NavDropdownExample connected={props.connected}/>
            <h1>Login</h1>
            
            <form className="d-flex flex-column gap-2" onSubmit={login}>
                <label htmlFor="">Username</label>
                <input type="text" name='username' value={formData.username} onChange={(e) => change(e)} />
                <label htmlFor="">Password</label>
                <input type="password" name='password' value={formData.password} onChange={(e) => change(e)} />
                <button type="submit">Connexion</button>
            </form>
        </div>
    </>
  )
}

export default Login