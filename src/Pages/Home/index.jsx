import { Hero, About, Contact } from "../../components";
import styles from '../../style'; 
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100vh", opacity: 0 }}
      className={`${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <About />
        <Contact />
      </div>
    </motion.div>
  );
}

export default Home
