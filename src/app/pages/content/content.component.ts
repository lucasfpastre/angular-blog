import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localData } from '../../data/localData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  bookCover: string = ""
  bookTitle: string = ""
  bookAuthor: string = ""
  bookDesc: string = ""
  bookUrl: string = ""
  @Input()
  id: string | null= ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValues(this.id)
  }

  setValues(id: string | null) {
    const result = localData.filter(article => article.id == id)[0]
    this.bookCover = result.cover
    this.bookTitle = result.title
    this.bookAuthor = result.author
    this.bookDesc = result.description
    this.bookUrl = result.url

  }

}
