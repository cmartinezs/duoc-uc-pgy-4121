import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorePage } from './store.page';

describe('StorePage', () => {
  let component: StorePage;
  let fixture: ComponentFixture<StorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
