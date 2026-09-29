import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import MoneyScreen from '../screens/MoneyScreen';
import TimeScreen from '../screens/TimeScreen';
import { colors, fontFamily } from '../theme';

export type RootTabParamList = {
  Dashboard: undefined;
  Money: undefined;
  Time: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_ICONS: Record<
  keyof RootTabParamList,
  { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }
> = {
  Dashboard: { active: 'home', inactive: 'home-outline' },
  Money: { active: 'wallet', inactive: 'wallet-outline' },
  Time: { active: 'time', inactive: 'time-outline' },
};

const TAB_LABELS: Record<keyof RootTabParamList, string> = {
  Dashboard: 'Dashboard',
  Money: 'Money',
  Time: 'Time',
};

export default function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.tabInactive,
            tabBarLabelStyle: {
              fontFamily: fontFamily.heading,
              fontWeight: '700',
              fontSize: 7,
              lineHeight: 5,
            },
            tabBarStyle: {
              backgroundColor: colors.surface,
              borderTopWidth: 0,
            },
            tabBarIcon: ({ focused, color, size }) => {
              const icons = TAB_ICONS[route.name];
              return (
                <Ionicons
                  name={focused ? icons.active : icons.inactive}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ title: TAB_LABELS.Dashboard }}
          />
          <Tab.Screen
            name="Money"
            component={MoneyScreen}
            options={{ title: TAB_LABELS.Money }}
          />
          <Tab.Screen
            name="Time"
            component={TimeScreen}
            options={{ title: TAB_LABELS.Time }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
