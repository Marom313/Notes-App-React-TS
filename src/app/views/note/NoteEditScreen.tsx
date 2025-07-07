import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NoteRealm } from '@models/realm/note.realm';
import { useRealm } from '@services/RealmProvider';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/RootStackParamList';

type NoteEditRouteProp = RouteProp<RootStackParamList, 'NoteEdit'>;

const NoteEditScreen = ({ navigation }: any) => {
  const realm = useRealm();
  const route = useRoute<NoteEditRouteProp>();
  const note = route.params?.note;

  const [title, setTitle] = useState(note?.title ?? '');
  const [body, setBody] = useState(note?.body ?? '');

  const saveNote = () => {
    realm.write(() => {
      if (note) {
        note.title = title;
        note.body = body;
      } else {
        realm.create(NoteRealm.schema.name, {
          _id: new Realm.BSON.ObjectId(),
          title,
          body,
          dateCreated: new Date(),
          lat: 0,
          long: 0,
          imagePath: '',
          userId: '',
        });
      }
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
        style={[styles.input, styles.bodyInput]}
      />
      <Button title="Save" onPress={saveNote} />
    </View>
  );
};

export default NoteEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  bodyInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});
