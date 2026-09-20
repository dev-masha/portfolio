export default function About(){
 return(
  <div className="section" id="about">
   <p className="small-heading">Introduction</p>
   <h1 className="big-heading">About me</h1>
   <div className="about-main">
    <img src="./about.png" className="about-img" />
    <div className="about-right">
     <p className="about-text">I am Masha, a Web Developer. I love creating clean designs and writing clean code. I am currently learning Next.js and building real-world projects to improve my skills.</p>
     <div className="about-cards">
      <div className="about-card"><h4>Languages</h4><p>HTML, CSS, JavaScript, React, Next.js</p></div>
      <div className="about-card"><h4>Education</h4><p>BS in Computer Science</p></div>
      <div className="about-card"><h4>Projects</h4><p>Built more than 5 projects</p></div>
     </div>
    </div>
   </div>
  </div>
 )
}