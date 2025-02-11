import { motion } from "framer-motion";
import Separator from "../components/Separator";

function Work() {
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

export default Work;
