import { useContext } from "react";
import "./pages.css"; 
import { AuthContext } from "../AuthContext.js"; 

export default function Home() {   
  const { setLoggedIn } = useContext(AuthContext);

  return (     
    <div className="page">       
      <button className="toggle-btn" onClick={() => setLoggedIn(false)}>         
        Log out (toggle)       
      </button>     
    </div>   
  ); 
}
