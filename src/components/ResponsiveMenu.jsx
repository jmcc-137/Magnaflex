import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, navbarLinks, setOpen, navOpacity = 0 }) => {
  const menuAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };

  const closeButtonAnimation = {
    initial: { rotate: 0, opacity: 0 },
    animate: { rotate: 360, opacity: 1 },
    exit: { rotate: 0, opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center"
            style={{ zIndex: 35 }}
          >
            <div className="text-xl font-semibold uppercase bg-red-800 text-white py-8 px-8 rounded-3xl shadow-lg">
              <ul className="flex flex-col justify-center items-center gap-10">
                {navbarLinks.map((item) => (
                  <li key={item.id}>
                    <Link 
                      to={item.link}
                      className="transition-colors duration-200 hover:text-yellow-300"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Botón de cerrar con animación - encima de TODO */}
          <motion.button
            {...closeButtonAnimation}
            className={`fixed top-6 right-6 text-4xl hover:scale-110 transition-all duration-200 ${navOpacity < 0.5 ? 'text-white' : 'text-black'}`}
            style={{ zIndex: 9999 }}
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <MdClose />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
