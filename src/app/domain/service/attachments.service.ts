import {Attachment} from '../model/attachment';
import {Note} from '../model/note';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';


@Injectable()
export class AttachmentsService {

  private _notesBaseUrl = '/api/notes';
  private _attachments: Observable<Attachment[]>;
  private _errorCount = 0;

  constructor(private _http: HttpClient, private _msgService: MessageService) {}

  getNoteAttachments(note: Note): Observable<Attachment[]> {

    let attachmentIds: Array<string> = [];
    attachmentIds = Object.keys(note.attachments);
    console.log(attachmentIds.toString);

    this._attachments = new Observable(observer => {
      const attachments: Attachment[] = [];

      attachmentIds.forEach((id: string) => {
        this._http.get<Attachment>(this._notesBaseUrl + '/' + note.id + '/attachments/' + id + '/details').subscribe(
          (attachment: Attachment) => {
            attachments.push(attachment);
          },
          (err: HttpErrorResponse) => {
            this._msgService.add({
              severity: 'warn', summary: 'Unable to load attachments',
              detail: 'Error occurred during the load of attachments'
            });
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          }
        );
      });
      observer.next(attachments);
    });


    return this._attachments;
  }

}
