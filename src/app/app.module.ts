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
import { HeaderComponent } from './header/header.component';
import { NoteDetailComponent } from './notes/note-search/note-detail/note-detail.component';
import {LoginComponent} from "./header/login/login.component";
import {PanelModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from "primeng/components/dialog/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteSearchComponent,
    NoteSearchResultComponent,
    AuthComponent,
    SharedComponent,
    NoteDetailComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // PrimeNG Modules Declaration
    ToolbarModule,
    PanelModule,
    DataTableModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
