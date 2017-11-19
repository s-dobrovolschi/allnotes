import {Note} from '../../domain/model/note';
import {NotesService} from '../../domain/service/notes.service';
import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../../domain/service/customers.service";
import {Customer} from "../../domain/model/customer";

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css'],
  providers: [NotesService, CustomersService]
})
export class NoteSearchComponent implements OnInit {

  searchString = '';
  searchResult: Note[];
  selectedNote: Note;
  customerFound: Customer;

  constructor(private notesService: NotesService, private customersService: CustomersService) {}

  ngOnInit() {
  }

  onSearch() {
    this.searchResult = null;
    this.selectedNote = null;
    this.customerFound = null;
    this.customersService.searchCustomer(this.searchString).subscribe(
      result => {
        if(result){
          this.customerFound = result;
          this._searchNotesByCustomer();
        }
      }
    );
  }

  private _searchNotesByCustomer(): void{
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
    this.customerFound = null;
  }

  onNoteSelection(selectedNote: Note) {
    this.selectedNote = selectedNote;
  }

}
