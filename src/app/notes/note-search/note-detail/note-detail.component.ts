import { Attachment } from '../../../domain/model/attachment';
import {Note} from '../../../domain/model/note';
import {Component, OnInit, Input} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;
  @Input() attachments: Array<Attachment>;
  items: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      }
    ];
  }

  download() {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Attachment Download'});
  }

  delete() {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Attachment Deleted'});
  }
}
