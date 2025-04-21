import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import GhanaPage from './GhanaPage/GhanaPage'; // נתיב לקומפוננטה של גאנה
// יבא קומפוננטות עבור שאר המדינות כאן
import VenezuelaPage from './VenezuelaPage/VenezuelaPage';
// import MiamiPage from './MiamiPage';
// import ArubaPage from './ArubaPage';
// import ColombiaPage from './ColombiaPage';
import PeruPage from './PeruPage/PeruPage';
// import IndiaPage from './IndiaPage';
// import UruguayPage from './UruguayPage';

function App() {
  const countries = [
    { name: 'Ghana', path: '/ghana' },
    { name: 'Venezuela', path: '/venezuela' },
    // { name: 'Miami', path: '/miami' },
    // { name: 'Aruba', path: '/aruba' },
    // { name: 'Colombia', path: '/colombia' },
    { name: 'Peru', path: '/peru' },
    // { name: 'India', path: '/india' },
    // { name: 'Uruguay', path: '/uruguay' },
  ];

  return (
    <Router>
      <div>

        <Routes>
          <Route path="/ghana" element={<GhanaPage />} />
          {/* הוסף כאן Routes עבור שאר המדינות */}
          <Route path="/venezuela" element={<VenezuelaPage />} />
          <Route path="/peru" element={<PeruPage />} />
          {/* <Route path="/miami" element={<MiamiPage />} />
          <Route path="/aruba" element={<ArubaPage />} />
          <Route path="/colombia" element={<ColombiaPage />} />
          <Route path="/india" element={<IndiaPage />} />
          <Route path="/uruguay" element={<UruguayPage />} /> */}
        </Routes>
      </div>
          <nav>
            <ul className="country-list">
              {countries.map((country) => (
                <li key={country.name} className="country-item">
                  <Link to={country.path}>{country.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
    </Router>
  );
}

export default App;