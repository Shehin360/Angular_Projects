// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
// import { provideRouter } from '@angular/router';  
// import { routes } from './app/app.routes';

// bootstrapApplication(App, {
//   providers: [provideRouter(routes)]
// }).catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // Assuming you've renamed AppComponent to App
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
