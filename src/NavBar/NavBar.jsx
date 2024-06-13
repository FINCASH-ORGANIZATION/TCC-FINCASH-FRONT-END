import '../NavBar/NavBar.css'   

export default function NavigationBar() {
    return(
        <div className="button-container absolute bottom-10 ">
        <button className="button">
          <img src="../src/Image/search.png" alt="" className="icon" />
        </button>
        <button className="button">
          <img src="../src/Image/house.png" alt="" className="icon" />
        </button>
        <button className="button">
          <img src="../src/Image/bank.png" alt="" className="icon" />
        </button>
  
        <button className="button">
          <img src="../src/Image/cards.png" alt="" className="icon" />
        </button>

        <button className="button">
          <img src="../src/Image/transition.png" alt="" className="icon" />
        </button>
      </div>
    )
}