import { NgModule } from '@angular/core';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart';
import { CardComponent } from './card/card';
import { GroupComponent } from './group/group';
import { Card2Component } from './card2/card2';
import { AppHeaderComponent } from './app-header/app-header';
@NgModule({
	declarations: [DoughnutChartComponent,
    CardComponent,
    GroupComponent,
    Card2Component,
    AppHeaderComponent],
	imports: [],
	exports: [DoughnutChartComponent,
    CardComponent,
    GroupComponent,
    Card2Component,
    AppHeaderComponent]
})
export class ComponentsModule {}
