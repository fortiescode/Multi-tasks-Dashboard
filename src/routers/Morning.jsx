import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import coffee from "../assets/icons/lucide--coffee.svg";

function Morning() {
  return (
    <motion.div
    className="rightSide"
    intial={{ opacity: 0 }}
    animate={{ opacity: "100%" }}
    exit={{ opacity: 0 , transition:{duration:0.2, ease:"easeIn"} }}
      
    >
      <PageHeading src={coffee} alt="coffee" heading="Morning Page" />
    </motion.div>
  );
}

export default Morning;
