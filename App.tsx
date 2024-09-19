import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { HomeScreen } from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Colors from './constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function App() {
  const colorScheme: 'light' | 'dark' = useColorScheme() ?? 'light';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
