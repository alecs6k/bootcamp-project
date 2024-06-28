import { HomeComponent } from "./dashboard/home/home.component";
import { NotFountComponent } from "./dashboard/not-found/not-found.component";
import { AddEmployeeComponent } from "./dashboard/employee/add-employee/add-employee.component";
import { SearchEmployeeComponent } from "./dashboard/employee/search-employee/search-employee.component";
import { LocalStoreService } from "./services/local-store.service";
import { DetailsEmployeeComponent } from "./dashboard/employee/details-employee/details-employee.component";
import { ProfileInformationComponent } from "./dashboard/employee/profile-information/profile-information.component";
import { UpdateEmployeeComponent } from "./dashboard/employee/update-employee/update-employee.component";

const routes = [
  { path: "/top", component: HomeComponent, permissions: ["admin", "user"] },
  {
    path: "/top/home",
    component: HomeComponent,
    permissions: ["admin", "user"],
  },
  {
    path: "/top/dashboard",
    component: HomeComponent,
    permissions: ["admin", "user"],
  },
  {
    path: "/top/add-employee",
    component: AddEmployeeComponent,
    permissions: ["admin"],
  },
  {
    path: "/top/update-employee",
    component: UpdateEmployeeComponent,
    permissions: ["admin"],
  },
  {
    path: "/top/search-employee",
    component: SearchEmployeeComponent,
    permissions: ["admin"],
  },
  {
    path: "/top/add-employee",
    component: AddEmployeeComponent,
    permissions: ["admin"],
  },
  {
    path: "/top/details-employee",
    component: DetailsEmployeeComponent,
    permissions: ["admin"],
  },
  {
    path: "/top/profile-information",
    component: ProfileInformationComponent,
    permissions: ["admin", "user"],
  },
];
const appRoutingModule = (router) => {
  const localStorage = new LocalStoreService();
  const rolUser = localStorage.getUser();
  router = router.toLocaleLowerCase();
  let resultRouteFilter = routes.find((route) => route.path === router);
  const result = resultRouteFilter?.permissions.filter(
    (role) => role === rolUser.role
  );
  if (!result || result.length === 0)
    resultRouteFilter = { component: NotFountComponent };
  return new resultRouteFilter.component().build();
};

export { appRoutingModule };
