import {SelectItem} from '../../../domain/common/selectitem';
import {Note} from '../../../domain/model/note';
import {NotesService} from '../../../domain/service/notes.service';
import {Component, OnInit, Input, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Customer} from '../../../domain/model/customer';
import {RenderStateEnum} from '../../../domain/model/render-state-enum';
import {TopicEnum} from '../../../domain/model/topic-enum';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {forEachChild} from 'typescript';

@Component({
  selector: 'app-note-search-result',
  templateUrl: './note-search-result.component.html',
  styleUrls: ['./note-search-result.component.css'],
  providers: [NotesService]
})
export class NoteSearchResultComponent implements OnInit, OnDestroy {

  note: Note;
  @Input() customer: Customer;
  @Input() progress: number;
  @Input() notes: Note[];
  @Input() render: boolean;
  @Output() noteSelection = new EventEmitter<Note>();
  loading: boolean = true;
  private _timerId: Observable<number>;
  @Output() createNoteAction = new EventEmitter<boolean>();
  topics: SelectItem[];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this._initTopics();


    let interval = setInterval(() => {
      if (this.progress === 100) {
        this.loading = false;
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnDestroy() {
    console.log('OnDestroy event NoteSearchResultComponent');
    //    this._timerId.unsubscribe();
  }

  private _initTopics(): void {
    this.topics = [];
    this.topics.push({label: 'All Topics', value: null});
    for (let key in TopicEnum) {
      if (isNaN(Number(key))) {
        this.topics.push({label: TopicEnum[key], value: TopicEnum[key]});
      }
    }
  }

  showSelectionDetails() {
    if (this.note) {
      this.noteSelection.emit(this.note);
    }
  }

  onCreateNote() {
    this.createNoteAction.emit(true);
  }

}
