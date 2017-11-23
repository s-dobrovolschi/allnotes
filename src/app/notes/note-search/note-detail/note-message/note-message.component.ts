import {Message} from '../../../../domain/model/message';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-note-message',
  templateUrl: './note-message.component.html',
  styleUrls: ['./note-message.component.css']
})
export class NoteMessageComponent implements OnInit {

  @Input() messages: [Message];

  constructor() {}

  ngOnInit() {
  }

}
