import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/routes";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
