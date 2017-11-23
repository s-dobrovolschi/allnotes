import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-note-attachment',
  templateUrl: './note-attachment.component.html',
  styleUrls: ['./note-attachment.component.css']
})
export class NoteAttachmentComponent implements OnInit {

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
