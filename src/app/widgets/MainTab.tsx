// src/widgets/MainTab.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Note } from '@models/Note';

type Props = { notes: Note[] };

export default function MainTab({ notes }: Props) {
  const navigation = useNavigation<any>();

  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('NoteEdit', { note: item, index })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2}>{item.body}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
});
