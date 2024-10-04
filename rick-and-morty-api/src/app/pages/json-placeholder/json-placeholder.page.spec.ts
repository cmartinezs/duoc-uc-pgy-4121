import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPlaceholderPage } from './json-placeholder.page';

describe('JsonPlaceholderPage', () => {
  let component: JsonPlaceholderPage;
  let fixture: ComponentFixture<JsonPlaceholderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPlaceholderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
