import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css'],
})
export class GridPageComponent {
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

  resetFields() {
    if (
      (document.getElementById('1') !== null,
      document.getElementById('2') !== null,
      document.getElementById('3') !== null,
      document.getElementById('4') !== null)
    ) {
      console.log(document.getElementById('1')?.style);
    }
  }

  func() {
    console.log('asdasd');
  }

  getAndChangeColor() {
    this.clickEvent.emit(event?.target);
  }
}
