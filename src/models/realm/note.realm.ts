import { BSON, ObjectSchema } from 'realm';

export class NoteRealm extends Realm.Object<NoteRealm> {
  _id!: BSON.ObjectId;
  title!: string;
  body!: string;
  dateCreated!: Date;
  lat!: number;
  long!: number;
  imagePath!: string;
  userId!: string;

  static schema: ObjectSchema = {
    name: 'NoteRealm',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      body: 'string',
      dateCreated: 'date',
      lat: 'double',
      long: 'double',
      imagePath: 'string',
      userId: 'string',
    },
  };
}
