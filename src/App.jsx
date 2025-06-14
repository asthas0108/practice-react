import { useState } from "react";
import Modal from "./components/Modal";
import TooltipButton from "./components/TooltipButton";
import ThemeToggle from "./components/ThemeToggle";
import CustomDropdown from "./components/CustomDropdown";
import MultiStepForm from "./components/MultiStepForm";
import KanbanBoard from "./components/KanbanBoard";



import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components2/ProtectedRoute';
import Navbar from './components2/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    // <div className="min-h-screen px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    //   <h1 className="text-3xl font-bold mb-6">MERN UI Practice Components</h1>

    //   <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-8">
    //   <h1 className="text-2xl font-bold">React Modal + Tooltip Demo</h1>

    //   {/* Tooltip */}
    //   <TooltipButton />

    //   {/* Modal Trigger */}
    //   <button
    //     onClick={() => setShowModal(true)}
    //     className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    //   >
    //     Open Modal
    //   </button>

    //   {/* Modal */}
    //   <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
    //     <h2 className="text-xl font-bold mb-4">Hello Modal</h2>
    //     <p>This modal can be closed by clicking outside or pressing ESC.</p>
    //   </Modal>
    // </div>

    //   {/* Theme Toggle */}
    //   <section className="mb-10">
    //     <h2 className="text-xl font-semibold mb-2">🌗 Theme Toggle</h2>
    //     <ThemeToggle />
    //   </section>

    //   {/* Custom Dropdown */}
    //   <section className="mb-10">
    //     <h2 className="text-xl font-semibold mb-2">📍 Custom Dropdown</h2>
    //     <CustomDropdown />
    //   </section>

    //   {/* Multi Step Form */}
    //   <section className="mb-10">
    //     <h2 className="text-xl font-semibold mb-2">📝 Multi-Step Form</h2>
    //     <MultiStepForm />
    //   </section>

    //   {/* Kanban Board */}
    //   <section>
    //     <h2 className="text-xl font-semibold mb-2">🗂️ Kanban Board (Drag & Drop)</h2>
    //     <KanbanBoard />
    //   </section>
    // </div>

    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<div>Loading....</div>}>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }/>

            <Route path="*" element={<NotFound/>}/>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;