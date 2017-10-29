import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteSearchComponent } from './notes/note-search/note-search.component';
import { NoteSearchResultComponent } from './notes/note-search-result/note-search-result.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteSearchComponent,
    NoteSearchResultComponent,
    AuthComponent,
    SharedComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
