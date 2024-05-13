import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { WelcComponent } from './welc.component';

describe('WelcComponent', () => {
  let component: WelcComponent;
  let fixture: ComponentFixture<WelcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
