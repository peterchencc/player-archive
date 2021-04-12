import ThemeToggle from './ThemeToggle';
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="bg-secondary text-secondary">
      <div className="border-b-2 border-gray">
        <nav className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="text-2xl font-bold mx-4 sm:mx-8 py-4 flex">
            <span>OneFootball</span>
            <img className="ml-2" src={logo} alt="Logo" />
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
