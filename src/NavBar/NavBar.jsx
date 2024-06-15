import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'   

export default function NavigationBar() {
    return(
        <div className="button-container absolute bottom-10 ">
  
  
        <button className="button">
          <Link to='/home'>
          <img src="../src/Image/house.png" alt="" className="icon" />
          </Link>
        </button>
  
  
        <button className="button">
          <img src="../src/Image/bank.png" alt="" className="icon" />
        </button>
  
        
        <button className="button">
        <Link to='/Cartoes'>
        <img src="../src/Image/cards.png" alt="" className="icon" />
        </Link>
        </button>
        
  

        <button className="button">
          <img src="../src/Image/transition.png" alt="" className="icon" />
        </button>


        <button className="button"> 
            <img src="../src/Image/perfil.png" alt="" className="icon" />
        </button>
      </div>
    )
}