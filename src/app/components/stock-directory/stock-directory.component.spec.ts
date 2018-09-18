import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDirectoryComponent } from './stock-directory.component';

describe('StockDirectoryComponent', () => {
  let component: StockDirectoryComponent;
  let fixture: ComponentFixture<StockDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
