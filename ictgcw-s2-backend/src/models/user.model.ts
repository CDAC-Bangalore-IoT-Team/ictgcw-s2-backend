import {Entity, hasOne, model, property} from '@loopback/repository';
import {UserCredentials} from './user-credentials.model';

@model({
  settings: {
    strict: true,
   /*  foreignKeys: {
      fk_usercredentials_user_userid: {
        name: 'fk_usercredentials_user_userid',
        entity: 'UserCredentials',
        entityKey: 'id',
        foreignKey: 'id',
      },
    }, */
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  fullname: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phonenumber: string;

  @property({
    type: 'string',
    required: true,
  })
  companyname: string;

  @property({
    type: 'string',
    required: true,
  })
  companyaddress: string;

  @hasOne(() => UserCredentials)
  userCredentials: UserCredentials;
  //[prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
