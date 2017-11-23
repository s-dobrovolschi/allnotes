import {Attachment} from '../model/attachment';
import {Note} from '../model/note';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AttachmentsService {

  private _notesBaseUrl = '/api/notes';
  private _attachments: Observable<Attachment[]>;

  constructor(private http: HttpClient) {}

  getNoteAttachments(note: Note): Observable<Attachment[]> {

    let attachmentIds: Array<string> = [];
    attachmentIds = Object.keys(note.attachments);
    console.log(attachmentIds.toString);

    this._attachments = new Observable(observer => {
      const attachments: Attachment[] = [];

      attachmentIds.forEach((id: string) => {
        this.http.get<Attachment>(this._notesBaseUrl + '/' + note.id + '/attachments/' + id + '/details').subscribe(
          (result: Attachment) => {
            attachments.push(result);
          }
        );
      });
      observer.next(attachments);
    });


    return this._attachments;
  }

}
