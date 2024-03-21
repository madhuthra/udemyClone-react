import sale from "../assets/images/sale-img.jpg"

function Sale(){
  return(
    <div className="sale-img">
    <img src={sale} alt="sale image"/>
    <div className="sale-img__offer">
      <h2>udemy flash sale-img!24 hours to save</h2>
      <p>Get the top courses for just 499,just a one day to save but lifetime to learn</p>

    </div>
  </div>
  )
}

export default Sale