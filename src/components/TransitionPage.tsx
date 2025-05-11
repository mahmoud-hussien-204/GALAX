import {motion} from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

const TransitionPage = ({children}: IProps) => {
  return (
    <motion.div
      // ********8 opacity transition
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}

      // ********* slid up and fade transition
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 50, opacity: 0 }}
      // transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPage;
