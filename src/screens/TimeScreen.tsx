import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, radii, spacing, typography } from '../theme';
import { timeEntries } from '../data/timeEntries';
import { TimeEntry } from '../types';

const backIcon = require('../../design/figma/assets/noun-back-1227057.png');
const userIcon = require('../../design/figma/assets/noun-user-1335326.png');
const pencilIcon = require('../../design/figma/assets/noun-pencil-2174975.png');
const infoIcon = require('../../design/figma/assets/noun-info-1174604.png');

// DESIGN.md `--color-accent-translucent-85` (#6CC57CD9) has no token in
// src/theme.ts yet; derive it from the accent token to keep the 85% opacity
// of the "Overview" button from the Figma frame.
const accentTranslucent85 = `${colors.accent}D9`;

const TimeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + spacing.space4 },
        ]}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            testID="time-back-button"
            style={styles.backButton}
          >
            <Image
              source={backIcon}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Image source={userIcon} style={styles.userIcon} resizeMode="contain" />
        </View>

        <Text style={styles.title}>My Appointments</Text>

        <View style={styles.searchField}>
          <Text style={styles.searchPlaceholder}>Search</Text>
          <Ionicons name="search" size={16} color={colors.fgStrong} />
        </View>

        <View style={styles.tabs}>
          <View style={styles.tabsRow}>
            <Pressable accessibilityRole="tab" testID="time-tab-upcoming">
              <Text style={styles.tabActive}>Upcoming</Text>
            </Pressable>
            <Pressable accessibilityRole="tab" testID="time-tab-past">
              <Text style={styles.tabInactive}>Past</Text>
            </Pressable>
          </View>
          <View style={styles.tabActiveLine} />
          <View style={styles.tabBaseline} />
        </View>

        <View style={styles.list} testID="time-entries-list">
          {timeEntries.map((entry) => (
            <AppointmentRow key={entry.id} entry={entry} />
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          testID="time-add-appointment"
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonLabel}>Add a new appointment</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          testID="time-overview"
          style={[styles.primaryButton, styles.overviewButton]}
        >
          <Text style={styles.primaryButtonLabel}>Overview</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const AppointmentRow: React.FC<{ entry: TimeEntry }> = ({ entry }) => (
  <View style={styles.entry} testID={`time-entry-${entry.id}`}>
    <Text style={styles.entryDate}>{entry.date}</Text>
    <View style={styles.entryBody}>
      <View style={styles.entryTitleWrap}>
        <Text style={styles.entryTitle}>{entry.title}</Text>
        <Image
          source={infoIcon}
          style={styles.entryInfoIcon}
          resizeMode="contain"
        />
      </View>
      <Pressable
        accessibilityRole="button"
        testID={`time-modify-${entry.id}`}
        hitSlop={{ top: 13, bottom: 13, left: 8, right: 8 }}
        style={styles.entryModify}
      >
        <Image
          source={pencilIcon}
          style={styles.entryPencilIcon}
          resizeMode="contain"
        />
        <Text style={styles.entryModifyText}>Modify</Text>
      </Pressable>
    </View>
    <View style={styles.entryDivider} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.space5,
    paddingBottom: spacing.space5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 27,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backIcon: {
    width: 11,
    height: 18,
  },
  userIcon: {
    width: 27,
    height: 27,
  },
  title: {
    ...typography.text16,
    color: colors.fgStrong,
    marginTop: 28,
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 43,
    marginTop: 17,
    paddingHorizontal: spacing.space3,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  searchPlaceholder: {
    ...typography.text16Alt,
    color: colors.fgStrong,
    opacity: 0.2,
  },
  tabs: {
    marginTop: 35,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabActive: {
    ...typography.text16,
    color: colors.fg,
  },
  tabInactive: {
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  tabActiveLine: {
    width: 51,
    height: 2,
    marginTop: 16,
    backgroundColor: colors.fg,
  },
  tabBaseline: {
    height: 1,
    backgroundColor: colors.dividerHairline,
  },
  list: {
    marginTop: 12,
  },
  entry: {
    marginBottom: 15,
  },
  entryDate: {
    ...typography.text12Alt,
    lineHeight: 22,
    color: colors.fgStrong,
    opacity: 0.4,
  },
  entryBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  entryTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryTitle: {
    ...typography.text14,
    color: colors.fgStrong,
  },
  entryInfoIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
  },
  entryModify: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryPencilIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  entryModifyText: {
    ...typography.text14,
    color: colors.fg,
  },
  entryDivider: {
    height: 1,
    marginTop: 16,
    backgroundColor: colors.dividerHairline,
  },
  primaryButton: {
    minHeight: 44,
    marginTop: 32,
    borderRadius: radii.md,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  overviewButton: {
    backgroundColor: accentTranslucent85,
    marginTop: 24,
  },
  primaryButtonLabel: {
    ...typography.text16Alt,
    color: colors.onAccent,
  },
});

export default TimeScreen;
