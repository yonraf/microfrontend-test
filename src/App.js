import './App.css';
import MicroFrontend from './MicroFrontend';


const {
  REACT_APP_WIDGET_HOST: widgetHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

const Widget = () => {
  return <MicroFrontend host={widgetHost} />
};
// const Restaurant = ({ history }) => (
//   <MicroFrontend history={history} host={restaurantHost} name="Restaurant" />
// );

function App() {
  return (
    <div className="App">
    <Widget/>
      <Widget/>
      <Widget/>
    </div>
  );
}

export default App;
