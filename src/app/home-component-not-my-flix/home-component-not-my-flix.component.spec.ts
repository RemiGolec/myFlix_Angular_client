import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentNotMyFlixComponent } from './home-component-not-my-flix.component';

describe('HomeComponentNotMyFlixComponent', () => {
  let component: HomeComponentNotMyFlixComponent;
  let fixture: ComponentFixture<HomeComponentNotMyFlixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentNotMyFlixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentNotMyFlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
