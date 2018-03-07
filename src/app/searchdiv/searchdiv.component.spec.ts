import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdivComponent } from './searchdiv.component';

describe('SearchdivComponent', () => {
  let component: SearchdivComponent;
  let fixture: ComponentFixture<SearchdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
