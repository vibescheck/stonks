import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="stonks">
        stonks!
      </Link>
    </div>
  );
}

export default Footer;
