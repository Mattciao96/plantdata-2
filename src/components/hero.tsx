// a hero with a title and a subtitle and image on the right
import { motion } from "framer-motion";
export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-80 flex justify-evenly">
      <div className="mt-20">{children}</div>
      <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1, x: 10 }}
            animate={{ x: 200 }}
            transition={{ duration: 2 }}
      >
        <img className="max-w-md" src="plantrm.png" alt="hero"></img>
          </motion.div>
      
    </div>
  );
}
