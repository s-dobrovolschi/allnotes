import { NotesService } from '../domain/service/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {

  constructor(public noteService: NotesService) { }

  ngOnInit() {
  }

}
