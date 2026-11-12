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
import { STORY_FLAT_LESSONS, STORY_SECTIONS } from './src/content/storyCourse';
import { CLIM_STORY_FLAT_LESSONS, CLIM_STORY_SECTIONS } from './src/content/climStoryCourse';
import { getClimStoryContent } from './src/content/climStoryRegistry';
import { SOLAR_STORY_FLAT_LESSONS, SOLAR_STORY_SECTIONS } from './src/content/solarStoryCourse';
import { getSolarStoryContent } from './src/content/solarStoryRegistry';
import { getStoryContent } from './src/content/storyRegistry';
import { FicheProvider } from './src/components/notes/FicheContext';
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
  const [notesView, setNotesView] = useState<'story' | 'fiches'>('story');
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [ficheFromStory, setFicheFromStory] = useState(false);
  const [climView, setClimView] = useState<'story' | 'fiches'>('story');
  const [activeClimStoryId, setActiveClimStoryId] = useState<string | null>(null);
  const [climFicheFromStory, setClimFicheFromStory] = useState(false);
  const [solarView, setSolarView] = useState<'story' | 'fiches'>('story');
  const [activeSolarStoryId, setActiveSolarStoryId] = useState<string | null>(null);
  const [solarFicheFromStory, setSolarFicheFromStory] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const storyContent = activeStoryId ? getStoryContent(lang, activeStoryId) : undefined;
  const storyLessons = STORY_FLAT_LESSONS.filter((l) => !!getStoryContent(lang, l.lesson.id));
  const storyPos = storyLessons.findIndex((l) => l.lesson.id === activeStoryId);
  const storyCurrent = storyPos >= 0 ? storyLessons[storyPos] : undefined;
  const storyPrev = storyPos > 0 ? storyLessons[storyPos - 1] : undefined;
  const storyNext = storyPos >= 0 ? storyLessons[storyPos + 1] : undefined;
  const storyEyebrow = storyCurrent
    ? `${t('Projet', 'Project')} ${storyCurrent.sectionIndex + 1} · ${t('Étape', 'Step')} ${storyCurrent.number}`
    : undefined;

  const ficheNav = {
    open: (id: string) => {
      setActiveTopicId(id);
      setFicheFromStory(true);
    },
    title: (id: string) => {
      const l = FLAT_LESSONS.find((f) => f.lesson.id === id);
      return l ? (lang === 'fr' ? l.lesson.title : l.lesson.titleEn) : undefined;
    },
  };

  const notesSwitch = (
    <View style={styles.notesSwitch}>
      {(
        [
          ['story', t('📖 Le parcours en projets', '📖 The project journey')],
          ['fiches', t('📘 Fiches techniques', '📘 Reference sheets')],
        ] as const
      ).map(([key, label]) => (
        <TouchableOpacity
          key={key}
          style={[styles.notesSwitchButton, notesView === key && styles.notesSwitchActive]}
          onPress={() => setNotesView(key)}
        >
          <Text style={[styles.notesSwitchText, notesView === key && styles.notesSwitchTextActive]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

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

  const solarStoryContent = activeSolarStoryId ? getSolarStoryContent(lang, activeSolarStoryId) : undefined;
  const solarStoryLessons = SOLAR_STORY_FLAT_LESSONS.filter((l) => !!getSolarStoryContent(lang, l.lesson.id));
  const solarStoryPos = solarStoryLessons.findIndex((l) => l.lesson.id === activeSolarStoryId);
  const solarStoryCurrent = solarStoryPos >= 0 ? solarStoryLessons[solarStoryPos] : undefined;
  const solarStoryPrev = solarStoryPos > 0 ? solarStoryLessons[solarStoryPos - 1] : undefined;
  const solarStoryNext = solarStoryPos >= 0 ? solarStoryLessons[solarStoryPos + 1] : undefined;
  const solarStoryEyebrow = solarStoryCurrent
    ? `${t('Solaire', 'Solar')} · ${t('Projet', 'Project')} ${solarStoryCurrent.sectionIndex + 1} · ${t('Étape', 'Step')} ${solarStoryCurrent.number}`
    : undefined;
  const solarFicheNav = {
    open: (id: string) => {
      setActiveSolarTopicId(id);
      setSolarFicheFromStory(true);
    },
    title: (id: string) => {
      const l = SOLAR_NOTES_TOPICS.find((x) => x.id === id);
      return l ? (lang === 'fr' ? l.title : l.titleEn) : undefined;
    },
  };
  const solarSwitch = (
    <View style={styles.notesSwitch}>
      {(
        [
          ['story', t('📖 Le parcours en projets', '📖 The project journey')],
          ['fiches', t('📘 Fiches techniques', '📘 Reference sheets')],
        ] as const
      ).map(([key, label]) => (
        <TouchableOpacity
          key={key}
          style={[styles.notesSwitchButton, solarView === key && styles.notesSwitchActive]}
          onPress={() => setSolarView(key)}
        >
          <Text style={[styles.notesSwitchText, solarView === key && styles.notesSwitchTextActive]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  const solarPos = SOLAR_NOTES_TOPICS.findIndex((s) => s.id === activeSolarTopicId);
  const prevSolar = solarPos > 0 ? SOLAR_NOTES_TOPICS[solarPos - 1] : undefined;
  const nextSolar = solarPos >= 0 ? SOLAR_NOTES_TOPICS[solarPos + 1] : undefined;

  const climContent = activeClimId ? getClimTopicContent(lang, activeClimId) : undefined;
  const climPos = CLIM_FLAT_LESSONS.findIndex((l) => l.lesson.id === activeClimId);
  const climCurrent = climPos >= 0 ? CLIM_FLAT_LESSONS[climPos] : undefined;
  const climPrev = climPos > 0 ? CLIM_FLAT_LESSONS[climPos - 1] : undefined;
  const climNext = climPos >= 0 ? CLIM_FLAT_LESSONS[climPos + 1] : undefined;
  const climStoryContent = activeClimStoryId ? getClimStoryContent(lang, activeClimStoryId) : undefined;
  const climStoryLessons = CLIM_STORY_FLAT_LESSONS.filter((l) => !!getClimStoryContent(lang, l.lesson.id));
  const climStoryPos = climStoryLessons.findIndex((l) => l.lesson.id === activeClimStoryId);
  const climStoryCurrent = climStoryPos >= 0 ? climStoryLessons[climStoryPos] : undefined;
  const climStoryPrev = climStoryPos > 0 ? climStoryLessons[climStoryPos - 1] : undefined;
  const climStoryNext = climStoryPos >= 0 ? climStoryLessons[climStoryPos + 1] : undefined;
  const climStoryEyebrow = climStoryCurrent
    ? `${t('Climatisation', 'Air conditioning')} · ${t('Projet', 'Project')} ${climStoryCurrent.sectionIndex + 1} · ${t('Étape', 'Step')} ${climStoryCurrent.number}`
    : undefined;
  const climFicheNav = {
    open: (id: string) => {
      setActiveClimId(id);
      setClimFicheFromStory(true);
    },
    title: (id: string) => {
      const l = CLIM_FLAT_LESSONS.find((f) => f.lesson.id === id);
      return l ? (lang === 'fr' ? l.lesson.title : l.lesson.titleEn) : undefined;
    },
  };
  const climSwitch = (
    <View style={styles.notesSwitch}>
      {(
        [
          ['story', t('📖 Le parcours en projets', '📖 The project journey')],
          ['fiches', t('📘 Fiches techniques', '📘 Reference sheets')],
        ] as const
      ).map(([key, label]) => (
        <TouchableOpacity
          key={key}
          style={[styles.notesSwitchButton, climView === key && styles.notesSwitchActive]}
          onPress={() => setClimView(key)}
        >
          <Text style={[styles.notesSwitchText, climView === key && styles.notesSwitchTextActive]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
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
          <FicheProvider value={ficheNav}>
            {/* the story stays mounted (hidden) while a fiche is open, so the reader comes back to the same place */}
            {storyContent && activeStoryId ? (
              <View style={[styles.fill, activeTopicId ? styles.hidden : null]}>
                <LessonView
                  key={`${activeStoryId}-${lang}`}
                  content={storyContent}
                  eyebrow={storyEyebrow}
                  backLabel={t('Projets', 'Projects')}
                  onBack={() => setActiveStoryId(null)}
                  prev={storyPrev ? { title: lessonTitle(storyPrev), onPress: () => setActiveStoryId(storyPrev.lesson.id) } : undefined}
                  next={
                    storyNext
                      ? {
                          title: lessonTitle(storyNext),
                          transition: lang === 'fr' ? storyCurrent?.lesson.transition : storyCurrent?.lesson.transitionEn,
                          onPress: () => setActiveStoryId(storyNext.lesson.id),
                        }
                      : undefined
                  }
                />
              </View>
            ) : null}
            {activeTopicContent && activeTopicId ? (
              <LessonView
                key={`${activeTopicId}-${lang}`}
                content={activeTopicContent}
                eyebrow={`${t('Fiche technique', 'Reference sheet')} · ${lessonEyebrow ?? ''}`}
                backLabel={ficheFromStory ? t('Retour au projet', 'Back to the project') : t('Fiches techniques', 'Reference sheets')}
                onBack={() => {
                  setActiveTopicId(null);
                  setFicheFromStory(false);
                }}
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
            ) : activeStoryId && storyContent ? null : notesView === 'story' ? (
              <CourseHomeScreen
                topSlot={notesSwitch}
                isAvailable={(id) => !!getStoryContent(lang, id)}
                onOpenLesson={setActiveStoryId}
                sections={STORY_SECTIONS}
                flat={STORY_FLAT_LESSONS}
                sectionLabel={['Projet', 'Project']}
                title={['Le métier d’ingénieur électricien, raconté', 'The electrical engineer’s job, told as a story']}
                subtitle={[
                  'Suivez Awa Diallo, ingénieure en bureau d’études, sur quatre projets réels : une villa, un immeuble, une usine et une clinique. À chaque décision, elle explique à son client le pourquoi du comment ; les détails techniques sont dans les fiches.',
                  'Follow Awa Diallo, a design-office engineer, through four real projects: a villa, a block of flats, a plant and a clinic. At every decision she explains the why to her client; the technical details are in the reference sheets.',
                ]}
                hero={{ name: 'story-cast' }}
              />
            ) : (
              <CourseHomeScreen
                topSlot={notesSwitch}
                isAvailable={(id) => !!getTopicContent(lang, id)}
                onOpenLesson={(id) => {
                  setFicheFromStory(false);
                  setActiveTopicId(id);
                }}
                title={['Fiches techniques', 'Reference sheets']}
                subtitle={[
                  'Toutes les notions du cours, classées par thème : à consulter quand un projet les utilise, ou à réviser dans l’ordre.',
                  'Every notion of the course, organised by topic: look them up when a project uses them, or revise them in order.',
                ]}
              />
            )}
          </FicheProvider>
        ) : mode === 'clim' ? (
          <FicheProvider value={climFicheNav}>
            {climStoryContent && activeClimStoryId ? (
              <View style={[styles.fill, activeClimId ? styles.hidden : null]}>
                <LessonView
                  key={`${activeClimStoryId}-${lang}`}
                  content={climStoryContent}
                  eyebrow={climStoryEyebrow}
                  backLabel={t('Projets', 'Projects')}
                  onBack={() => setActiveClimStoryId(null)}
                  prev={climStoryPrev ? { title: lessonTitle(climStoryPrev), onPress: () => setActiveClimStoryId(climStoryPrev.lesson.id) } : undefined}
                  next={
                    climStoryNext
                      ? {
                          title: lessonTitle(climStoryNext),
                          transition: lang === 'fr' ? climStoryCurrent?.lesson.transition : climStoryCurrent?.lesson.transitionEn,
                          onPress: () => setActiveClimStoryId(climStoryNext.lesson.id),
                        }
                      : undefined
                  }
                />
              </View>
            ) : null}
            {climContent && activeClimId ? (
              <LessonView
                key={`${activeClimId}-${lang}`}
                content={climContent}
                eyebrow={climFicheFromStory ? `${t('Fiche technique', 'Reference sheet')} · ${climEyebrow ?? ''}` : climEyebrow}
                backLabel={climFicheFromStory ? t('Retour au projet', 'Back to the project') : t('Fiches techniques', 'Reference sheets')}
                onBack={() => {
                  setActiveClimId(null);
                  setClimFicheFromStory(false);
                }}
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
            ) : activeClimStoryId && climStoryContent ? null : climView === 'story' ? (
              <CourseHomeScreen
                topSlot={climSwitch}
                isAvailable={(id) => !!getClimStoryContent(lang, id)}
                onOpenLesson={setActiveClimStoryId}
                sections={CLIM_STORY_SECTIONS}
                flat={CLIM_STORY_FLAT_LESSONS}
                sectionLabel={['Projet', 'Project']}
                title={['La climatisation, racontée en projets', 'Air conditioning, told as projects']}
                subtitle={[
                  'Suivez Ousmane Cissé, ingénieur climaticien chez Lumen Ingénierie, avec Awa Diallo pour l’électricité : une villa, une chambre froide, un immeuble de bureaux et un hôtel. Chaque décision est expliquée au client ; les détails techniques sont dans les fiches.',
                  'Follow Ousmane Cissé, HVAC engineer at Lumen Ingénierie, with Awa Diallo on the electrical side: a villa, a cold room, an office building and a hotel. Every decision is explained to the client; the technical details are in the reference sheets.',
                ]}
                hero={{ name: 'clim-systems' }}
              />
            ) : (
              <CourseHomeScreen
                topSlot={climSwitch}
                isAvailable={(id) => !!getClimTopicContent(lang, id)}
                onOpenLesson={(id) => {
                  setClimFicheFromStory(false);
                  setActiveClimId(id);
                }}
                sections={CLIM_SECTIONS}
                flat={CLIM_FLAT_LESSONS}
                title={['Climatisation en région tropicale', 'Air conditioning in tropical regions']}
                subtitle={[
                  'Du confort au bilan thermique, du circuit frigorifique au dépannage, du split à la centrale à eau glacée : un parcours pensé pour débuter, d’après le guide IEPF « Efficacité énergétique de la climatisation en région tropicale » et le livre « ABC de la climatisation ».',
                  'From comfort to the heat balance, from the refrigerant circuit to troubleshooting, from the split to the chilled-water plant: a beginner-friendly journey based on the IEPF guide “Energy efficiency of air conditioning in tropical regions” and the book “ABC de la climatisation”.',
                ]}
                hero={{ name: 'clim-heat-gains' }}
              />
            )}
          </FicheProvider>
        ) : (
          <FicheProvider value={solarFicheNav}>
            {solarStoryContent && activeSolarStoryId ? (
              <View style={[styles.fill, activeSolarTopicId ? styles.hidden : null]}>
                <LessonView
                  key={`${activeSolarStoryId}-${lang}`}
                  content={solarStoryContent}
                  eyebrow={solarStoryEyebrow}
                  backLabel={t('Projets', 'Projects')}
                  onBack={() => setActiveSolarStoryId(null)}
                  prev={solarStoryPrev ? { title: lessonTitle(solarStoryPrev), onPress: () => setActiveSolarStoryId(solarStoryPrev.lesson.id) } : undefined}
                  next={
                    solarStoryNext
                      ? {
                          title: lessonTitle(solarStoryNext),
                          transition: lang === 'fr' ? solarStoryCurrent?.lesson.transition : solarStoryCurrent?.lesson.transitionEn,
                          onPress: () => setActiveSolarStoryId(solarStoryNext.lesson.id),
                        }
                      : undefined
                  }
                />
              </View>
            ) : null}
            {activeSolarTopicContent && activeSolarTopicId ? (
              <LessonView
                key={`${activeSolarTopicId}-${lang}`}
                content={activeSolarTopicContent}
                eyebrow={solarFicheFromStory ? `${t('Fiche technique', 'Reference sheet')} · ${t('Solaire PV', 'Solar PV')}` : t('Solaire PV', 'Solar PV')}
                backLabel={solarFicheFromStory ? t('Retour au projet', 'Back to the project') : t('Fiches techniques', 'Reference sheets')}
                onBack={() => {
                  setActiveSolarTopicId(null);
                  setSolarFicheFromStory(false);
                }}
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
            ) : activeSolarStoryId && solarStoryContent ? null : solarView === 'story' ? (
              <CourseHomeScreen
                topSlot={solarSwitch}
                isAvailable={(id) => !!getSolarStoryContent(lang, id)}
                onOpenLesson={setActiveSolarStoryId}
                sections={SOLAR_STORY_SECTIONS}
                flat={SOLAR_STORY_FLAT_LESSONS}
                sectionLabel={['Projet', 'Project']}
                hero={{ name: 'pv-system' }}
                title={['Le solaire, raconté en projets', 'Solar PV, told as projects']}
                subtitle={[
                  'Suivez Fanta Coulibaly, ingénieure photovoltaïque chez Lumen Ingénierie : une villa contre les délestages, un centre de santé isolé, la toiture d’une usine et le pompage d’un village. Chaque décision est expliquée au client ; les détails techniques sont dans les fiches.',
                  'Follow Fanta Coulibaly, PV engineer at Lumen Ingénierie: a villa against load shedding, an off-grid health centre, a factory roof and a village pumping system. Every decision is explained to the client; the technical details are in the reference sheets.',
                ]}
              />
            ) : (
              <NotesHomeScreen
                topSlot={solarSwitch}
                topics={SOLAR_NOTES_TOPICS}
                getContent={getSolarTopicContent}
                title="Fiches techniques · Solaire PV"
                titleEn="Reference sheets · Solar PV"
                subtitle="Dimensionnement de systèmes photovoltaïques : charges, panneaux, batteries, régulateurs, onduleurs"
                subtitleEn="Sizing photovoltaic systems: loads, panels, batteries, controllers, inverters"
                onSelectTopic={(id) => {
                  setSolarFicheFromStory(false);
                  setActiveSolarTopicId(id);
                }}
              />
            )}
          </FicheProvider>
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
  fill: { flex: 1 },
  hidden: { display: 'none' },
  notesSwitch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    padding: 3,
    gap: 2,
    marginBottom: spacing.lg,
  },
  notesSwitchButton: { paddingVertical: 7, paddingHorizontal: spacing.md, borderRadius: radius.pill },
  notesSwitchActive: { backgroundColor: colors.accentSoft },
  notesSwitchText: { fontSize: 13, fontWeight: '700', color: colors.textMuted },
  notesSwitchTextActive: { color: colors.accent },
});
