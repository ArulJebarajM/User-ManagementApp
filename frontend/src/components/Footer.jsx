import "../styles/Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        <p>
          © {currentYear} MERN User Management System
        </p>

        <p>
          Developed by <strong>Arul Jebaraj M</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;