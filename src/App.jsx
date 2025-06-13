import { useState } from "react";
import Modal from "./components/Modal";
import TooltipButton from "./components/TooltipButton";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-8">
      <h1 className="text-2xl font-bold">React Modal + Tooltip Demo</h1>

      {/* Tooltip */}
      <TooltipButton />

      {/* Modal Trigger */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4">Hello Modal</h2>
        <p>This modal can be closed by clicking outside or pressing ESC.</p>
      </Modal>
    </div>
  );
}
