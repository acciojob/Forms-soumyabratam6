// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form" id="form-link">Section 1 - Basic Form</Link>
            </li>
            <li>
              <Link to="/form-ref" id="form-ref-link">Section 2 - useRef Form</Link>
            </li>
            <li>
              <Link to="/form-state" id="form-state-link">Section 3 - useState Form</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
