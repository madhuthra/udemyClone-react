import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";

function Recommended(){
  return(
    <div class="recommended">
    <h1 class="recommended__title">Recommended for you</h1>
    <p> Pick the best for you</p>
    <div class="recommended__container">
      <div class="course-card">
        <img src={c1} alt="Course one image"/>
        <h3>2023 python Dara Visualisation Masterclass</h3>
        <p>Col Steel</p>
        <p>4.5⭐⭐⭐⭐</p>
        <p>449 <del>999</del></p>

      </div>
      <div class="course-card">
        <img src={c2}alt="Course one image"/>
        <h3>2023 Web Development backend</h3>
        <p>Col Steel</p>
        <p>3.9⭐⭐⭐</p>
        <p>999 <del>1999</del></p>

      </div>
      <div class="course-card">
        <img src={c3} alt="Course one image"/>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449 <del>999</del></p>

      </div>
      <div class="course-card">
        <img src={c4} alt="Course one image"/>
        <h3>Full Stack web Development</h3>
        <p>Col Steel</p>
        <p>4.1⭐⭐⭐⭐</p>
        <p>1449 <del>2999</del></p>

      </div>
    </div>
  </div>
  )
}

export default Recommended