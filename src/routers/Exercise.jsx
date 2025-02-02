import { motion } from "framer-motion";
import bike from "../assets/icons/lucide--bike.svg";

import PageHeading from "../components/PageHeading";
function Exercise() {
  return (
    <motion.div
      className="rightSide"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <PageHeading src={bike} alt="bike" heading="Exercise Page" />
    </motion.div>
  );
}

export default Exercise;
