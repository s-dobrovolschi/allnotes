import { Note } from '../../../domain/model/note';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;

  constructor() {}

  ngOnInit() {
  }

}
