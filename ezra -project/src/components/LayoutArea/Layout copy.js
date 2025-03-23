import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import './Layout.css';

function Layout() {
  const countries = [
    { id: 1, name: "Ghana", city: "Accra", code: "GH" },
    { id: 2, name: "Venezuela", city: "Caracas", code: "VE" },
    { id: 3, name: "Peru", city: "Lima", code: "PE" },
    { id: 4, name: "Colombia", city: "Cartajena", code: "CO" },
    { id: 5, name: "Aruba", city: "Oranjestad", code: "AW" },
    { id: 6, name: "Miami", city: "Florida", code: "US" },
    { id: 7, name: "India", city: "Kerala", code: "IN" },
  ];

  return (
    <div className="Layout-container">
      <h1 className="Layout-title">Lets get started the Great Commission! </h1>
      <hr className="Layout-hr" />
      <div className="image-with-countries">
        <img
          src="/central image.png"
          alt="Central Image"
          className="center-image"
        />
        <div className="countries-container">
          {countries.map((d) => (
            <div key={d.id} className={`country-item country-item-${d.id}`}>
              <ReactCountryFlag countryCode={d.code} svg className="country-flag" />
              <div className="country-info">
                {d.name}, {d.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;