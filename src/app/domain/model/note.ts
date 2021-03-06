import { Message } from './message';
import { User } from './user';

export interface Note {
  id: string;
  customerNumber: string;
  customerName?: string;
  title: string;
  messages: Message[];
  application?: string;
  category?: string;
  source?: string;
  topic?: string;
  subtopic?: string;
  author: User;
  lastModifiedBy?: User;
  dateCreated: Date;
  dateModified?: Date;
  status?: string;
  dateExpiration?: Date;
  attachments?: Map<string, string>;
}
