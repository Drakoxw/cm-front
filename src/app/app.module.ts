import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletorComponent } from './layout/skeletor/skeletor.component';
import { ModulesModule } from './modules/modules.module';
import { LoginComponent } from './layout/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SkeletorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,

    ModulesModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
