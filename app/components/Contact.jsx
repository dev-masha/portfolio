export default function Contact(){
 return(
  <div className="section" id="contact">
   <p className="small-heading">connect with me</p>
   <h2 className="big-heading">get in touch</h2>
   <p className="contact-para">Fill the form - message will come directly to my Gmail.</p>
   <form className="contact-form" action="https://formsubmit.co/mashadev.git@gmail.com" method="POST">
    <input type="hidden" name="_captcha" value="false" />
    <div className="form-row">
     <input type="text" name="name" placeholder="Enter your name" required />
     <input type="email" name="email" placeholder="Enter your email" required />
    </div>
    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
    <button type="submit" className="btn-black" style={{width:"180px", margin:"0 auto"}}>submit now →</button>
   </form>
  </div>
 )
}