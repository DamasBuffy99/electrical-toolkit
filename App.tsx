import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoadEstimationScreen from './src/screens/LoadEstimationScreen';
import DemandDiversityScreen from './src/screens/DemandDiversityScreen';
import TransformerGeneratorScreen from './src/screens/TransformerGeneratorScreen';
import LightingScreen from './src/screens/LightingScreen';
import PanelScheduleScreen from './src/screens/PanelScheduleScreen';
import CircuitBreakerScreen from './src/screens/CircuitBreakerScreen';
import NotesHomeScreen from './src/screens/notes/NotesHomeScreen';
import NotesTopicScreen from './src/screens/notes/NotesTopicScreen';
import { getTopicContent } from './src/content/registry';
import { colors, radius, spacing } from './src/theme/theme';
import { LanguageProvider, useLanguage } from './src/lib/language';

const CALC_TABS = [
  { key: 'load', icon: '📐', label: 'Estimation', labelEn: 'Estimation', Component: LoadEstimationScreen },
  { key: 'demand', icon: '⚖️', label: 'Demande & Diversité', labelEn: 'Demand & Diversity', Component: DemandDiversityScreen },
  { key: 'transfo', icon: '🔌', label: 'Transfo & Groupe', labelEn: 'Transformer & Genset', Component: TransformerGeneratorScreen },
  { key: 'lighting', icon: '💡', label: 'Éclairage', labelEn: 'Lighting', Component: LightingScreen },
  { key: 'panel', icon: '🗂️', label: 'Panel Schedule', labelEn: 'Panel Schedule', Component: PanelScheduleScreen },
  { key: 'breaker', icon: '🛡️', label: 'Disjoncteurs', labelEn: 'Breakers', Component: CircuitBreakerScreen },
] as const;

type AppMode = 'calculators' | 'notes';

function AppShell() {
  const [mode, setMode] = useState<AppMode>('calculators');
  const [activeCalc, setActiveCalc] = useState<(typeof CALC_TABS)[number]['key']>('load');
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const { lang, toggle, t } = useLanguage();

  const ActiveCalcComponent = CALC_TABS.find((tab) => tab.key === activeCalc)!.Component;
  const activeTopicContent = activeTopicId ? getTopicContent(lang, activeTopicId) : undefined;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.brand}>{t('⚡ Outils Électriques', '⚡ Electrical Tools')}</Text>
        <View style={styles.headerRight}>
          <View style={styles.modeSwitch}>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'calculators' && styles.modeButtonActive]}
              onPress={() => setMode('calculators')}
            >
              <Text style={[styles.modeText, mode === 'calculators' && styles.modeTextActive]}>
                {t('🧮 Calculateurs', '🧮 Calculators')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'notes' && styles.modeButtonActive]}
              onPress={() => setMode('notes')}
            >
              <Text style={[styles.modeText, mode === 'notes' && styles.modeTextActive]}>
                {t('📚 Notes de cours', '📚 Course Notes')}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.langButton} onPress={toggle} accessibilityLabel="Toggle language">
            <Text style={styles.langText}>{lang === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {mode === 'calculators' && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabBar}
          contentContainerStyle={styles.tabBarContent}
        >
          {CALC_TABS.map((tab) => {
            const isActive = activeCalc === tab.key;
            return (
              <TouchableOpacity
                key={tab.key}
                style={[styles.tabButton, isActive && styles.tabButtonActive]}
                onPress={() => setActiveCalc(tab.key)}
              >
                <Text style={styles.tabIcon}>{tab.icon}</Text>
                <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                  {lang === 'fr' ? tab.label : tab.labelEn}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      <View style={styles.content}>
        {mode === 'calculators' ? (
          <ActiveCalcComponent />
        ) : activeTopicContent ? (
          <NotesTopicScreen content={activeTopicContent} onBack={() => setActiveTopicId(null)} />
        ) : (
          <NotesHomeScreen onSelectTopic={setActiveTopicId} />
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  brand: { fontSize: 15, fontWeight: '700', color: colors.text, letterSpacing: 0.2 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  modeSwitch: { flexDirection: 'row', backgroundColor: colors.bg, borderRadius: radius.pill, padding: 3, gap: 2 },
  modeButton: { paddingVertical: 6, paddingHorizontal: spacing.md, borderRadius: radius.pill },
  modeButtonActive: { backgroundColor: colors.accent },
  modeText: { fontSize: 12, fontWeight: '700', color: colors.textMuted },
  modeTextActive: { color: '#fff' },
  langButton: {
    paddingVertical: 6,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  langText: { fontSize: 12, fontWeight: '700', color: colors.text },
  tabBar: {
    flexGrow: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  tabBarContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    gap: spacing.xs,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
  },
  tabButtonActive: {
    backgroundColor: colors.accentSoft,
  },
  tabIcon: { fontSize: 14 },
  tabText: { fontSize: 13, color: colors.textMuted, fontWeight: '600' },
  tabTextActive: { color: colors.accent },
  content: { flex: 1, backgroundColor: colors.bg },
});
