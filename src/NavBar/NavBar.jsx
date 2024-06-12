import '../NavBar/NavBar.css'   

export default function NavigationBar() {
    return(
        <div className="button-container absolute bottom-10 ">
        <button class="button">
          <img src="../src/Image/search.png" alt="" class="icon" />
        </button>
        <button class="button">
          <img src="../src/Image/house.png" alt="" class="icon" />
        </button>
        <button class="button">
          <img src="../src/Image/bank.png" alt="" class="icon" />
        </button>
  
        <button class="button">
          <img src="../src/Image/cards.png" alt="" class="icon" />
        </button>

        <button class="button">
          <img src="../src/Image/transition.png" alt="" class="icon" />
        </button>
      </div>
    )
}