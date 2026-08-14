import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NOTES_TOPICS } from '../../data/notesTopics';
import { getTopicContent } from '../../content/registry';
import { ScreenContainer, Subtitle, Title } from '../../components/ui';
import { colors, radius, shadow, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Props = {
  onSelectTopic: (topicId: string) => void;
};

export default function NotesHomeScreen({ onSelectTopic }: Props) {
  const { lang, t } = useLanguage();

  return (
    <ScreenContainer>
      <Title>{t('Notes de cours', 'Course Notes')}</Title>
      <Subtitle>
        {t(
          "Révise les notions du cours d'électricité, avec formules, tableaux et schémas",
          'Review the electrical course concepts, with formulas, tables, and diagrams'
        )}
      </Subtitle>

      <View style={styles.grid}>
        {NOTES_TOPICS.map((topic) => {
          const available = !!getTopicContent(lang, topic.id);
          return (
            <TouchableOpacity
              key={topic.id}
              style={[styles.card, !available && styles.cardDisabled]}
              onPress={() => available && onSelectTopic(topic.id)}
              disabled={!available}
            >
              <Text style={styles.icon}>{topic.icon}</Text>
              <Text style={styles.cardTitle}>{lang === 'fr' ? topic.title : topic.titleEn}</Text>
              <Text style={styles.cardSubtitle}>{lang === 'fr' ? topic.subtitle : topic.subtitleEn}</Text>
              {!available && <Text style={styles.soon}>{t('Bientôt disponible', 'Coming soon')}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginTop: spacing.md },
  card: {
    width: 220,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.card,
  },
  cardDisabled: { opacity: 0.5 },
  icon: { fontSize: 28, marginBottom: spacing.sm },
  cardTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 4 },
  cardSubtitle: { fontSize: 12, color: colors.textMuted, lineHeight: 17 },
  soon: { fontSize: 11, color: colors.textFaint, marginTop: spacing.sm, fontStyle: 'italic' },
});
