import { motion } from "framer-motion";
function Hobbies() {
  return (
    <motion.div
    className="rightSide"
    intial={{ opacity: 0 }}
    animate={{ opacity: "100%" }}
    exit={{ opacity: 0 , transition:{duration:0.2, ease:"easeIn"} }}
      
      
    >
      <h1 className="font-lato font-semibold text-4xl text-heading1">
        Hobbies Page
      </h1>
    </motion.div>
  );
}

export default Hobbies;
