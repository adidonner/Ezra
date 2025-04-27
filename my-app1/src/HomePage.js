import { Link } from 'react-router-dom';
import countriesData from './countriesData';

function HomePage() {
  return (
    <div>
      <h1>Choose a Country</h1>
      <ul>
        {countriesData.map((country) => (
          <li key={country.id}>
            <Link to={`/country/${country.id}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;