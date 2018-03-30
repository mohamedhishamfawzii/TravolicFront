import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdivresultsComponent } from './searchdivresults.component';

describe('SearchdivresultsComponent', () => {
  let component: SearchdivresultsComponent;
  let fixture: ComponentFixture<SearchdivresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdivresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdivresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
