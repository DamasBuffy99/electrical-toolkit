import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoadEstimationScreen from './src/screens/LoadEstimationScreen';
import DemandDiversityScreen from './src/screens/DemandDiversityScreen';
import TransformerGeneratorScreen from './src/screens/TransformerGeneratorScreen';
import LightingScreen from './src/screens/LightingScreen';
import PanelScheduleScreen from './src/screens/PanelScheduleScreen';
import CircuitBreakerScreen from './src/screens/CircuitBreakerScreen';
import HeatLoadScreen from './src/screens/HeatLoadScreen';
import NotesHomeScreen from './src/screens/notes/NotesHomeScreen';
import CourseHomeScreen from './src/screens/notes/CourseHomeScreen';
import LessonView from './src/components/notes/LessonView';
import { getTopicContent } from './src/content/registry';
import { getSolarTopicContent } from './src/content/solarRegistry';
import { getClimTopicContent } from './src/content/climRegistry';
import { CLIM_FLAT_LESSONS, CLIM_SECTIONS } from './src/content/climCourse';
import { FLAT_LESSONS } from './src/content/course';
import { SOLAR_NOTES_TOPICS } from './src/data/solarNotesTopics';
import { colors, radius, spacing } from './src/theme/theme';
import { LanguageProvider, useLanguage } from './src/lib/language';

const CALC_TABS = [
  { key: 'load', icon: '📐', label: 'Estimation', labelEn: 'Estimation', Component: LoadEstimationScreen },
  { key: 'demand', icon: '⚖️', label: 'Demande & Diversité', labelEn: 'Demand & Diversity', Component: DemandDiversityScreen },
  { key: 'transfo', icon: '🔌', label: 'Transfo & Groupe', labelEn: 'Transformer & Genset', Component: TransformerGeneratorScreen },
  { key: 'lighting', icon: '💡', label: 'Éclairage', labelEn: 'Lighting', Component: LightingScreen },
  { key: 'panel', icon: '🗂️', label: 'Panel Schedule', labelEn: 'Panel Schedule', Component: PanelScheduleScreen },
  { key: 'breaker', icon: '🛡️', label: 'Disjoncteurs', labelEn: 'Breakers', Component: CircuitBreakerScreen },
  { key: 'heatload', icon: '❄️', label: 'Bilan thermique clim', labelEn: 'AC heat load', Component: HeatLoadScreen },
] as const;

type AppMode = 'calculators' | 'notes' | 'solar' | 'clim';

function AppShell() {
  const [mode, setMode] = useState<AppMode>('calculators');
  const [activeCalc, setActiveCalc] = useState<(typeof CALC_TABS)[number]['key']>('load');
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [activeSolarTopicId, setActiveSolarTopicId] = useState<string | null>(null);
  const [activeClimId, setActiveClimId] = useState<string | null>(null);
  const { lang, toggle, t } = useLanguage();

  const ActiveCalcComponent = CALC_TABS.find((tab) => tab.key === activeCalc)!.Component;
  const activeTopicContent = activeTopicId ? getTopicContent(lang, activeTopicId) : undefined;
  const activeSolarTopicContent = activeSolarTopicId ? getSolarTopicContent(lang, activeSolarTopicId) : undefined;

  const availableLessons = FLAT_LESSONS.filter((l) => !!getTopicContent(lang, l.lesson.id));
  const lessonPos = availableLessons.findIndex((l) => l.lesson.id === activeTopicId);
  const currentLesson = lessonPos >= 0 ? availableLessons[lessonPos] : undefined;
  const prevLesson = lessonPos > 0 ? availableLessons[lessonPos - 1] : undefined;
  const nextLesson = lessonPos >= 0 ? availableLessons[lessonPos + 1] : undefined;
  const lessonTitle = (l: (typeof FLAT_LESSONS)[number]) => (lang === 'fr' ? l.lesson.title : l.lesson.titleEn);
  const lessonEyebrow = currentLesson
    ? `${currentLesson.section.id === 'appendix' ? t('Annexe', 'Appendix') : `${t('Section', 'Section')} ${currentLesson.sectionIndex + 1}`} · ${t('Leçon', 'Lesson')} ${currentLesson.number}`
    : undefined;

  const solarPos = SOLAR_NOTES_TOPICS.findIndex((s) => s.id === activeSolarTopicId);
  const prevSolar = solarPos > 0 ? SOLAR_NOTES_TOPICS[solarPos - 1] : undefined;
  const nextSolar = solarPos >= 0 ? SOLAR_NOTES_TOPICS[solarPos + 1] : undefined;

  const climContent = activeClimId ? getClimTopicContent(lang, activeClimId) : undefined;
  const climPos = CLIM_FLAT_LESSONS.findIndex((l) => l.lesson.id === activeClimId);
  const climCurrent = climPos >= 0 ? CLIM_FLAT_LESSONS[climPos] : undefined;
  const climPrev = climPos > 0 ? CLIM_FLAT_LESSONS[climPos - 1] : undefined;
  const climNext = climPos >= 0 ? CLIM_FLAT_LESSONS[climPos + 1] : undefined;
  const climEyebrow = climCurrent
    ? `${t('Climatisation', 'Air conditioning')} · ${t('Section', 'Section')} ${climCurrent.sectionIndex + 1} · ${t('Leçon', 'Lesson')} ${climCurrent.number}`
    : undefined;

  function selectMode(next: AppMode) {
    setMode(next);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.brand}>{t('⚡ Outils Électriques', '⚡ Electrical Tools')}</Text>
        <View style={styles.headerRight}>
          <View style={styles.modeSwitch}>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'calculators' && styles.modeButtonActive]}
              onPress={() => selectMode('calculators')}
            >
              <Text style={[styles.modeText, mode === 'calculators' && styles.modeTextActive]}>
                {t('🧮 Calculateurs', '🧮 Calculators')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'notes' && styles.modeButtonActive]}
              onPress={() => selectMode('notes')}
            >
              <Text style={[styles.modeText, mode === 'notes' && styles.modeTextActive]}>
                {t('📚 Notes de cours', '📚 Course Notes')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'solar' && styles.modeButtonActive]}
              onPress={() => selectMode('solar')}
            >
              <Text style={[styles.modeText, mode === 'solar' && styles.modeTextActive]}>
                {t('☀️ Solaire PV', '☀️ Solar PV')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'clim' && styles.modeButtonActive]}
              onPress={() => selectMode('clim')}
            >
              <Text style={[styles.modeText, mode === 'clim' && styles.modeTextActive]}>
                {t('❄️ Climatisation', '❄️ Air conditioning')}
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
        ) : mode === 'notes' ? (
          activeTopicContent && activeTopicId ? (
            <LessonView
              key={`${activeTopicId}-${lang}`}
              content={activeTopicContent}
              eyebrow={lessonEyebrow}
              backLabel={t('Parcours', 'Journey')}
              onBack={() => setActiveTopicId(null)}
              prev={prevLesson ? { title: lessonTitle(prevLesson), onPress: () => setActiveTopicId(prevLesson.lesson.id) } : undefined}
              next={
                nextLesson
                  ? {
                      title: lessonTitle(nextLesson),
                      transition: lang === 'fr' ? currentLesson?.lesson.transition : currentLesson?.lesson.transitionEn,
                      onPress: () => setActiveTopicId(nextLesson.lesson.id),
                    }
                  : undefined
              }
            />
          ) : (
            <CourseHomeScreen isAvailable={(id) => !!getTopicContent(lang, id)} onOpenLesson={setActiveTopicId} />
          )
        ) : mode === 'clim' ? (
          climContent && activeClimId ? (
            <LessonView
              key={`${activeClimId}-${lang}`}
              content={climContent}
              eyebrow={climEyebrow}
              backLabel={t('Parcours', 'Journey')}
              onBack={() => setActiveClimId(null)}
              prev={climPrev ? { title: lessonTitle(climPrev), onPress: () => setActiveClimId(climPrev.lesson.id) } : undefined}
              next={
                climNext
                  ? {
                      title: lessonTitle(climNext),
                      transition: lang === 'fr' ? climCurrent?.lesson.transition : climCurrent?.lesson.transitionEn,
                      onPress: () => setActiveClimId(climNext.lesson.id),
                    }
                  : undefined
              }
            />
          ) : (
            <CourseHomeScreen
              isAvailable={(id) => !!getClimTopicContent(lang, id)}
              onOpenLesson={setActiveClimId}
              sections={CLIM_SECTIONS}
              flat={CLIM_FLAT_LESSONS}
              title={['Climatisation en région tropicale', 'Air conditioning in tropical regions']}
              subtitle={[
                'Du confort au bilan thermique, du circuit frigorifique au dépannage, du split à la centrale à eau glacée : un parcours pensé pour débuter, d’après le guide IEPF « Efficacité énergétique de la climatisation en région tropicale » et le livre « ABC de la climatisation ».',
                'From comfort to the heat balance, from the refrigerant circuit to troubleshooting, from the split to the chilled-water plant: a beginner-friendly journey based on the IEPF guide “Energy efficiency of air conditioning in tropical regions” and the book “ABC de la climatisation”.',
              ]}
              hero={{ name: 'clim-heat-gains' }}
            />
          )
        ) : activeSolarTopicContent && activeSolarTopicId ? (
          <LessonView
            key={`${activeSolarTopicId}-${lang}`}
            content={activeSolarTopicContent}
            eyebrow={t('Solaire PV', 'Solar PV')}
            backLabel={t('Solaire PV', 'Solar PV')}
            onBack={() => setActiveSolarTopicId(null)}
            prev={prevSolar ? { title: lang === 'fr' ? prevSolar.title : prevSolar.titleEn, onPress: () => setActiveSolarTopicId(prevSolar.id) } : undefined}
            next={
              nextSolar
                ? {
                    title: lang === 'fr' ? nextSolar.title : nextSolar.titleEn,
                    transition: lang === 'fr' ? SOLAR_NOTES_TOPICS[solarPos].transition : SOLAR_NOTES_TOPICS[solarPos].transitionEn,
                    onPress: () => setActiveSolarTopicId(nextSolar.id),
                  }
                : undefined
            }
          />
        ) : (
          <NotesHomeScreen
            topics={SOLAR_NOTES_TOPICS}
            getContent={getSolarTopicContent}
            title="Solaire PV"
            titleEn="Solar PV"
            subtitle="Dimensionnement de systèmes photovoltaïques : charges, panneaux, batteries, régulateurs"
            subtitleEn="Sizing photovoltaic systems: loads, panels, batteries, controllers"
            onSelectTopic={setActiveSolarTopicId}
          />
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
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flexWrap: 'wrap' },
  modeSwitch: { flexDirection: 'row', backgroundColor: colors.bg, borderRadius: radius.pill, padding: 3, gap: 2, flexWrap: 'wrap' },
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
