import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { Pipe1Pipe } from './CustomPipes/pipe1.pipe';
import { SearchOptimizationPipe } from './CustomPipes/search-optimization.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    Pipe1Pipe,
    SearchOptimizationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
