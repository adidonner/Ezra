import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <div className="image-with-countries">
        <div className="countries-container">
          <div className="country-item country-item-1">
            <img src="https://flagcdn.com/gh.svg" alt="Ghana Flag" className="country-flag" />
            <div className="country-info">Ghana, Accra</div>
          </div>
          <div className="country-item country-item-2">
            <img src="https://flagcdn.com/ve.svg" alt="Venezuela Flag" className="country-flag" />
            <div className="country-info">Venezuela, Caracas</div>
          </div>
          <div className="country-item country-item-3">
            <img src="https://flagcdn.com/pe.svg" alt="Peru Flag" className="country-flag" />
            <div className="country-info">Peru, Lima</div>
          </div>
          <div className="country-item country-item-4">
            <img src="https://flagcdn.com/co.svg" alt="Colombia Flag" className="country-flag" />
            <div className="country-info">Colombia, Cartagena</div>
          </div>
          <div className="country-item country-item-5">
            <img src="https://flagcdn.com/aw.svg" alt="Aruba Flag" className="country-flag" />
            <div className="country-info">Aruba, Oranjestad</div>
          </div>
          <div className="country-item country-item-6">
            <img src="https://flagcdn.com/us.svg" alt="United States Flag" className="country-flag" />
            <div className="country-info">Miami, Florida</div>
          </div>
          <div className="country-item country-item-7">
            <img src="https://flagcdn.com/in.svg" alt="India Flag" className="country-flag" />
            <div className="country-info">India, Kerala</div>
          </div>
        </div>
        <img src="central image.png" alt="CentralImage" className="center-image" />
      </div>
    </div>
  );
}

export default Content;