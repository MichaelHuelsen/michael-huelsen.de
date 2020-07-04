import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintComponent } from './imprint.component';

describe('ImprintComponent', () => {
  let component: ImprintComponent;
  let fixture: ComponentFixture<ImprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render Imprint title in material tag ', async(() => {
    const fixture = TestBed.createComponent(ImprintComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Imprint');
  }));
});
