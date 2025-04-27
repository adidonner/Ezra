import { useParams } from 'react-router-dom';
import countriesData from './countriesData'; // קובץ המדינות
import React from 'react';

function CountryPage() {
  const { countryId } = useParams();

  const country = countriesData.find((c) => c.id === countryId);

  if (!country) {
    return <div>Country not found</div>;
  }

  // אם country.digitalMaterials הוא לא מערך, נהפוך אותו למערך
  const digitalMaterials = Array.isArray(country.digitalMaterials)
    ? country.digitalMaterials
    : [country.digitalMaterials]; // אם זה לא מערך, הופכים אותו למערך עם אלמנט אחד

  return (
    <div>
      <h1>{country.name}</h1>
      <p>{country.description}</p>

      {/* הצגה של prayerPoints */}
      <h2>Prayer Points</h2>
      <ul>
        {country.prayerPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* הצגה של digitalMaterials */}
      <h2>Digital Materials</h2>
      <ul>
        {digitalMaterials.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryPage;
