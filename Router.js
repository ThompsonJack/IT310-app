import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import SecondPage from './SecondPage';
import Confirmation from './Confirmation';
const Router = createStackNavigator(
  {
    App,
    SecondPage,
    Confirmation
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);
