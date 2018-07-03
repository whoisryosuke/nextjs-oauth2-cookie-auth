# NextJS OAuth2 Authentication Example

NextJS app that uses an external OAuth2 API to login users through a callback system, ultimately storing a JWT in a cookie.

> Material UI is from an old project, you can just cut those chunks out if you want.

## Tools

* NextJS
* ReactJS
* Material UI
* NodeJS
* Express

## Development

`npm run dev`

Deploys an Express server, configured in the `server.js` file in project root, and builds the project using Next.

### User Accounts

Spin up a development server, create a new account, and use those login details in this app. `AuthService` class assumes dev server is located at `http://localhost/`, but also accepts any URL when you make a "new" class (`new AuthService('http://localhost:4849')`). See the [seshsource-api](https://github.com/whoisryosuke/seshsource-api) repo for more details.

## Deployment

`npm run build`

## Todo

* [✅] - Dynamic routing using Express
* [✅] - Login Authentication using OAuth2.0 / JWT tokens
* [✅] - Protected/Authenticated Routes using HOCs (supporting SSR!)
* [✅] - ENV files implemented using dotenv
* [✅] - OAuth2 callback login using Express
* [✅] - CSRF middleware protection for forms
* [✅] - Cookie parser added