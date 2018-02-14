import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number;
  @Input() rating: number;

@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
      this.starWidth = (this.rating * (86 / 5));
  }

  onClick(): void{
    this.ratingClicked.emit("The rating " + this.rating + " was clicked.");
  }

}
