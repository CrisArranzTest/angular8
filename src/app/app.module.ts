//LIBRERIAS ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//MODULOS
import { CoreModule } from './core/core.module';

//COMPONENTES
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChildComponent } from './components/components/hooks/child/child.component';
import { ChatComponent } from './components/chat/chat.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';
import { CounterActionsComponent } from './components/counter-actions/counter-actions/counter-actions.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponent } from './components/hello/hello.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageListComponent } from './components/components/hooks/message-list/message-list.component';
import { MessageComponent } from './components/components/hooks/message/message.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { ParentComponent } from './components/components/hooks/parent/parent.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { SafePipe } from './pipes/safe/safe.pipe';
import { StyleBindingComponent } from './components/bindings/style-binding/style-binding.component';
import { TransformDirective } from './transform.directive';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserService } from './services/user/user.service';
import { PlaceholderComponent } from './components/users/placeholder/placeholder.component';


@NgModule({
  declarations: [ AppComponent, UserComponent, TransformDirective, SafePipe, ChatComponent, UsersComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, HelloComponent, CounterActionsComponent, AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent, MessageListComponent, MessageComponent, ChildComponent, ParentComponent, HomeComponent, AboutComponent, BlogComponent, HeaderComponent, UserDetailsComponent, PlaceholderComponent],
  imports: [ BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, FormsModule , HttpClientModule],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
