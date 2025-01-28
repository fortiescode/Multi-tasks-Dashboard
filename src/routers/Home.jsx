import { motion } from "framer-motion";
import home from "../assets/icons/home.svg";
import Button from "../components/Button";

const Home = () => {
  return (
    <motion.div
      className="rightSide  mr-auto"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <div className="flex justify-start gap-2 ">
        <img src={home} className={`w-10 h-auto opacity-90`} alt="home" />
        <h1 className="font-lato font-semibold text-4xl text-heading1">Home</h1>
      </div>
      <hr className="h-1 rounded bg-slate-300 mt-1" />
      <div className=" flex mt-4 ml-4 border border-slate-500 max-w-[34rem] py-3 px-4 rounded-md bg-neutral-200/50">
        <div>
          <h3 className="m-0 leading-5 pb-2 font-lato font-semibold text-xl text-neutral-600">
            The day Quote
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            ratione!
          </p>
        </div>
        <div className="mt-auto">
          <Button text="Next" Secondary />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
