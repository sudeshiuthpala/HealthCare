import {createStackNavigator,createAppContainer} from 'react-navigation';

import Splash from './Splash';
import Home from './Home';

const App=createStackNavigator({
  Splash: {screen: Splash,navigationOptions:{header: null}},
  Home: {screen: Home, navigationOptions: {header: null}}
});

export default createAppContainer(App);

