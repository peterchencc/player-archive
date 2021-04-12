import { ThemeProvider } from '../context/themeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-primary text-primary">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
