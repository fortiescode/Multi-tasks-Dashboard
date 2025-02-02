import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import bell from "../assets/icons/lucide--bell.svg";

function Notification() {
  return (
    <motion.div
    className="rightSide"
    intial={{ opacity: 0 }}
    animate={{ opacity: "100%" }}
    exit={{ opacity: 0 , transition:{duration:0.2, ease:"easeIn"} }}
      
   
    >
     <PageHeading src={bell} alt="Notification" heading="Notification Page" />
    </motion.div>
  );
}

export default Notification;
