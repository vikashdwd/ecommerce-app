import { motion } from "framer-motion";

export default function dynButton()

{
    return (
    <motion.div
    className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}/>
    );
}