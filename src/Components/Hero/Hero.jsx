import styles from "./Hero.module.css";
import { disney } from "../../shared/images";

const Hero = () => {
  return (
    <header
      className={`${styles.hero} w-full h-screen flex items-center justify-center relative`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-0"></div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-1/2  z-20 text-white text-center w-full">
        <img className="w-50 md:w-80" src={disney} alt="disney_logo" />
        <h1 className="text-2xl md:text-4xl">
          Unlimited movies, TV shows, and more
        </h1>
        <h4 className="md:text-2xl">Watch anywhere. Cancel anytime.</h4>
      </div>
    </header>
  );
};

export default Hero;
