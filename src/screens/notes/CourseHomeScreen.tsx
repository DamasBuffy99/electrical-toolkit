import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COURSE_SECTIONS, CourseSection, FLAT_LESSONS, FlatLesson } from '../../content/course';
import { ScreenContainer } from '../../components/ui';
import { Illustration } from '../../components/illustrations';
import { colors, radius, shadow, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Props = {
  isAvailable: (lessonId: string) => boolean;
  onOpenLesson: (lessonId: string) => void;
  /** Defaults to the electrical design course. */
  sections?: CourseSection[];
  flat?: FlatLesson[];
  title?: [string, string];
  subtitle?: [string, string];
  hero?: { name: string; props?: Record<string, string | number | boolean> };
};

export default function CourseHomeScreen({
  isAvailable,
  onOpenLesson,
  sections = COURSE_SECTIONS,
  flat = FLAT_LESSONS,
  title = ["Parcours de l'ingénieur électricien", "The electrical engineer's journey"],
  subtitle = [
    'Pensé pour débuter de zéro : on comprend le projet, on apprend les bases, puis on conçoit dans l’ordre réel du métier. Chaque section prépare la suivante.',
    'Built for complete beginners: understand the project, learn the basics, then design in the real order of the job. Each section prepares the next.',
  ],
  hero = { name: 'design-roadmap', props: { step: 0 } },
}: Props) {
  const { lang, t } = useLanguage();
  const numberOf = (id: string) => flat.find((l) => l.lesson.id === id)?.number ?? 0;
  const lastIndex = sections.length - 1;

  return (
    <ScreenContainer>
      <Text style={styles.title}>{t(title[0], title[1])}</Text>
      <Text style={styles.subtitle}>{t(subtitle[0], subtitle[1])}</Text>
      <View style={styles.hero}>
        <Illustration name={hero.name} props={hero.props} lang={lang} />
      </View>

      {sections.map((section, si) => {
        const isAppendix = section.id === 'appendix';
        const badge = isAppendix ? 'A' : String(si + 1);
        const hasContent = section.lessons.some((l) => isAvailable(l.id));
        return (
          <View key={section.id} style={styles.sectionRow}>
            <View style={styles.rail}>
              <View style={[styles.badge, !hasContent && styles.badgeMuted]}>
                <Text style={[styles.badgeText, !hasContent && styles.badgeTextMuted]}>{badge}</Text>
              </View>
              {si < lastIndex ? <View style={styles.railLine} /> : null}
            </View>

            <View style={[styles.card, !hasContent && styles.cardMuted]}>
              <Text style={styles.sectionEyebrow}>
                {isAppendix ? t('Annexe', 'Appendix') : `${t('Section', 'Section')} ${si + 1}`} · {section.icon}
              </Text>
              <Text style={styles.sectionTitle}>{lang === 'fr' ? section.title : section.titleEn}</Text>
              <Text style={styles.sectionIntro}>{lang === 'fr' ? section.intro : section.introEn}</Text>

              {section.lessons.length === 0 ? (
                <Text style={styles.soon}>{t('Contenu à venir', 'Content coming soon')}</Text>
              ) : (
                section.lessons.map((lesson) => {
                  const available = isAvailable(lesson.id);
                  return (
                    <TouchableOpacity
                      key={lesson.id}
                      style={[styles.lessonRow, !available && styles.lessonRowMuted]}
                      onPress={() => available && onOpenLesson(lesson.id)}
                      disabled={!available}
                    >
                      <Text style={styles.lessonNumber}>{numberOf(lesson.id)}</Text>
                      <Text style={styles.lessonTitle}>{lang === 'fr' ? lesson.title : lesson.titleEn}</Text>
                      <Text style={styles.lessonArrow}>{available ? '→' : t('Bientôt', 'Soon')}</Text>
                    </TouchableOpacity>
                  );
                })
              )}
            </View>
          </View>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '800', color: colors.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.lg },
  hero: { width: '100%', aspectRatio: 4 / 3, maxHeight: 360, alignSelf: 'center', marginBottom: spacing.xl },

  sectionRow: { flexDirection: 'row', gap: spacing.md },
  rail: { width: 36, alignItems: 'center' },
  badge: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  badgeMuted: { backgroundColor: colors.border },
  badgeText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  badgeTextMuted: { color: colors.textMuted },
  railLine: { flex: 1, width: 3, backgroundColor: '#d5ddf0', marginVertical: 4, borderRadius: 2 },

  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadow.card,
  },
  cardMuted: { opacity: 0.6 },
  sectionEyebrow: { fontSize: 11, fontWeight: '700', color: colors.accent, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 4 },
  sectionTitle: { fontSize: 17, fontWeight: '800', color: colors.text, marginBottom: 4 },
  sectionIntro: { fontSize: 13, color: colors.textMuted, lineHeight: 18, marginBottom: spacing.sm },
  soon: { fontSize: 12.5, color: colors.textFaint, fontStyle: 'italic' },

  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: 10,
    paddingHorizontal: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  lessonRowMuted: { opacity: 0.5 },
  lessonNumber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.accentSoft,
    color: colors.accent,
    fontWeight: '800',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 26,
  },
  lessonTitle: { flex: 1, fontSize: 14.5, fontWeight: '600', color: colors.text },
  lessonArrow: { fontSize: 13, color: colors.accent, fontWeight: '700' },
});
