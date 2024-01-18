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
