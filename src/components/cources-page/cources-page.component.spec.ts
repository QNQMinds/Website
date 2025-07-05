import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesPageComponent } from './cources-page.component';

describe('CourcesPageComponent', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourcesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
