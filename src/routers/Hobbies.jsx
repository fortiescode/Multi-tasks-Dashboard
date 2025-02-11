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
     
      <Separator/>
    </motion.div>
  );
}

export default Hobbies;
