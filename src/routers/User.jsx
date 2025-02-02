import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";
import user from "../assets/icons/user.svg";
function User() {
  return (
    <motion.div
      className="rightSide"
      intial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
    >
      <PageHeading src={user} alt="user" heading="User Page" />
    </motion.div>
  );
}

export default User;
