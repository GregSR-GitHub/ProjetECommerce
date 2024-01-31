import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisProduitComponent } from './avis-produit.component';

describe('AvisProduitComponent', () => {
  let component: AvisProduitComponent;
  let fixture: ComponentFixture<AvisProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
