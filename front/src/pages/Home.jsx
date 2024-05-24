import NavDropdownExample from "../components/NavDropdownExample"
import axios from "axios";
function Home(props) {

    function logout(){
      axios.post('http://127.0.0.1:8000/api/logout',{'connected' : props.connected})
      .then((rep)=>{
        console.log(rep.data);
        if (rep.data.code == "SUCCESS") {
            props.setConnected(false)
        }
        console.log(rep.data.message);

      })
    }
    

    return (
        <div className="container">
            <NavDropdownExample connected={props.connected} />
            <h1>HOME</h1>
            {
                props.connected ?
                <button onClick={logout}>LOGOUT</button>
                :
                <p>Vous n'êtes pas connecté</p>
            }
        </div>
    )
}

export default Home