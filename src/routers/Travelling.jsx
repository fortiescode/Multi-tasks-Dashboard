import { motion } from "framer-motion";
import baggage from "../assets/icons/lucide--baggage-claim.svg";
import PageHeading from "../components/PageHeading";
const Travelling = () => {
  return (
    <motion.div
      className="rightSide"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <PageHeading src={baggage} alt="baggage" heading="Travelling Page" />
    </motion.div>
  );
};

export default Travelling;
