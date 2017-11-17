import {Note} from '../../domain/model/note';
import {NotesService} from '../../domain/service/notes.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css'],
  providers: [NotesService]
})
export class NoteSearchComponent implements OnInit {

  searchString = '';
  searchResult: Note[];
  selectedNote: Note;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
  }

  onSearch() {
    this.notesService.searchNotes(this.searchString).subscribe(
      result => {
        this.searchResult = result;
      }
    );
    // TODO Remove - Debug
    console.log(this.searchResult);
  }

  onClear() {
    this.searchResult = null;
    this.searchString = '';
    this.selectedNote = null;
  }

  onNoteSelection(selectedNote: Note) {
    this.selectedNote = selectedNote;
  }

}
