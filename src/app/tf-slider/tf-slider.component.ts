import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tf-slider',
  templateUrl: './tf-slider.component.html',
  styleUrls: ['./tf-slider.component.css']
})
export class TfSliderComponent {
	// isCollapsed = true;
	@Input('isCollapsed') isCollapsed:boolean;
	// isReverseArrow = false;
	// nzCollapsedWidth:number = 0;
  // width: string | number = '400px';
  // triggerTemplate: TemplateRef<void> | null = null;
  // @ViewChild('trigger') customTrigger: TemplateRef<void>;

  // /** custom trigger can be TemplateRef **/
  // changeTrigger(): void {
  //   this.triggerTemplate = this.customTrigger;
  // }
}
