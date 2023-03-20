import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="NavBar">
        <Link style={{color:"Black", fontSize:"20px"}} to={"/Home"}><h3>Home</h3></Link>
        <Link style={{color:"Black", fontSize:"20px"}} to={"/Product"}> <h3>Products</h3></Link>
        <Link style={{color:"Black", fontSize:"20px"}} to={"/User"}> <h3>Users</h3></Link>
        <Link style={{color:"Black", fontSize:"20px"}} to={"/ContactUs"}> <h3>Contact</h3></Link>
    </div>
  )
}
export default Nav