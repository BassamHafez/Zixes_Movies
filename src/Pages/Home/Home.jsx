import { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import { appStore, googlePlay, thrones } from "../../shared/images";
import AOS from 'aos';

const Home = () => {

  useEffect(() => {
    AOS.init({duration:2000})
   }, []);

  return (
    <>
      <Hero />
      <section className="grid md:grid-cols-2 gap-2 place-content-center p-10">
        <div data-aos="zoom-in-up">
          <img className="w-full" src={thrones} alt="game_of_thrones" />
        </div>

        <div className="flex flex-col justify-center items-center" data-aos="zoom-in-up">
          <div className="text-center">
            <h2 className="mb-10 text-4xl xl:text-6xl text-main">
              Watch everywhere.
            </h2>
            <h4 className="text-gray-400 text-lg xl:text-2xl mb-10">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h4>
          </div>
          <div className="flex justify-center flex-wrap">
            <img
              className="w-40 xl:w-60 mx-3 my-4 sm:my-0"
              src={appStore}
              alt="app_store"
            />
            <img
              className="w-40 xl:w-60 mx-3 my-4 sm:my-0"
              src={googlePlay}
              alt="google_play"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
