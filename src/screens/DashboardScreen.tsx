import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dashboardData } from '../data/dashboardData';
import { colors, radii, spacing, typography } from '../theme';

const userIcon = require('../../design/figma/assets/noun-user-1335326.png');
const profileImage = require('../../design/figma/assets/profile-image.png');
const accountIcon = require('../../design/figma/assets/noun-user-1335326-19x19.png');
const helpIcon = require('../../design/figma/assets/noun-info-1174604-17x17.png');
const closeIcon = require('../../design/figma/assets/icon-13x13.png');

const DashboardScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.space4 }]}>
        <View style={styles.headerTopRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            testID="dashboard-menu-button"
            onPress={() => setMenuOpen(true)}
            style={styles.headerButton}
          >
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </Pressable>
          <Image
            source={userIcon}
            style={styles.headerUserIcon}
          />
        </View>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>{dashboardData.greeting}</Text>

        <View style={styles.searchField}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
            placeholderTextColor={colors.dividerHairline}
            accessibilityLabel="Search"
            testID="dashboard-search"
          />
          <View style={styles.searchIcon}>
            <View style={styles.searchLens} />
            <View style={styles.searchHandle} />
          </View>
        </View>

        <View style={styles.kpiList}>
          {dashboardData.kpis.map((kpi) => (
            <View key={kpi.label} style={styles.kpiCard}>
              <Text style={styles.kpiLabel}>{kpi.label}</Text>
              <View style={styles.kpiRow}>
                <Text style={styles.kpiValue}>{kpi.value}</Text>
                <View style={styles.trendBadge}>
                  <Text style={styles.trendText}>{kpi.trend}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.statsCard}>
          {dashboardData.stats.map((stat, index) => (
            <View
              key={stat.label}
              style={[styles.statRow, index > 0 && styles.statRowDivider]}
            >
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {menuOpen && (
        <View style={StyleSheet.absoluteFill}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close menu"
            testID="dashboard-menu-backdrop"
            onPress={() => setMenuOpen(false)}
            style={styles.backdrop}
          />
          <View style={styles.menuPanel}>
            <View style={styles.menuHeader}>
              <Image
                source={profileImage}
                style={styles.profileImage}
              />
              <View style={styles.menuProfileText}>
                <Text style={styles.menuProfileName}>Sophie Garnier</Text>
                <Text style={styles.menuProfileLocation}>Luxembourg</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close menu"
                testID="dashboard-menu-close"
                onPress={() => setMenuOpen(false)}
                style={styles.menuCloseButton}
              >
                <Image
                  source={closeIcon}
                  style={styles.menuCloseIcon}
                />
              </Pressable>
            </View>

            <View style={styles.menuItem}>
              <View style={styles.statisticsIcon}>
                <View style={[styles.statisticsBar, styles.statisticsBarSmall]} />
                <View style={[styles.statisticsBar, styles.statisticsBarLarge]} />
                <View style={[styles.statisticsBar, styles.statisticsBarMedium]} />
              </View>
              <Text style={styles.menuItemLabel}>Statistics</Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                source={accountIcon}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemLabel}>Account Settings</Text>
            </View>
            <View style={styles.menuItem}>
              <Image
                source={helpIcon}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemLabel}>Help</Text>
            </View>
            <View style={[styles.menuItem, styles.menuItemLogout]}>
              <View style={styles.logoutIcon}>
                <View style={styles.logoutArrow} />
                <View style={styles.logoutArrowHead} />
              </View>
              <Text style={styles.menuItemLabel}>Logout</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.space4,
    paddingBottom: spacing.space4,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginLeft: -spacing.space2,
  },
  menuLine: {
    width: 18,
    height: 2,
    borderRadius: radii.sm,
    backgroundColor: colors.onAccent,
    marginVertical: 2.5,
  },
  headerUserIcon: {
    width: 27,
    height: 27,
  },
  headerTitle: {
    ...typography.text24,
    color: colors.onAccent,
    marginTop: spacing.space1,
  },
  content: {
    paddingHorizontal: spacing.space5,
    paddingTop: spacing.space4,
    paddingBottom: spacing.space6,
  },
  greeting: {
    ...typography.text40,
    color: colors.fg,
    textAlign: 'center',
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    height: 43,
    paddingHorizontal: spacing.space3,
    marginTop: spacing.space4,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    ...typography.text16Alt,
    color: colors.fgStrong,
    paddingVertical: 0,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: spacing.space1,
  },
  searchLens: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 11,
    height: 11,
    borderRadius: radii.pill,
    borderWidth: 1.5,
    borderColor: colors.fgStrong,
  },
  searchHandle: {
    position: 'absolute',
    bottom: 2,
    right: 1,
    width: 6,
    height: 1.5,
    borderRadius: radii.pill,
    backgroundColor: colors.fgStrong,
    transform: [{ rotate: '45deg' }],
  },
  kpiList: {
    marginTop: spacing.space4,
    gap: spacing.space3,
  },
  kpiCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: spacing.space4,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  kpiLabel: {
    ...typography.label,
    color: colors.fgStrong,
  },
  kpiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.space1,
  },
  kpiValue: {
    ...typography.text25,
    color: colors.fgStrong,
  },
  trendBadge: {
    backgroundColor: colors.accent,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.space1,
    paddingVertical: 2,
    marginLeft: spacing.space2,
  },
  trendText: {
    ...typography.text10,
    color: colors.onAccent,
  },
  statsCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    paddingHorizontal: spacing.space4,
    marginTop: spacing.space4,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.space3,
  },
  statRowDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.dividerSoft,
  },
  statLabel: {
    ...typography.text14Alt,
    color: colors.fg,
  },
  statValue: {
    ...typography.text16,
    color: colors.fgStrong,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  menuPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 294,
    backgroundColor: colors.surface,
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.space4,
    paddingTop: spacing.space6,
    paddingBottom: spacing.space4,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: radii.card,
  },
  menuProfileText: {
    flex: 1,
    marginLeft: spacing.space1,
  },
  menuProfileName: {
    ...typography.text16,
    color: colors.fg,
  },
  menuProfileLocation: {
    ...typography.text14Alt,
    color: colors.fg,
    marginTop: 2,
  },
  menuCloseButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCloseIcon: {
    width: 13,
    height: 13,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.space4,
    paddingVertical: spacing.space2,
    marginTop: spacing.space4,
  },
  menuItemLabel: {
    ...typography.text14,
    color: colors.fg,
    opacity: 0.6,
    marginLeft: spacing.space3,
  },
  menuItemIcon: {
    width: 19,
    height: 19,
  },
  statisticsIcon: {
    width: 19,
    height: 18,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statisticsBar: {
    width: 4,
    backgroundColor: colors.fg,
    borderRadius: radii.sm,
  },
  statisticsBarSmall: {
    height: 8,
  },
  statisticsBarMedium: {
    height: 13,
  },
  statisticsBarLarge: {
    height: 18,
  },
  menuItemLogout: {
    marginTop: spacing.space5,
  },
  logoutIcon: {
    width: 20,
    height: 18,
    justifyContent: 'center',
  },
  logoutArrow: {
    width: 14,
    height: 2,
    borderRadius: radii.sm,
    backgroundColor: colors.fg,
  },
  logoutArrowHead: {
    position: 'absolute',
    right: 1,
    top: 5,
    width: 7,
    height: 7,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: colors.fg,
    transform: [{ rotate: '45deg' }],
  },
});

export default DashboardScreen;
