import React from 'react';
import './PeruPage.css'; // ייבוא קובץ ה-CSS

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
        <li>Orar para que la iglesia ghanesa desarrolle una visión misionera para las aldeas no alcanzadas del norte y más allá.</li>
        <li>Orar para que aquellos que afirman ser cristianos pero que no tienen una fe auténtica sean transformados por el poder del verdadero evangelio.</li>
        <li>Orar para que la rápida propagación del Islam sea frustrada.</li>
      </ul>
    </div>
  );
}

function Flag() {
  return (
    <div className="flag-container">
      <img src="https://flagcdn.com/pe.svg" alt="Bandera de Peru" className="country-flag" />
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
          src="https://www.youtube.com/embed/XoSCUCIVWmI"
          title="[Prayer24·365] Pray for Peru- Prayercast"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-link">
        <a href="https://prayercast.com/prayer-topic/peru/" target="_blank">
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
      <a href="https://joshuaproject.net/countries/PE?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=iw&_x_tr_pto=wapp" className="link-button" target="_blank">
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
      <h1>PERU</h1>
      <Flag />
      <Video />
    </div>
  );
}

function PeruPage() {
  return (
    <div style={{ display: 'flex' }}>
      <PrayerList />
      <MainContent />
      <ImportantInformation />
    </div>
  );
}

export default PeruPage;