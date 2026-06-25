import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {

  itemName = input<string>('');

  confirm = output<void>();
  cancel = output<void>();

}
