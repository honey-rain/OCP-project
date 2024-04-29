import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout'
import AppRouter from './AppRouter'
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
