import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-xl w-[90%] max-w-4xl aspect-video overflow-hidden shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Hgf4VzOeMmI?si=V8iBE3-18H5Cqbcu&autoplay=1"
              title="IELTS Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />

            <button
              className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100"
              onClick={onClose}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
