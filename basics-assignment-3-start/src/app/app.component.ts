import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayParagraph = false;
  //clicks: Array<> = new Array();
  clicks = [];

   changeParagraphDisplay() {
   this.displayParagraph = !this.displayParagraph;
   // this.clicks.push(this.clicks.length + 1);
     this.clicks.push(new Date());
  }

}
