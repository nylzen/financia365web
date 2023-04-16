import { WhatsAppBtn } from '..';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <WhatsAppBtn />
      <Footer />
    </>
  );
};
export default Layout;
