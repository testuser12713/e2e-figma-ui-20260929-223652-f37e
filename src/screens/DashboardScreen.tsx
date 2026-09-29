import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spacing, typography } from '../theme';

const DashboardScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [toggled, setToggled] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.space4 }]}>
      <Text style={styles.title}>Dashboard</Text>
      <Pressable
        accessibilityRole="button"
        testID="dashboard-demo-button"
        onPress={() => setToggled((prev) => !prev)}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          {toggled ? 'Toggled on' : 'Tap to toggle'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.space4,
  },
  title: {
    ...typography.text24,
    color: colors.fg,
  },
  button: {
    marginTop: spacing.space4,
    backgroundColor: colors.accent,
    borderRadius: 5,
    minHeight: 44,
    paddingHorizontal: spacing.space4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    ...typography.text16Alt,
    color: colors.onAccent,
  },
});

export default DashboardScreen;
