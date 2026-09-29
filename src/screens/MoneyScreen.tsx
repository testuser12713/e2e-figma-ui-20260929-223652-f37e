import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { transactions } from '../data/transactions';
import { colors, fontFamily, radii, spacing, typography } from '../theme';
import type { Transaction } from '../types';

const TRANSACTION_ILLUSTRATIONS = [
  require('../../design/figma/assets/illustration-53x53.png'),
  require('../../design/figma/assets/illustration-53x53-2.png'),
  require('../../design/figma/assets/illustration-53x53-3.png'),
  require('../../design/figma/assets/illustration-53x53-4.png'),
];

const formatAmount = (amount: number, currency: string): string =>
  `${amount.toFixed(2)}${currency}`;

type TransactionRowProps = {
  transaction: Transaction;
  index: number;
};

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, index }) => {
  const illustration =
    TRANSACTION_ILLUSTRATIONS[index % TRANSACTION_ILLUSTRATIONS.length];

  return (
    <View style={styles.row} testID={`transaction-${transaction.id}`}>
      <View style={styles.rowIcon}>
        <Image source={illustration} style={styles.rowIconImage} />
      </View>
      <View style={styles.rowBody}>
        <Text style={styles.rowCategory}>{transaction.category}</Text>
        <Text style={styles.rowTitle}>{transaction.title}</Text>
        <Text style={styles.rowDate}>{transaction.date}</Text>
      </View>
      <Text style={styles.rowAmount}>
        {formatAmount(transaction.amount, transaction.currency)}
      </Text>
    </View>
  );
};

const MoneyScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topSection}>
          <View style={styles.hero}>
            <Image
              source={require('../../design/figma/assets/illustration-525x387.png')}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View
              style={[
                styles.heroHeader,
                { paddingTop: insets.top + spacing.space2 },
              ]}
            >
              <Image
                source={require('../../design/figma/assets/noun-back-1227057.png')}
                style={styles.backChevron}
              />
              <Image
                source={require('../../design/figma/assets/noun-user-1335326.png')}
                style={styles.userIcon}
              />
            </View>
          </View>
          <View style={styles.summary}>
            <Text style={styles.summaryLabel}>Monthly Expenses</Text>
            <Text style={styles.summaryAmount}>1,345.00€</Text>
          </View>
        </View>

        <View style={styles.list}>
          {transactions.map((transaction, index) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.fabWrap} pointerEvents="box-none">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Add transaction"
            testID="add-transaction-button"
            onPress={() => {}}
            style={styles.fab}
          >
            <LinearGradient
              colors={[colors.accent, colors.accentDark]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.fabGradient}
            >
              <View style={styles.fabPlus}>
                <View style={styles.fabPlusVertical} />
                <View style={styles.fabPlusHorizontal} />
              </View>
            </LinearGradient>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.space6,
  },
  topSection: {
    backgroundColor: colors.surface,
  },
  hero: {
    height: 313,
    overflow: 'hidden',
    backgroundColor: colors.surface,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.space5,
  },
  backChevron: {
    width: 11,
    height: 18,
  },
  userIcon: {
    width: 27,
    height: 27,
  },
  summary: {
    paddingHorizontal: spacing.space5,
    paddingTop: spacing.space4,
    paddingBottom: spacing.space4,
  },
  summaryLabel: {
    ...typography.text12,
    color: colors.black,
  },
  summaryAmount: {
    fontFamily: fontFamily.body,
    fontWeight: '500',
    fontSize: 45,
    lineHeight: 57,
    color: colors.black,
    marginTop: spacing.space1,
  },
  list: {
    paddingHorizontal: spacing.space5,
    paddingTop: spacing.space4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  rowIcon: {
    width: 53,
    height: 53,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  rowIconImage: {
    width: 53,
    height: 53,
  },
  rowBody: {
    flex: 1,
    marginLeft: spacing.space3,
  },
  rowCategory: {
    ...typography.text9,
    letterSpacing: 1.8,
    color: colors.black,
  },
  rowTitle: {
    fontFamily: fontFamily.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    color: colors.black,
  },
  rowDate: {
    ...typography.text9,
    color: colors.black,
  },
  rowAmount: {
    fontFamily: fontFamily.body,
    fontWeight: '100',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
  },
  fabWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: spacing.space4,
    alignItems: 'center',
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: radii.pill,
    borderWidth: 4,
    borderColor: colors.surface,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 40,
    elevation: 8,
  },
  fabGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabPlus: {
    width: 20,
    height: 20,
  },
  fabPlusVertical: {
    position: 'absolute',
    top: 0,
    left: 8.5,
    width: 3,
    height: 20,
    backgroundColor: colors.onAccent,
  },
  fabPlusHorizontal: {
    position: 'absolute',
    top: 8.5,
    left: 0,
    width: 20,
    height: 3,
    backgroundColor: colors.onAccent,
  },
});

export default MoneyScreen;
