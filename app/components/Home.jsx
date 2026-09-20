"use client"
export default function Home(){
 return(
  <div className="hero" id="home">
   <div className="profile-wrap">
     <img src="/logo.png" className="hero-profile" alt="profile" />
   </div>
   <p className="hero-hi">Hi! I'm Masha 👋</p>
   <h1 className="hero-title"> Web Developer<br/>based in Pakistan.</h1>
   <p className="hero-desc">I craft beautiful, fast, and responsive websites that turn ideas into amazing digital experiences.<br/>user-friendly websites using React and Next.js.</p>
   <div className="hero-btns">
  <button 
    className="btn-black"
    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
  >
    contact me →
  </button>

  <button 
    className="btn-white"
    onClick={() => window.open('https://dev-masha.github.io/card-project/', '_blank')}
  >
    my resume ↓
  </button>
</div>
  </div>
 )
}