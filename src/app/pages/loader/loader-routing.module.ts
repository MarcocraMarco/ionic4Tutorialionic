import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderPage } from './loader.page';

const routes: Routes = [
  {
    path: '', //this path is what will be searched in the url, keeping this format, it loads the page -> /loader, if here I add
    //path:'test' then the page won't load anymore, in rder to work /loader/test
    component: LoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderPageRoutingModule {}
