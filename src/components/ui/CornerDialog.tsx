import { motion, AnimatePresence } from 'framer-motion';

interface CornerDialogProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function CornerDialog({ children, onClick }: CornerDialogProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        className="fixed bottom-4 right-4 z-40"
      >
        <button
          onClick={onClick}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          {children}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}