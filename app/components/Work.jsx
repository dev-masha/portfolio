"use client"

export default function Work(){
 const works = [
  {
   title:"Blog Card Design",
   cat:"UI Project",
   img:"./card.jpg",
   live:"https://dev-masha.github.io/card-project/"
  },
  {
   title:"Tic Tac Toe",
   cat:"Game Project",
   img:"./tictactoe.jpg",
   live:"https://dev-masha.github.io/tic-tac-toe/"
  },
  {
   title:"Rock Paper Scissors",
   cat:"Game Project",
   img:"/rock.jpg",
   live:"https://dev-masha.github.io/rock-paper-scissor-game/"
  },
  {
   title:"Mars News",
   cat:"News Website",
   img:"./mars.jpg",
   live:"https://dev-masha.github.io/mars-news/"
  },
 ]

 return(
  <div className="section" id="work">
   <p className="small-heading">my portfolio</p>
   <h2 className="big-heading">my latest work</h2>
   <p className="work-desc">Welcome to my web development portfolio! Explore my recent projects.</p>
   
   <div className="work-grid">
    {works.map((w,i)=>(
     <div 
      key={i} 
      className="work-box"
      style={{
        backgroundImage: `url(${w.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f5f5f5"
      }}
     >
      <div className="work-tag">
  <div className="tag-left">
    <b>{w.title}</b>
    <span>{w.cat}</span>
  </div>
  <a href={w.live} target="_blank" className="view-btn">
    view →
  </a>
</div>
     </div>
    ))}
   </div>
  </div>
 )
}