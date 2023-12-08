import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
    <div className="navContainer">
      <span className="logo">Tourset</span>
      <div className="navItems">
        <button className="navButton Register">Register</button>
        <button className="navButton ">Login</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar
