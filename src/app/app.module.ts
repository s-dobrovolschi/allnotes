import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NotesComponent} from './notes/notes.component';
import {NoteSearchComponent} from './notes/note-search/note-search.component';
import {NoteSearchResultComponent} from './notes/note-search/note-search-result/note-search-result.component';
import {AuthComponent} from './auth/auth.component';
import {SharedComponent} from './shared/shared.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {NoteDetailComponent} from './notes/note-search/note-detail/note-detail.component';
import {LoginComponent} from './header/login/login.component';
import {PanelModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {GrowlModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import {NoteCreateComponent} from './notes/note-search/note-create/note-create.component';
import {MessageService} from 'primeng/components/common/messageservice';
import {SplitButtonModule} from 'primeng/primeng';
import {MenuModule, MenuItem} from 'primeng/primeng';
import {NoteMessageComponent} from './notes/note-search/note-detail/note-message/note-message.component';
import {NoteAttachmentComponent} from './notes/note-search/note-detail/note-attachment/note-attachment.component';
import {ProgressBarModule} from 'primeng/primeng';
import {ProgressSpinnerModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';

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
    LoginComponent,
    NoteCreateComponent,
    NoteMessageComponent,
    NoteAttachmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full',
      }]),
    HttpClientModule,
    // PrimeNG Modules Declaration
    ToolbarModule,
    PanelModule,
    DataTableModule,
    DialogModule,
    ButtonModule,
    GrowlModule,
    EditorModule,
    OrderListModule,
    SplitButtonModule,
    MenuModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    TooltipModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
