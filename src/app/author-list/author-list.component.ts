import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { RangeInfo } from '../ca-range/ca-range.component';
import { SimpleauthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  public authors: Author[];

  constructor(private authorService: SimpleauthorService) {}

  ngOnInit(): void {
    this.authors = this.authorService.getauthors(); // components gets the author from the service
  }

  onImageWidthInfoChanged(r: RangeInfo) {
    // console.log(r);
  }
}
