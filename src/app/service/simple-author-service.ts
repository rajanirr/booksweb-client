import { Author } from './author';
import { AuthorService } from './author-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SimpleauthorService implements AuthorService {
  constructor(private http: HttpClient) {
    this.serviceId = ++SimpleauthorService.serviceCount;
    console.log(`SimpleauthorService created with id ${this.serviceId}`);

    this.authors = this.authors = [
      {
        id: '1234389',
        name: ' kalpanaSuresh',
        biography: 'Verygoodwriter',
        dateofbirth: '12/1/1965',
        email: 'kalpanasuresh@gmail.com',
        listofbooks: 'ramav.1, shamav.2,bhamav.3',
      },
      {
        id: '456648',
        name: 'MaryRodgruz',
        biography: 'VerygoodPoemwriter',
        dateofbirth: '17/8/1895',
        email: 'MaryRodgru@gmail.com',
        listofbooks: 'simplelife,Runawaybride',
      },
      {
        id: '48998',
        name: 'SuezMcrawth',
        biography: 'VerygoodPlaywriter',
        dateofbirth: '17 / 8 / 1895',
        email: 'SuezMcrawth@gmail.com',
        listofbooks: 'TestwithAlpho,BEHINDTHEbar',
      },
      {
        id: '143698',
        name: 'ShymalDinakar',
        biography: 'Verygoodstorywriter',
        dateofbirth: '17/8/1985',
        email: 'ShymalDinakar@gmail.com',
        listofbooks: 'RahakahaRabba,GreatIndianStory',
      },
    ];
  }
  static serviceCount = 0;

  private authors: Author[];
  private serviceId;

  addauthor(author: Author): boolean {
    if (author && author.id && author.name) {
      //  this.http.post(('localhost:8030/api/author/addauthor/',author).subscribe((output)=>{
      //   console.log(output)
      // })
      this.authors.push(author);
      return true;
    } else {
      return false;
    }
  }

  getauthors(): Author[] {
    //  this.http.get('('localhost:8030/api/author/findall).subscribe((output)=>{
    //   console.log(output)
    // })
    return this.authors;
  }

  getauthor(id: string): Author {
    //  this.http.get('localhost:8030/api/author/find/'+ id).subscribe((output)=>{
    //   console.log(output)
    // })
    return this.authors.find((b) => b.id === id);
  }
  removeauthor(id: string) {
    // this.http.delete('localhost:8030/api/author/removeauthor/'+ id).subscribe((output)=>{
    //   console.log(output)
    // })
    const newList = [];
    for (const author of this.authors) {
      if (author.id !== id) {
        newList.push(author);
      }
    }
    this.authors = newList;
    console.log('deleted the list');
    console.log(this.authors);
  }
}
