import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { AuthGaurd } from "../auth/auth.gaurd";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    canActivate: [AuthGaurd],
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RecipiesRoutingModule {}
