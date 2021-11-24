import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component implements OnInit {

  public badContent: string[] = [];
  public badWord: string = '';
  public cenzorText: string = '';
  public textHere = 'text here..';
  public wordHere = 'word here..'

  private re = /\w/g;

  constructor() { }

  ngOnInit(): void {
  }

  addBadWord(): void {
    if (this.badWord.trim()) {
      this.badContent.push(this.badWord.trim());
      this.badWord = '';
      this.wordHere = 'word here..';
    }
    else {
      this.wordHere = 'Please write a word!';
    }
  }
  removeBadWords(): void {
    this.badContent.length = 0;
  }

  cenzor(): void {


    if (this.cenzorText.length > 0) {
      const textCenzor: string[] = this.cenzorText.split(" ");
      this.cenzorText = textCenzor.map(elem => this.badContent.includes(elem) ? elem.replace(this.re, '*') : elem).join(' ');
      this.textHere = `text here.. `;
    }
    else {
      this.textHere = `Please write a text!`;
    }
  }

}
