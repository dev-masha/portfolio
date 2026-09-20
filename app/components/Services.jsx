
export default function Services(){
  return(
    <div className="services-section" id="services">
      <h2 className="services-title">My Services</h2>

      <div className="services-grid">
        
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>Modern and fast websites with Next.js & React</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>UI Design</h3>
          <p>Clean and beautiful user interface designs</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Responsive Design</h3>
          <p>Mobile-friendly design for all devices</p>
        </div>

      </div>
    </div>
  )
}