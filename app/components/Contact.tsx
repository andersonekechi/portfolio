export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-tag mono accent">/contact</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-desc muted">
          If you have an idea, a business problem, or a project that needs building — reach out.
          I respond to every serious enquiry within 24 hours.
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
      <footer className="footer">
        <div className="container">
          <p className="mono muted footer-text">$ exit 0&emsp;&mdash;&emsp;Anderson Ekechi &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
      <style jsx>{`
        .section { padding:100px 0 0; border-bottom:1px solid var(--border); }
        .section-tag { display:inline-block; font-size:12px; margin-bottom:16px; letter-spacing:.06em; }
        .section-title { font-size:clamp(1.8rem,3.5vw,2.6rem); margin-bottom:20px; line-height:1.15; }
        .contact-desc { max-width:520px; margin-bottom:48px; line-height:1.7; }
        .contact-grid { display:flex; flex-direction:column; gap:2px; margin-bottom:64px; }
        .contact-item { display:flex; justify-content:space-between; align-items:center; padding:18px 0; border-bottom:1px solid var(--border); flex-wrap:wrap; gap:8px; }
        .contact-item:hover { text-decoration:none; }
        .contact-key { font-size:12px; text-transform:uppercase; letter-spacing:.06em; min-width:100px; }
        .contact-val { font-size:14px; }
        .footer { padding:40px 0; }
        .footer-text { font-size:12px; text-align:center; letter-spacing:.03em; }
        @media(max-width:600px) { .contact-item { flex-direction:column; align-items:flex-start; } }
      `}</style>
    </section>
  );
}