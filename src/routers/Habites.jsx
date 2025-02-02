import { motion } from "framer-motion";
import atom from "../assets/icons/lucide--atom.svg";
import PageHeading from "../components/PageHeading";

const Habites = () => {
  return (
    <motion.div
    className="rightSide"
    intial={{ opacity: 0 }}
    animate={{ opacity: "100%" }}
    exit={{ opacity: 0 , transition:{duration:0.2, ease:"easeIn"} }}
    >
       <PageHeading src={atom} alt="Habites" heading="Habites Page" />
    </motion.div>
  );
};

export default Habites;
