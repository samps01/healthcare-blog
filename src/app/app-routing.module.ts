import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import {GlossaryComponent} from './glossary/glossary.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '',  redirectTo: '/blog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
