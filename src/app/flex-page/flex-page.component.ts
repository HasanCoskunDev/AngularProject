import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.css'],
})
export class FlexPageComponent {
  isDisabled = true;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  submit(kaydet: any) {
    this.checkForValid(
      kaydet.form.controls['form1'].value,
      kaydet.form.controls['form2'].value,
      kaydet.form.controls['form3'].value,
      kaydet.form.controls['form4'].value
    );

    this.resetFields();
  }

  checkForValid(input1: any, input2: any, input3: any, input4: any) {
    if (input1 && input2 && input3 && input4) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  resetFields() {}

  func() {
    console.log('asdasd');
  }

  getAndChangeColor() {
    this.clickEvent.emit(event?.target);
  }
}
