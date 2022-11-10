import { Route, Routes, Link, useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import styles from "./style";
import { Home, About, Contact, Blog, Error } from "./Pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#111827] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} mb-6`}>
        <div className={`${styles.boxWidth} z-40`}>
          <Navbar />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> 
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
