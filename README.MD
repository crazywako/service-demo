# SERVICE REQUEST DEMO 
- For quick demo purposes

### Username and password
- Use any username or password

## Hosting
- Just host `/dist` folder to any webserver on root path.
    - ex. https://example.com/
    
- Or use included NodeJS Express server with `npm run start` and http://127.0.0.1:8080

## Install
- First do `npm install`
- To use NodeJS Express server
    - `npm run build && npm run start`
    
- To use webpack-dev-server
    - `npm run start-web`
    
### Extra
- If you wan't to change root path / public path
    - Use `./config.js` and line `publicPath: "/service-demo"` and run `npm run build` to make new production version
    - Now this should run example on http://example.com/service-demo
    
- If you wan't to change port do it on `./.env` (first copy .env.default -> .env)
- Uses `IndexedDB` to remove backend requirement


