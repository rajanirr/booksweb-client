import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { SimpleauthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-composite',
  templateUrl: './author-composite.component.html',
  styleUrls: ['./author-composite.component.css'],
})
export class AuthorCompositeComponent implements OnInit {
  public author: Author[];
  public selectedauthor: Author;

  constructor(private authorService: SimpleauthorService) {}

  ngOnInit(): void {
    this.author = this.authorService.getauthors();

    this.selectedauthor = this.author[0];
  }
  selectauthor(author: Author) {
    this.selectedauthor = author;
  }
}
