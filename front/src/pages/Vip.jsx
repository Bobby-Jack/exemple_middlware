import NavDropdownExample from "../components/NavDropdownExample"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Vip(props){
  const navigate = useNavigate()
  const [vipData, setVipData] = useState([])
  useEffect(() => {
     axios.get('http://127.0.0.1:8000/api/get_vip_data')
    .then((rep)=>{
      console.log(rep.data);
      if (rep.data.code == "SUCCESS") {
        setVipData([...rep.data.vipData])
      }else if (rep.data.code == "ACCESS_REFUSE"){
        navigate('/login')
      }
    })
  
    
  }, [])
  
    return(
      <>
          <div className="container">
              <NavDropdownExample connected={props.connected}/>
              <h1>Vip</h1>
              {vipData ?
                vipData.map((client, index)=>(
                 <div key={index}>{client.name} {client.value}</div>
                ))
                :
                ""
              }
          </div>
      </>
    )
  }
  
  export default Vip