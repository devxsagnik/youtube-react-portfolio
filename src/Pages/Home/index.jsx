import { Hero, About, Contact } from "../../components";
import styles from '../../style'; 

const Home = () => {
  return (
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
            <About />
            <Contact />
          </div>
        </div>
  );
}

export default Home
