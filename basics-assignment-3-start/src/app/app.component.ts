import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _displayParagraph = false;
  var clickEvents: Array<string>;

  changeParagraphDisplay() {
    this._displayParagraph = !this._displayParagraph;
    this.clickEvents.push('Click' + (this.clickEvents.length + 1));
  }

}
