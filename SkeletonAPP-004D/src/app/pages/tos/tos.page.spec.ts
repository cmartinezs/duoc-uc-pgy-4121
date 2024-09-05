import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TosPage } from './tos.page';

describe('TosPage', () => {
  let component: TosPage;
  let fixture: ComponentFixture<TosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
