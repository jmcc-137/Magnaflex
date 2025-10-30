import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, navbarLinks, setOpen }) => {
  const menuAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-black/90 flex flex-col justify-center items-center"
        >
          {/* Espacio superior para el menú hamburguesa */}
          <div className="absolute top-0 left-0 w-full h-25 bg-black/80 flex items-center justify-end px-8">
            <button
              className="text-white text-4xl"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <MdClose />
            </button>
          </div>
          <div className="text-xl font-semibold uppercase bg-red-800 text-white py-8 px-8 rounded-3xl shadow-lg">
            <ul className="flex flex-col justify-center items-center gap-10">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={item.link}
                    className= " transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                  
                  </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
