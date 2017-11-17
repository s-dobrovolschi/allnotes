import {NotesMock} from '../mock/notesmock';
import {Note} from '../model/note';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NotesService {

  private _notesBaseUrl = '/api/notes';
  private _customersBaseUrl = '/api/customers';

  searchResult: Observable<Note[]>;
  private _notes: Note[] = [];

  getNotes(): Note[] {
    return this._notes;
  }

  setNotes(notes: Note[]) {
    this._notes = notes;
  }

  constructor(private http: HttpClient) {}

  searchNotes(customerNumber: string): Observable<Note[]> {
    return this.http.get<Note[]>(this._customersBaseUrl + '/' + customerNumber + '/notes?includeInactive=true');
  }

}
