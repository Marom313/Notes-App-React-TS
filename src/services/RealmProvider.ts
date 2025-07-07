import React, { ReactNode, useEffect, useState, useContext } from 'react';
import Realm from 'realm';
import { NoteRealm } from './note.realm';

type RealmContextType = Realm | null;

const RealmContext = React.createContext<RealmContextType>(null);

const realmConfig: Realm.Configuration = {
  schema: [NoteRealm],
  schemaVersion: 1,
};

export const RealmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [realmInstance, setRealmInstance] = useState<Realm | null>(null);

  useEffect(() => {
    const openRealm = async () => {
      const realm = await Realm.open(realmConfig);
      setRealmInstance(realm);
    };

    openRealm();

    return () => {
      if (realmInstance && !realmInstance.isClosed) {
        realmInstance.close();
      }
    };
  }, []);

  if (!realmInstance) return null;

  return (
    <RealmContext.Provider value={realmInstance}>
      {children}
    </RealmContext.Provider>
  );
};

export const useRealm = () => {
  const realm = useContext(RealmContext);
  if (!realm) {
    throw new Error('useRealm must be used within a RealmProvider');
  }
  return realm;
};
