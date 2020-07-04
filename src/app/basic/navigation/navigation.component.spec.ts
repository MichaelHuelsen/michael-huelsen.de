import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render home button', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn_home').textContent).toContain('Home');
  }));

  it('should render pgp button', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn_pgp').textContent).toContain('PGP');
  }));

  it('should render imprint button', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn_imprint').textContent).toContain('Imprint');
  }));

  /*
  it('should render development button', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn_development').textContent).toContain('Development');
  }));
  */

});
