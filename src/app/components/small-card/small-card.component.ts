import { Component, Input, OnInit } from '@angular/core';
import { localData } from '../../data/localData'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  bookCover: string = "";
  @Input()
  bookTitle: string = "";
  @Input()
  bookAuthor: string = "";
  @Input()
  bookId: string | null = "";

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setValues(this.bookId);
  }

  setValues(id: string | null) {
    const result = localData.filter(article => article.id)[Number(id)];
    this.bookCover = result.cover;
    this.bookTitle = result.title;
    this.bookAuthor = result.author;

  }

}
