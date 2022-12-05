import './App.css';
import MicroFrontend from './MicroFrontend';


const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);
const Restaurant = ({ history }) => (
  <MicroFrontend history={history} host={restaurantHost} name="Restaurant" />
);

function App() {
  return (
    <div className="App">
      <Browse/>
      <Restaurant/>
    </div>
  );
}

export default App;
