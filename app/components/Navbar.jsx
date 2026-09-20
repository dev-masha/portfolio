export default function Navbar(){
 return(
  <div className="navbar">
   <div className="logo">Masha<span className="dot">.</span></div>
   <div className="nav-center">
    <a href="#home">Home</a>
    <a href="#about">About me</a>
    <a href="#work">My Work</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact Me</a>
   </div>
   <button className="nav-btn">Contact ↗</button>
  </div>
 )
}