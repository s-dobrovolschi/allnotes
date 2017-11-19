/**
 * Created by Sergiu Dobrovolschi on 04/11/2017.
 */

export interface Note {
  id: string;
  content: string;
  title: string;
  creationDate: Date;
  createdBy: string;
  updateDate?: Date;
  updateBy?: string;
}
