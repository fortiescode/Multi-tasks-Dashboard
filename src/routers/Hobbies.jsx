import { motion } from "framer-motion";
import hobbies from "../assets/icons/lucide--camera.svg";
import Separator from "../components/Separator";
function Hobbies() {
  return (
    <motion.div
      className="rightSide"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <div className="flex justify-start gap-2 ">
         <img src={hobbies} className={`w-8 h-auto opacity-60`} alt="hobbies" />
        <h1 className="font-lato font-semibold text-4xl text-heading1">
          Hobbies Page
        </h1>
      </div>
      <Separator/>
    </motion.div>
  );
}

export default Hobbies;
