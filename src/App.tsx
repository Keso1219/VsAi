import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryToolsPage from './pages/CategoryToolsPage';
import AllToolsPage from './pages/AllToolsPage';
import AboutPage from './pages/AboutPage';
import ToolDetailPage from './pages/ToolDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categorySlug" element={<CategoryToolsPage />} />
          <Route path="/tools" element={<AllToolsPage />} />
          <Route path="/tool/:toolSlug" element={<ToolDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;