
import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import setting from "../assets/icons/setting.svg";

function Setting() {
  return (
    <motion.div
    className="rightSide"
    intial={{ opacity: 0 }}
    animate={{ opacity: "100%" }}
    exit={{ opacity: 0 , transition:{duration:0.2, ease:"easeIn"} }}
      
      
    >
      <PageHeading src={setting} alt="setting" heading="setting Page" />

    </motion.div>
  );
}

export default Setting;
