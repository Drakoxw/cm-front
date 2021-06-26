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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './data/services/interceptor.service';

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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
