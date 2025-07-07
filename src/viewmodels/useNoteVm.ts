
import { useState, useEffect, useCallback } from "react";

import { Note } from "@models/Note";
import { NoteRealm } from "@models/realm/note.realm";
import { realm } from "@services/RealmProvider";

import { useAuthVM } from "./useAuthVM";


function toNote(realmNote: NoteRealm): Note {
  return {
    id: realmNote._id.toHexString(),
    title: realmNote.title,
    body: realmNote.body,
    dateCreated: new Date(Note.dateCreated),
    lat: realmNote.lat,
    long: realmNote.long,
    imagePath: realmNote.imagePath,
    userId: realmNote.userId,
  };
}

export const useNoteVM = () => {
  const { currentUser } = useAuthVM();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (!currentUser) return;

    const results = realm
      .objects<NoteRealm>('NoteRealm')
      .filtered('userId == $0', currentUser.uid)
      .sorted('dateCreated', true);

    const updateNotes = () => {
      setNotes(results.map(toNote));
    };

    updateNotes();
    results.addListener(updateNotes);

    return () => {
      results.removeAllListeners();
    };
  }, [currentUser]);

  const addNote = useCallback((note: Note) => {
    realm.write(() => {
      realm.create('NoteRealm', {
        _id: new realm.BSON.ObjectId(),
        ...note,
      });
    });
  }, []);

  const updateNote = useCallback((note: Note) => {
    realm.write(() => {
      const existing = realm.objectForPrimaryKey<NoteRealm>(
        'NoteRealm',
        new realm.BSON.ObjectId(note.id)
      );
      if (existing) {
        Object.assign(existing, note);
      }
    });
  }, []);

  const deleteNote = useCallback((id: string) => {
    realm.write(() => {
      const note = realm.objectForPrimaryKey<NoteRealm>(
        'NoteRealm',
        new realm.BSON.ObjectId(id)
      );
      if (note) realm.delete(note);
    });
  }, []);

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
};
