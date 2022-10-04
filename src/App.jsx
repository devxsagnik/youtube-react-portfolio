import { Route, Routes, Link } from 'react-router-dom';
import { Navbar, Footer } from './components';
import styles from "./style"; 
import {
  Blog, Home, About, Contact, Error
} from './Pages';

const App = () => {
  return (
    <div className="bg-[#111827] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} mb-6`}>
        <div className={`${styles.boxWidth} z-40`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  );
};

export default App