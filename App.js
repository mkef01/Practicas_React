import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title:'Restaurantes Locales'
  }
});

export default createAppContainer(navigator);

// Client ID kHqI9yBZaGkB8J_UAVjwMQ
//API Key wVQo_U121P-nCunVZKVTaqzERnX3_JsqIoxgiu9-Q5d3Gh32Uw7QWbDKvrEZD7T2TzPGYzNiKzkPV0j_wlWZ497uX0k4IWxxnGovHWECCViZxItYOd6I5y-Jw3PVXnYx