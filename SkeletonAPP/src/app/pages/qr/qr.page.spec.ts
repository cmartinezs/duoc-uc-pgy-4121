import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPage } from './qr.page';

describe('QrPage', () => {
  let component: QrPage;
  let fixture: ComponentFixture<QrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
