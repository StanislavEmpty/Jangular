import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechnicStoreComponent } from './home-technic-store.component';

describe('HomeTechnicStoreComponent', () => {
  let component: HomeTechnicStoreComponent;
  let fixture: ComponentFixture<HomeTechnicStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTechnicStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTechnicStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
