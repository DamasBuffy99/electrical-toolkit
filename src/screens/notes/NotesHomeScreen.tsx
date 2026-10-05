import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NotesTopic } from '../../data/notesTopics';
import { ScreenContainer, Subtitle, Title } from '../../components/ui';
import { colors, radius, shadow, spacing } from '../../theme/theme';
import { Lang, useLanguage } from '../../lib/language';
import { TopicContent } from '../../content/types';

type Props = {
  topics: NotesTopic[];
  getContent: (lang: Lang, id: string) => TopicContent | undefined;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  onSelectTopic: (topicId: string) => void;
};

export default function NotesHomeScreen({ topics, getContent, title, titleEn, subtitle, subtitleEn, onSelectTopic }: Props) {
  const { lang, t } = useLanguage();

  return (
    <ScreenContainer>
      <Title>{lang === 'fr' ? title : titleEn}</Title>
      <Subtitle>{lang === 'fr' ? subtitle : subtitleEn}</Subtitle>

      <View style={styles.grid}>
        {topics.map((topic) => {
          const available = !!getContent(lang, topic.id);
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
