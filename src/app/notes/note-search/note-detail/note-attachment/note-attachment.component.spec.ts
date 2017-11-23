import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAttachmentComponent } from './note-attachment.component';

describe('NoteAttachmentComponent', () => {
  let component: NoteAttachmentComponent;
  let fixture: ComponentFixture<NoteAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
