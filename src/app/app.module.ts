import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteSearchComponent } from './notes/note-search/note-search.component';
import { NoteSearchResultComponent } from './notes/note-search/note-search-result/note-search-result.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {PanelModule} from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { NoteDetailComponent } from './notes/note-search/note-detail/note-detail.component';
import {DataTableModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteSearchComponent,
    NoteSearchResultComponent,
    AuthComponent,
    SharedComponent,
    NoteDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    ToolbarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
