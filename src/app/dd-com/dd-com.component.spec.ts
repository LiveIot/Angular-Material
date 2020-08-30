import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DdComComponent } from './dd-com.component';

describe('DdComComponent', () => {
  let component: DdComComponent;
  let fixture: ComponentFixture<DdComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdComComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
