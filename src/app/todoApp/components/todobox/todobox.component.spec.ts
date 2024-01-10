import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoboxComponent } from './todobox.component';

describe('TodoboxComponent', () => {
  let component: TodoboxComponent;
  let fixture: ComponentFixture<TodoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
