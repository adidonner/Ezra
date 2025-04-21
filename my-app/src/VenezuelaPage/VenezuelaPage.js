import React from 'react';
import './VenezuelaPage.css'; // ייבוא קובץ ה-CSS

function PrayerList() {
  return (
    <div className="prayer-list">
      <div className="logo-container">
        <a href="../../index_es.html">
          <img src="/ezraLogo.jpg" alt="Logo" className="logo-fixed" />
        </a>
      </div>
      <br />
      <h2>Puntos de Oración</h2>
      <ul>
        <li>Oremos para que Cristo se revele a quienes están cegados por el espiritismo, el islam y otras religiones falsas.</li>
        <li>Oremos para que las 30 tribus amerindias sean transformadas por la Palabra de Dios a pesar de la oposición del gobierno.</li>
        <li>Oremos por soluciones a la inestabilidad económica y los altos índices de criminalidad.</li>
      </ul>
    </div>
  );
}

function Flag() {
  return (
    <div className="flag-container">
      <img src="https://flagcdn.com/ve.svg" alt="Bandera de Venezuela" className="country-flag" />
    </div>
  );
}

function Video() {
  return (
    <div className="video-wrapper">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/1lxJfVX3nVE"
          title="[Prayer24·365] Pray for Venezuela- Prayercast"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-link">
        <a href="https://prayercast.com/prayer-topic/venezuela/" target="_blank">
          Ir al sitio web
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}

function ImportantInformation() {
  return (
    <div className="right-sidebar">
      <h2>Información Importante</h2>
      <a href="https://joshuaproject-net.translate.goog/countries/VE?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=iw&_x_tr_pto=wapp" className="link-button" target="_blank">
        Pueblos,
        <br />
        Estados,
        <br />
        Comunidades,
        <br />
        Progreso,
        <br />
        Religiones,
        <br />
        Idiomas,
        <br />
        Ministerios
        <br />
        Detalles
      </a>
      <br />
      <h2>Materiales Digitales</h2>
      <a href="https://www.jesusfilm.org/watch?refinementList%5BlanguageEnglishName%5D%5B0%5D=English" className="link-button" target="_blank">
        Inglés
      </a>
      <a href="https://www.jesusfilm.org/watch?refinementList%5BlanguageEnglishName%5D%5B0%5D=Ewe" className="link-button" target="_blank">
        Ewe
      </a>
      <a href="https://www.jesusfilm.org/watch?refinementList%5BlanguageEnglishName%5D%5B0%5D=Gonja" className="link-button" target="_blank">
        Gonja
      </a>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="spanish-button-container">
        <a href="index_gh.html" className="spanish-button">
          Version in English
        </a>
      </div>
      <h1>Venezuela</h1>
      <Flag />
      <Video />
    </div>
  );
}

function VenezuelaPage() {
  return (
    <div style={{ display: 'flex' }}>
      <PrayerList />
      <MainContent />
      <ImportantInformation />
    </div>
  );
}

export default VenezuelaPage;