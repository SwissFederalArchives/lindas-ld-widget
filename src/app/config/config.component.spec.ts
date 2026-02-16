import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ConfigComponent } from './config.component';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfigComponent ],
      providers: [ provideRouter([]) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
