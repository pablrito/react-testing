import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/search" caseSensitive={false} element={<Search/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
