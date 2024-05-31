import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAddPage } from './dados-add.page';

describe('DadosAddPage', () => {
  let component: DadosAddPage;
  let fixture: ComponentFixture<DadosAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
