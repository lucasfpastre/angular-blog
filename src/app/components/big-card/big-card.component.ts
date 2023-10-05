import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  bookCover: string = ""
  @Input()
  bookTitle: string = ""
  @Input()
  bookIntro: string = ""
  @Input()
  bookAuthor: string = ""
  @Input()
  bookUrl: string = ""

  ngOnInit(): void {

  }

}
