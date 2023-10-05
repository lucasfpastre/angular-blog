import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  bookCover: string = "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg";
  @Input()
  bookTitle: string = "FOURTH WING";
  @Input()
  bookAuthor: string = "Rebecca Yarros";

  ngOnInit(): void {

  }

}
