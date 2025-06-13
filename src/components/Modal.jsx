import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, children }) {
    const modalRef = useRef();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
        }
    };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClickOutside}>
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md relative"
        role="dialog"
        aria-modal="true">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-red-500"
          onClick={onClose}
          aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
