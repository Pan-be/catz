import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cats from "./components/Cats";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import { UserProvider } from './state/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App: React.FC = () => {

  return (
    <UserProvider>
      <Router>
        <main className="flex flex-col w-[100vw] max-w-[1000px] items-center gap-[20px]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Cats />} />
            <Route path="/cats" element={<Cats />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
          <Counter />
        </main>
      </Router>
    </UserProvider>
  )
}

export default App
