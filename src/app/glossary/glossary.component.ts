import { Component, OnInit } from '@angular/core';
import {GlossaryService} from '../services/glossary.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {
  public languageArr: string[] = ['English', 'Spanish', 'Both'];
  public selectedLang = '';
  public searchQuery = '';
  public glossaryList: any[] = [];
  constructor(public glossaryService: GlossaryService) {
   this.glossaryList = this.glossaryService.englishGlossary;
  }

  ngOnInit() {
  }

  public showContent(content) {
    return content.replace(/<[^>]*>/g, '');
  }

  public search(term) {
    this.getLanguage(this.selectedLang);
    const filteredArray = this.glossaryList.filter(glossary => {
      if (glossary.content.toLowerCase().includes(term.toLowerCase())) {
        return glossary;
      }
    });
    this.glossaryList = filteredArray;
  }

  public getLanguage(lang) {
    if (lang === 'English' || lang === '') {
      this.glossaryList = this.glossaryService.englishGlossary;
    } else if (lang === 'Spanish') {
      this.glossaryList = this.glossaryService.esGlossary;
    } else if (lang === 'Both') {
      this.glossaryList = this.glossaryService.bothGlossary;
    }
  }
}
