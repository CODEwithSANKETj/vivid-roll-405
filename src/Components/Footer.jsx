import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">PAALTOO</h1>
        <h2>Contact</h2>
        <address>
          123 Main St, Bangalore, Karnataka | +91 9899988989
          <br />
          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>
            <li>
              <a href="#">Print</a>
            </li>
            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Feedback</h2>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Hardware Design</a>
            </li>
            <li>
              <a href="#">Software Design</a>
            </li>
            <li>
              <a href="#">Digital Signage</a>
            </li>
            <li>
              <a href="#">Automation</a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">IoT</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <p>© 2023 PAALTOO. All rights reserved.</p>
        <div className="legal__links">
          <span>
            Made with <span className="heart">♥</span> for our furry friends
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
