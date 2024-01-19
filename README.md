# Angular - My Notes 2
## Angular Routing
In Angular architecture, to navigate from one view to another or to transition between components, we can use the Angular Router module.
Angular Router is a module.
Capabilities of this module include:
    - Navigating to a specific component based on the URL entered in the address bar.
    - Sending query string values to a component.
    - Enabling and using browser's forward and back buttons.
    - Dynamically loading views.
    - Performing authorization checks on routes.

### Angular Router Components
**Router:** A service that activates the browser's back/forward buttons and enables navigation between components.
**Route:** The structure in Angular that allows us to define the routes of components. Each route consists of a path and a component that matches that path.
**Routes:** An array containing all the routes.
**Router Outlet:** The structure that indicates where in the view the route that matches the URL in the browser's address bar will be displayed.
**Router Link:** A directive that links an HTML element, typically an `<a>` tag, to a route.
**Router Link Active:** Another directive used with RouterLink. It gives an active CSS class to the `<a>` tag where RouterLink is used, based on the current route status.
**RouterState:** An object containing all information and states about a route. Used to track which route the application is on and how the route changes.

### Angular Router Setup
1. Setting the `<base href>` element.
2. Defining routes for components.
3. Registering routes to implement them in the application.
4. Setting the redirect route/URL and matching it with any HTML element.
5. Determining the area where the component for the new route will be loaded.

### Wildcard Route
In an Angular application, if a URL does not match any of the defined routes, a Wildcard Route is invoked.
Example definition: `{path: "**", component: ErrorComponent}`

## Location Strategies
Angular Router, while facilitating the necessary redirections as a result of requests to different pages of the application, does so according to specific location strategies.
These are HashLocationStrategy and PathLocationStrategy.
- HashLocationStrategy uses the `#` symbol. It is especially useful in older browsers for detecting URL changes and performing redirections.
- PathLocationStrategy uses normal URLs for redirection. Preferred especially in modern browsers and is the **default** strategy for Angular applications.

### Why Are They Used?
Since Angular applications are essentially single-page applications, they need to function without sending the URL to the server and without reloading the page on new page requests by users. Therefore, URLs in Angular applications are used locally and only exhibit browser-based behavior. Angular uses location strategies to display this behavior.

## What is a Route Parameter?
Route parameters are structures that allow us to create variables within the URL template of a web application and carry data in these variables. In other words, they are parameters that enable us to transmit data via the URL to the page matching the requested URL.
Example parameter definition at the data carrying location: `{path: "products/:id", component: ProductComponent}`

### Usage of the `ActivatedRoute` Object
This object allows us to perform operations related to the currently active route. With this object, we can obtain route parameters and query string values from the URL and process them for our purpose.
The `ActivatedRoute` object consists of an `ActivatedRouteSnapshot`, which is a snapshot of the routing state at the moment the component is activated. Example of accessing parameters within a component:
```javascript
constructor(private activatedRoute: ActivatedRoute){
    if(activatedRoute.snapshot.paramMap.has("id"))
    this.productId = Number(activatedRoute.snapshot.paramMap.get("id"));
}
```

### Reading URL Parameters Using Observable
`ActivatedRoute` can enable us to read route parameters with Observable behavior.

### Snapshot or Observable?
**Using structures with Observable behavior will always provide a healthier solution.** With the `.subscribe()` method, you can dynamically monitor any changes that might occur in the parameters you are tracking.

## What are Child Routes/Nested Routes?
- In Angular architecture, components follow a tree/hierarchy structure with a root component at the top.
- An application can be designed with components nested within each other using selectors. Additionally, each of these components can be designed and used with the nested/child routes feature by assigning routes to them.

### Child Route Definition
```javascript
  path: 'products', component ProductComponent,
  children: [
    {[ath: 'detail/:id', component: ProductDetailComponent]}
  ]
```

## Angular Guards
In Angular, Guard structures are mechanisms used to grant or deny access to routes in the application. There are five different Guard structures, which are:
- CanActivate: Typically used for authorization checks when a user wants to access a target component.
- CanActivateGuard: While CanActivate is valid for main routes, it will not work for sub-routes. In such cases, CanActivateChild comes into play.
- Resolve: Often used in situations where the requested component needs data from an endpoint to become functional, allowing for data to be fetched and prepared from the API before redirection to the page.
- CanLoad: Controls and, if necessary, prevents the loading of modules with lazy loading. Consequently, all elements within the related module are protected, contributing to partial performance improvement.
- CanDeactivate: Crucially important in pages where the user performs operations, particularly when there might be unsaved data.
- CanMatch: Allows us to perform multiple conditional checks for the same route.
Apart from these, with the development of the `CanMatch` guard structure, `CanLoad` has been completely deprecated.

### Execution Order of Guards
CanMatch => CanActivate => (CanActivateChild) => Resolve => CanDeactivate

### Why Did Functional Router Guard Come About?
- The transition to the Functional Router Guard structure can be said to stem from a desire to operate in a simplified JavaScript format.
- With the Functional Router Guard feature, guards now possess the required flexibility and are merely functional in definition, allowing for faster definition and use.
- With the introduction of the inject function in Angular 14, we are no longer obliged to apply dependency injection through the constructor, and we can request the desired object from the provider within functions.
- Thus, for a function that will perform a guard operation, we can now meet our needs through a pure function focused directly on the task, without the need for defining a whole class, constructor, etc.

### What are the Advantages of Functional Router Guard?
- Short, easily readable code with reduced standard
- Simplified logic
- Ability to define guards in route definition
- Improved performance without the extra burden of class creation
