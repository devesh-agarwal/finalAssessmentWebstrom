import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmoji: string;

  constructor(public dialog: MatDialogModule) {}

  openEmojiDialog() {
    const dialog = this.dialog.open(DialogComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.selectedEmoji = selection;
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }
}
}
