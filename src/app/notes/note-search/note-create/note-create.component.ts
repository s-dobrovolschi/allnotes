import {SelectItem} from '../../../domain/common/selectitem';
import {Component, OnInit, Input} from '@angular/core';
import {Note} from '../../../domain/model/note';
import {TopicEnum} from '../../../domain/model/topic-enum';
import {NotesService} from '../../../domain/service/notes.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
  providers: [NotesService]
})
export class NoteCreateComponent implements OnInit {

  @Input() render: boolean;
  private _note: Note;
  title: string;
  source: string;
  topic: TopicEnum;
  messageContent: string;
  topics: SelectItem[];
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private notesService: NotesService) {}

  ngOnInit() {
    this._initTopics();
  }

  onSave() {
    this._note = {
      id: '1345',
      customerNumber: '4000098F',
      title: this.title,
      topic: TopicEnum[this.topic],
      messages: [{content: this.messageContent, createdBy: 'sdobrovo', dateCreated: new Date(), id: '134134'}],
      author: {id: 'sdobrovo', firstName: 'Sergiu', lastName: 'Dobrovolschi'},
      dateCreated: new Date(),
      status: 'ACTIVE',
      source: 'DMS',
      application: 'AllNotes'
    };
    this.notesService.createNote(this._note);
    this.messageService.add({severity: 'success', summary: 'Note saved successfully', detail: 'New note has been created'});
    console.log(this.title);

  }

  onCancel() {
    this.render = !this.render;
  }

  private _initTopics(): void {
    this.topics = [];
    for (let key in TopicEnum) {
      if (isNaN(Number(key))) {
        this.topics.push({label: TopicEnum[key], value: TopicEnum[key]});
      }
    }
  }


  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
