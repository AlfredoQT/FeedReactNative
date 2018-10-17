import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import FeedScreen from './screens/FeedScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Tab1Stack = createStackNavigator({
  Main: FeedScreen,
  Details: UserDetailsScreen,
},{
  initialRouteName: 'Main',
});

export default createBottomTabNavigator(
  {
    Tab1: Tab1Stack
  }
);
