import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <div className="image-with-countries">
        <div className="countries-container">
          <div className="country-item country-item-1">
            <Link to="/ghana">
              <img src="https://flagcdn.com/gh.svg" alt="Ghana Flag"  className="country-flag" />
              <div className="country-info">Ghana, Accra</div>
            </Link>
          </div>
          {/* <div className="country-item country-item-1">
          <a href="https://joshuaproject.net/countries/GH" target="_blank" rel="noopener noreferrer">
            <img src="https://flagcdn.com/gh.svg" alt="Ghana Flag" className="country-flag" />
            <div className="country-info">Ghana, Accra</div>
          </a>
        </div> */}
          <div className="country-item country-item-2">
            <a href="https://joshuaproject.net/countries/VE" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/ve.svg" alt="Venezuela Flag" className="country-flag" />
              <div className="country-info">Venezuela, Caracas</div>
            </a>
          </div>
          <div className="country-item country-item-3">
            <a href="https://joshuaproject.net/countries/PE" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/pe.svg" alt="Peru Flag" className="country-flag" />
              <div className="country-info">Peru, Lima</div>
            </a>
          </div>
          <div className="country-item country-item-4">
            <a href="https://joshuaproject.net/countries/CO" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/co.svg" alt="Colombia Flag" className="country-flag" />
              <div className="country-info">Colombia, Cartagena</div>
            </a>
          </div>
          <div className="country-item country-item-5">
            <a href="https://joshuaproject.net/countries/AA" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/aw.svg" alt="Aruba Flag" className="country-flag" />
              <div className="country-info">Aruba, Oranjestad</div>
            </a>
          </div>
          <div className="country-item country-item-6">
            <a href="https://joshuaproject.net/people_groups/10291/US" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/us.svg" alt="United States Flag" className="country-flag" />
              <div className="country-info">Miami, Florida</div>
            </a>
          </div>
          <div className="country-item country-item-7">
            <a href="https://joshuaproject.net/countries/IN" target="_blank" rel="noopener noreferrer">
              <img src="https://flagcdn.com/in.svg" alt="India Flag" className="country-flag" />
              <div className="country-info">India, Kerala</div>
            </a>
          </div>
        </div>
        <img src="central image.png" alt="CentralImage" className="center-image" />
      </div>
    </div>
  );
}

export default Content;