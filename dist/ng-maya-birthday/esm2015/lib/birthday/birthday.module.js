/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MayanNumberModule } from 'ng-maya-number';
import { SharedModule } from 'shared';
import { BirthdayComponent } from './birthday.component';
import { ReadingsModule } from './hover-card/readings.module';
import { DateInputComponent } from './date-input/date-input';
export class BirthdayModule {
}
BirthdayModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BirthdayComponent, DateInputComponent],
                imports: [
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MayanNumberModule,
                    SharedModule,
                    ReadingsModule,
                ],
                exports: [
                    BirthdayComponent,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MayanNumberModule,
                    SharedModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlydGhkYXkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1iaXJ0aGRheS8iLCJzb3VyY2VzIjpbImxpYi9iaXJ0aGRheS9iaXJ0aGRheS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFzQjdELE1BQU0sT0FBTyxjQUFjOzs7WUFwQjFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztnQkFDckQsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUVuQixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osY0FBYztpQkFFZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFFbkIsaUJBQWlCO29CQUNqQixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbmltcG9ydCB7IE1heWFuTnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctbWF5YS1udW1iZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnc2hhcmVkJztcblxuaW1wb3J0IHsgQmlydGhkYXlDb21wb25lbnQgfSBmcm9tICcuL2JpcnRoZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFkaW5nc01vZHVsZSB9IGZyb20gJy4vaG92ZXItY2FyZC9yZWFkaW5ncy5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWlucHV0L2RhdGUtaW5wdXQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCaXJ0aGRheUNvbXBvbmVudCwgRGF0ZUlucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcblxuICAgIE1heWFuTnVtYmVyTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSZWFkaW5nc01vZHVsZSxcblxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmlydGhkYXlDb21wb25lbnQsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuXG4gICAgTWF5YW5OdW1iZXJNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmlydGhkYXlNb2R1bGUgeyB9XG4iXX0=