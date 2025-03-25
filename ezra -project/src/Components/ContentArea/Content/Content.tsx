import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import Ghana from '../Countries/Ghana/Ghana.tsx'; // ייבוא הקומפוננטות
// import Venezuela from '../Countries/Venezuela/Venezuela.tsx'; // ייבוא הקומפוננטות
// import Peru from '../Countries/Peru/Peru.tsx';
// import Colombia from '../Countries/Colombia/Colombia.tsx';
// import Aruba from '../Countries/Aruba/Aruba.tsx';
// import Us from '../Countries/Miami/Miami.tsx';
// import India from '../Countries/India/India.tsx';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <div className="image-with-countries">
        <div className="countries-container">
          <div className="country-item country-item-1">
            <Link to="/ghana">
              <img src="https://flagcdn.com/gh.svg" alt="Ghana Flag" className="country-flag" />
              <div className="country-info">Ghana, Accra</div>
            </Link>
          </div>
          <div className="country-item country-item-2">
            <Link to="/venezuela">
              <img src="https://flagcdn.com/ve.svg" alt="Venezuela Flag" className="country-flag" />
              <div className="country-info">Venezuela, Caracas</div>
            </Link>
          </div>
          <div className="country-item country-item-3">
            <Link to="/peru">
              <img src="https://flagcdn.com/pe.svg" alt="Peru Flag" className="country-flag" />
              <div className="country-info">Peru, Lima</div>
            </Link>
          </div>
          <div className="country-item country-item-4">
            <Link to="/colombia">
              <img src="https://flagcdn.com/co.svg" alt="Colombia Flag" className="country-flag" />
              <div className="country-info">Colombia, Cartagena</div>
            </Link>
          </div>
          <div className="country-item country-item-5">
            <Link to="/aruba">
              <img src="https://flagcdn.com/aw.svg" alt="Aruba Flag" className="country-flag" />
              <div className="country-info">Aruba, Oranjestad</div>
            </Link>
          </div>
          <div className="country-item country-item-6">
            <Link to="/us">
              <img src="https://flagcdn.com/us.svg" alt="United States Flag" className="country-flag" />
              <div className="country-info">Miami, Florida</div>
            </Link>
          </div>
          <div className="country-item country-item-7">
            <Link to="/india">
              <img src="https://flagcdn.com/in.svg" alt="India Flag" className="country-flag" />
              <div className="country-info">India, Kerala</div>
            </Link>
          </div>
        </div>
        <img src="central image.png" alt="CentralImage" className="center-image" />
      </div>
      {/* <Routes>
        <Route path="/ghana" element={<Ghana/>} />
        <Route path="/venezuela" element={<Venezuela />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/colombia" element={<Colombia />} />
        <Route path="/aruba" element={<Aruba />} />
        <Route path="/us" element={<Us />} />
        <Route path="/india" element={<India />} />
      </Routes> */}
    </div>
  );
}

export default Content;