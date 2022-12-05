import './App.css';
import MicroFrontend from './MicroFrontend';


const {
  REACT_APP_WIDGET_HOST: widgetHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

const Widget = () => {
  console.log(widgetHost)
  return <MicroFrontend host={widgetHost} name="Widget" />
};
// const Restaurant = ({ history }) => (
//   <MicroFrontend history={history} host={restaurantHost} name="Restaurant" />
// );

function App() {
  return (
    <div className="App">
      <Widget/>
    </div>
  );
}

export default App;
