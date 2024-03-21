import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App(){
  return (
    <>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </>
  )
}

export default App