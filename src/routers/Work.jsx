import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import briefcase from "../assets/icons/lucide--briefcase-business.svg";

function Work() {
  return (
    <motion.div
      className="rightSide"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <PageHeading src={briefcase} alt="briefcase" heading="Work Page" />
    </motion.div>
  );
}

export default Work;
