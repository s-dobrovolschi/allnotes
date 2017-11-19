import {Component, OnInit, Input} from '@angular/core';
import {Note} from "../../../domain/model/note";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  @Input() render: boolean;
  private _note: Note;
  private _title: string;
  private _source: string;
  private _content: string;

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    console.log(this._title);
  }

}
