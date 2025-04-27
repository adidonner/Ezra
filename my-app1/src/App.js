import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryPage from './CountryPage'; // או הנתיב הנכון שלך
import HomePage from './HomePage'; // דף הבית למשל

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
