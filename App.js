import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/home/Home';
import PointingCompass from './components/pointingCompass/PointingCompass';
import FindingSattelite from './components/findingSattelite/FindingSattelite';
import FoundSattelite from './components/foundSattelite/FoundSattelite';
import PointingInfo from './components/pointingInfo/PointingInfo';
import Pitch from './components/pitch/Pitch';
import Congratulations from './components/congratulations/Congratulations';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  FoundSattelite: { screen: FoundSattelite },
  PointingCompass: { screen: PointingCompass },
  PointingInfo: { screen: PointingInfo },
  FindingSattelite: { screen: FindingSattelite },
  Pitch: { screen: Pitch },
  Congratulations: { screen: Congratulations },
});

const App = createAppContainer(MainNavigator);

export default App;