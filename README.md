# React SSR Boilerplate
Server side rendering with React.js React Router v4 and React Helmet 

## Requirements
- Node.js must be installed on your machine. 
- NPM or Yarn

## Usage
- Bundle Source
    ```sh
    $ yarn run build
    ```
    
- Run Development Server on http://0.0.0.0:3000
    ```sh
    $ yarn run dev
    ```
    
- Run Production Server on http://0.0.0.0:8000
    ```sh
    $ yarn run prod
    ```
    You must bundle source first!
    
## What Will We Use?
#### For Production
| Package Name | Version | Description |
| ------------ | ------- | ----------- |
| react | 16.1 |  Core package needed to create React elements and React components |
| react-dom | 16.1 | Provides DOM-specific methods |
| react-helmet | 5.2 | Manage all of your changes to the document head |
| react-router-dom | 4.2 | Declarative routing |

#### For Development
| Package Name | Version | Description |
| ------------ | ------- | ----------- |
| babel-cli | 6.26 | Babel command line |
| babel-core | 6.26 | Compiler for writing next generation JavaScript |
| babel-loader | 7.1 | Allows transpiling JavaScript files using Babel and webpack |
| babel-preset-env | 1.6 | Preset that compiles ES2015+  |
| babel-preset-react | 6.24 | Preset that transforms JSX syntax into createElement |
| babel-preset-stage-0 | 6.24 | Preset that allows us to use ES7 features like decorators and async / await. |
| express | 4.16 | Node Web Framework that allow for makeing SSR  |
| path| 0.12 | Utilities for working with file and directory paths |
| webpack | 3.8 | Module Bundler that bundle JavaScript files for usage in a browser |
| webpack-dev-middleware | 1.12 | Small middleware that uses webpack to compile assets in-memory and serve them |
| webpack-hot-middleware | 2.20 | Add hot reloading into an existing server |
| webpack-hot-server-middleware | 0.3 | Used in conjunction with webpack-dev-middleware (and optionally webpack-hot-middleware) to hot update Webpack bundles on the server |

## Structure
| xxx | xxx |
| ------------ | ------- |
| public | Public Assets and Bundled JS Files |
| scripts | Development and Production Script |
| src | React Sourcecode |
| ├ api | Backend API like userApi.js, productApi.js |
| ├ components | Dumb components (Reusable components) like Avatar.jsx |
|        └ core | Core or Common components like Button.jsx |
| ├ containers | Container components like App.jsx, Index.jsx |
| └ utilities | Utility functions like Error Handlers, Formatters |
| tests | Testing file **(Unavailable Now)** |
| webpack | Webpack Configuration files |



