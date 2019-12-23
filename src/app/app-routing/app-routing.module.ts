import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth/auth.guard';
import { AttributeBindingComponent } from '../components/bindings/attribute-binding/attribute-binding.component';
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { CounterActionsComponent } from '../components/counter-actions/counter-actions/counter-actions.component';
import { ClassBindingComponent } from '../components/bindings/class-binding/class-binding.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ConfirmationGuard } from '../guards/confirmation/confirmation.guard';
import { EventBindingComponent } from '../components/bindings/event-binding/event-binding.component';
import { HomeComponent } from '../components/home/home.component';
import { MessageListComponent } from '../components/components/hooks/message-list/message-list.component';
import { ParentComponent } from '../components/components/hooks/parent/parent.component';
import { PropertyBindingComponent } from '../components/bindings/property-binding/property-binding.component';
import { PlaceholderComponent } from '../components/users/placeholder/placeholder.component';
import { StyleBindingComponent } from '../components/bindings/style-binding/style-binding.component';
import { StringInterpolationComponent } from '../components/bindings/string-interpolation/string-interpolation.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/users/user-details/user-details.component';
import { UsersResolveGuard } from '../guards/UsersResolve/users-resolve.guard';
import { UserService } from '../services/user/user.service';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'attributebinding', component: AttributeBindingComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'counteractions', component: CounterActionsComponent },
  { path: 'classbinding', component: ClassBindingComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'eventbinding', component: EventBindingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'messagelist', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ] },
  { path: 'parent', component: ParentComponent },
  { path: 'propertybinding', component: PropertyBindingComponent },
  { path: 'stylebinding', component: StyleBindingComponent },
  { path: 'stringinterpolation', component: StringInterpolationComponent },
  { path: 'users', component: UsersComponent, canActivateChild: [ AuthGuard ], resolve: { users: UsersResolveGuard } , pathMatch: 'prefix', children: [
      { path: ':id', component: UserDetailsComponent},
      { path: '', component: PlaceholderComponent }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard, UsersResolveGuard , UserService ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
