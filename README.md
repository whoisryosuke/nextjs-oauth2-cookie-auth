# SeshSource Dashboard

Dashboard for admins and organizers on [SeshSource.com](http://seshsource.com). Allows for CRUD functionality of events, tickets, etc.

## Tools

* NextJS
* ReactJS
* Material UI
* NodeJS
* Express

## Development

`npm run dev`

Deploys an Express server, configured in the `server.js` file in project root, and builds the project using Next.

### Admin / Organizer Access

Spin up a development server, create a new account, and use those login details in this app. `AuthService` class assumes dev server is located at `http://localhost/`, but also accepts any URL when you make a "new" class (`new AuthService('http://localhost:4849')`). See the [seshsource-api](https://github.com/whoisryosuke/seshsource-api) repo for more details.

## Deployment

`npm run build`

## Todo

* [✅] - Redux implemented with NextJS
* [✅] - Redux store persisted across reloads (redux-persist)
* [✅] - Dynamic routing using Express
* [✅] - Material UI implemented
* [✅] - Basic Dashboard styling
* [✅] - CRUD functionality for Events
* [✅] - Login Authentication using OAuth2.0 / JWT tokens
* [✅] - Protected/Authenticated Routes using HOCs (supporting SSR!)
* [✅] - ENV files implemented using dotenv
* [✅] - OAuth2 callback login using Express
* [✅] - CSRF middleware protection for forms
* [✅] - Cookie parser added
* [] - Refactored any random `fetch()` calls in pages into a helper class
* [] - Manage page - Convert `<List>` to `<Table>`
* [] - Restyled theme with SeshSource colors/branding
* [] - Added SeshSource logo
* [] - Fix user auth check in Header (conditional that shows user profile icon on right side of header - maybe use localStorage token check for now - pass down authService prop drill)
* [] - Add grid to Event Profile page
* [] - Trigger refresh of Manage Events page when user creates event and is redirected (currently shows old data, maybe fetch again on React lifecycle)