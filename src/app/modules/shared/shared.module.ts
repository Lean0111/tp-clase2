import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes Locales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Importamos para acceder a todas las rutas de la página
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  // Componentes LOCALES del módulo -> Creados por nosotros
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
// Archivos, componetes de la web o de otro módulo de los que queremos tener acceso
/* 
Archivo de rutas(para el navegador), componentes de material que vienen de internet
componentes que vienen desde otro módulo (por ejemplo, unna card)
*/
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  // Expone los componetes locales para que puedan ser mostrados en el resto de la página
  // Expone componentes de la web para poder tener acceso a ellos en el propio módulo
  exports: [
NavbarComponent,
FooterComponent
  ]
})
export class SharedModule { }
