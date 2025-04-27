import { useParams } from 'react-router-dom';
import countriesData from './countriesData'; // קובץ המדינות
import React from 'react';

function CountryPage() {
  const { countryId } = useParams();
  
  // חיפוש המדינה לפי מזהה
  const country = countriesData.find((c) => c.id === countryId);

  if (!country) {
    return <div>Country not found</div>;
  }

  // אם country.digitalMaterials הוא לא מערך, נהפוך אותו למערך
  const digitalMaterials = Array.isArray(country.digitalMaterials)
    ? country.digitalMaterials
    : [country.digitalMaterials]; // אם זה לא מערך, הופכים אותו למערך עם אלמנט אחד

  // פונקציה לקבלת המידע בשפה המתאימה
  const getLocalizedText = (key) => {
    // אם קיימת שפה עברית, הצג את המידע שלה, אחרת הצג את המידע באנגלית
    const userLang = navigator.language || 'en';
    const localizedData = country[userLang.toLowerCase()] || country;
    return localizedData[key] || country[key];
  };

  return (
    <div>
      <h1>{getLocalizedText('name')}</h1>
      <img src={country.flag} alt={`Flag of ${country.name}`} width="200" />
      
      {/* הצגת תיאור המדינה */}
      <p>{getLocalizedText('description') || country.information}</p>

      {/* הצגת וידאו */}
      <h2>Watch Video</h2>
      <iframe 
        width="560" 
        height="315" 
        src={country.video} 
        title={`Video about ${country.name}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>

      {/* הצגת Prayer Points */}
      <h2>Prayer Points</h2>
      <ul>
        {getLocalizedText('prayerPoints')?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* הצגת Digital Materials */}
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

      {/* קישורים למידע נוסף */}
      <h2>More Information</h2>
      <a href={country.information} target="_blank" rel="noopener noreferrer">
        {getLocalizedText('information')}
      </a>
    </div>
  );
}

export default CountryPage;
