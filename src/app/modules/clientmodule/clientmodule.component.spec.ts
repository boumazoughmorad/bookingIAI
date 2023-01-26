import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmoduleComponent } from './clientmodule.component';

describe('ClientmoduleComponent', () => {
  let component: ClientmoduleComponent;
  let fixture: ComponentFixture<ClientmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
