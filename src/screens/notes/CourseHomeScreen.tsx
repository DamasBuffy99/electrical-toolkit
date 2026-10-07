import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COURSE_SECTIONS, FLAT_LESSONS } from '../../content/course';
import { ScreenContainer } from '../../components/ui';
import { Illustration } from '../../components/illustrations';
import { colors, radius, shadow, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Props = {
  isAvailable: (lessonId: string) => boolean;
  onOpenLesson: (lessonId: string) => void;
};

export default function CourseHomeScreen({ isAvailable, onOpenLesson }: Props) {
  const { lang, t } = useLanguage();
  const numberOf = (id: string) => FLAT_LESSONS.find((l) => l.lesson.id === id)?.number ?? 0;
  const lastIndex = COURSE_SECTIONS.length - 1;

  return (
    <ScreenContainer>
      <Text style={styles.title}>{t("Parcours de l'ingénieur électricien", "The electrical engineer's journey")}</Text>
      <Text style={styles.subtitle}>
        {t(
          'Le cours suit l’ordre réel d’un projet : chaque section prépare la suivante.',
          'The course follows the real order of a project: each section prepares the next.'
        )}
      </Text>
      <View style={styles.hero}>
        <Illustration name="design-roadmap" props={{ step: 0 }} lang={lang} />
      </View>

      {COURSE_SECTIONS.map((section, si) => {
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
  railLine: { flex: 1, width: 3, backgroundColor: '#cfe5d7', marginVertical: 4, borderRadius: 2 },

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
