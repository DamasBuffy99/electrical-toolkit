import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TopicContent } from '../../content/types';
import { NoteBlocks } from '../../components/notes/NoteBlocks';
import { ScreenContainer, Subtitle, Title } from '../../components/ui';
import { colors, spacing } from '../../theme/theme';
import { useLanguage } from '../../lib/language';

type Props = {
  content: TopicContent;
  onBack: () => void;
};

export default function NotesTopicScreen({ content, onBack }: Props) {
  const { t } = useLanguage();
  return (
    <ScreenContainer>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>{t('← Retour aux notes', '← Back to notes')}</Text>
      </TouchableOpacity>
      <Title>{content.title}</Title>
      {content.subtitle ? <Subtitle>{content.subtitle}</Subtitle> : null}
      <NoteBlocks blocks={content.blocks} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  backButton: { marginBottom: spacing.md },
  backText: { color: colors.accent, fontWeight: '600', fontSize: 13 },
});
