import {Attachment} from '../../domain/model/attachment';
import {Note} from '../../domain/model/note';
import {NotesService} from '../../domain/service/notes.service';
import {Component, OnInit} from '@angular/core';
import {CustomersService} from '../../domain/service/customers.service';
import {Customer} from '../../domain/model/customer';
import {RenderStateEnum} from '../../domain/model/render-state-enum';
import {AttachmentsService} from '../../domain/service/attachments.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css'],
  providers: [NotesService, CustomersService, AttachmentsService]
})
export class NoteSearchComponent implements OnInit {

  searchString = '';
  searchResult: Note[];
  noteAttachments: Array<Attachment>;
  selectedNote: Note;
  customerFound: Customer;
  searchCustomerAction: boolean = false;
  createNoteAction = false;
  progress: number;

  constructor(
    private notesService: NotesService,
    private customersService: CustomersService,
    private messageService: MessageService,
    private attachmentsService: AttachmentsService) {}

  ngOnInit() {
  }

  onSearch() {
    if (this.searchString) {
      this.progress = 0;
      this.searchCustomerAction = true;
      this.searchResult = null;
      this.selectedNote = null;
      this.customerFound = null;
      this.customersService.searchCustomer(this.searchString).subscribe(
        result => {
          if (result) {
            this.customerFound = result;
            this.progress = 30;
            this._searchNotesByCustomer();
          }
        },
        error => {
          this.progress = 100;
        }

      );
    } else {
      this._onClear();
    }


  }

  private _searchNotesByCustomer(): void {
    this.progress = 60;
    this.notesService.searchNotes(this.searchString).subscribe(
      result => {
        this.searchResult = result;
        this.progress = 100;
      }
    );
  }

  private _getNoteAttachments(note: Note): void {
    this.attachmentsService.getNoteAttachments(note).subscribe(
      result => {
        this.noteAttachments = result;
      }
    );
  }

  private _onClear(): void {
    this.searchResult = null;
    this.searchString = '';
    this.selectedNote = null;
    this.customerFound = null;
    this.searchCustomerAction = false;
    this.createNoteAction = false;
  }

  onNoteSelection(selectedNote: Note) {
    if (selectedNote.attachments) {
      this._getNoteAttachments(selectedNote);
    } else {
      this.noteAttachments = null;
    }
    this.selectedNote = selectedNote;
  }

  onCreateNote() {
    this.createNoteAction = true;
  }

}
