import { Injectable } from '@angular/core';
import {BaseRequestService} from './base-request.service';


@Injectable({
  providedIn: 'root'
})


export class GlossaryService {
  public englishGlossary: any[] = [];
  public esGlossary: any[] = [];
  public bothGlossary: any[] = [];
  constructor(private baseRequestService: BaseRequestService){
    this.getAllGlossary();
  }

  public getAllGlossary() {
    this.baseRequestService.baseGetRequest('https://www.healthcare.gov/api/glossary.json').subscribe(res => {
      this.bothGlossary = res['glossary'];
      this.bothGlossary.forEach(glossary => {
        if(glossary.lang === 'en') {
          this.englishGlossary.push(glossary);
        } else if (glossary.lang === 'es') {
          this.esGlossary.push(glossary);
        }
      });
      console.log(this.englishGlossary);
    });
  }
}
