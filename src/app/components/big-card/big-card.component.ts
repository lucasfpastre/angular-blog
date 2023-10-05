import { Component, Input, OnInit } from '@angular/core';
import { localData } from '../../data/localData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  bookCover: string = "";
  @Input()
  bookTitle: string = "";
  @Input()
  bookIntro: string = "";
  @Input()
  bookAuthor: string = "";
  @Input()
  bookId: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setValues(this.bookId)
  }

  setValues(id: string | null) {
    console.log(id)
    const result = localData.filter(article => article.id)[Number(id)]
    this.bookCover = result.cover
    this.bookTitle = result.title
    this.bookAuthor = result.author
    this.bookIntro = result.description
  }

}
