import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponentNotMyFlixComponent } from './not-found-component-not-my-flix.component';

describe('NotFoundComponentNotMyFlixComponent', () => {
  let component: NotFoundComponentNotMyFlixComponent;
  let fixture: ComponentFixture<NotFoundComponentNotMyFlixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponentNotMyFlixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponentNotMyFlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
