import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spacing, typography } from '../theme';

const MoneyScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.space4 }]}>
      <Text style={styles.title}>Money Management</Text>
      <Text style={styles.placeholder}>Transactions will appear here.</Text>
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
  placeholder: {
    ...typography.text15,
    color: colors.muted,
    marginTop: spacing.space2,
  },
});

export default MoneyScreen;
