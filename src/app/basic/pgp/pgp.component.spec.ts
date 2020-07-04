import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgpComponent } from './pgp.component';

describe('PgpComponent', () => {
  let component: PgpComponent;
  let fixture: ComponentFixture<PgpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render PGP policy title in material tag ', async(() => {
    const fixture = TestBed.createComponent(PgpComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('This is my PGP policy');
  }));
});
