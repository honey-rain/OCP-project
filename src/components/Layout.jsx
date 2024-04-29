import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({children}) => (
  <div className="App">
    <Navigation />
    <div className='content' >
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout