import { Hero, About, Contact } from "../../components";
import styles from '../../style'; 

const Home = () => {
  return (
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
            <About />
            <Contact />
          </div>
        </div>
  );
}

export default Home
