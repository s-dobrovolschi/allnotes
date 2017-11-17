import {Note} from '../../../domain/model/note';
import {NotesService} from '../../../domain/service/notes.service';
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-note-search-result',
  templateUrl: './note-search-result.component.html',
  styleUrls: ['./note-search-result.component.css'],
  providers: [NotesService]
})
export class NoteSearchResultComponent implements OnInit {

  note: Note;
  @Input() notes: Note[];
  @Output() noteSelection = new EventEmitter<Note>();

  constructor(private notesService: NotesService) {}

  ngOnInit() {
  }

  showSelectionDetails() {
    if (this.note) {
      this.noteSelection.emit(this.note);
    }
  }

}
