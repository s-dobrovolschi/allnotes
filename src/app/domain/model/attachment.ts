import {User} from './user';

export interface Attachment {
  id: string;
  name: string;
  format?: string;
  author: User;
  lastModifiedBy?: User;
  dateCreated: Date;
  dateModified?: Date;
  status: string;
  dateExpiration: Date;

}
