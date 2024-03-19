import React from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
 import PageNotFound from './Pages/PageNotfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/menu' element={<Menu />} /> {/* Changed path to '/menu' */}
            <Route path='*' element={<PageNotFound />} /> {/* Using '*' for a catch-all route */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

