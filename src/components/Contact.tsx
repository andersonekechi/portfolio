export default function Contact() {
  return (
    <section id="contact" className="section contact-section-last">
      <div className="container">
        <span className="section-tag mono accent">/contact</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-desc muted">
          If you have an idea, a business problem, or a project that needs building — reach out.
          I respond within 24 hours.
        </p>
        <div className="contact-grid">
          <a href="mailto:andy.ekechi@gmail.com" className="contact-item">
            <span className="contact-key mono muted">email</span>
            <span className="contact-val mono accent">andy.ekechi@gmail.com</span>
          </a>
          <a href="https://baceflip.com" target="_blank" rel="noopener" className="contact-item">
            <span className="contact-key mono muted">company</span>
            <span className="contact-val mono accent">baceflip.com</span>
          </a>
          <div className="contact-item">
            <span className="contact-key mono muted">location</span>
            <span className="contact-val mono">Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
}