# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

\\\\\\\\\\\\\\\/////////////// \ Настройка pre-commit хуков /
\\\\\\\\\\\\\\\/////////////// -->

1 - Установка зависимостей Установить в проект следующие пакеты.

npm install --save-dev prettier eslint

2 - Инициализация lint-staged и husky Пользователям MacOS и Linux систем
необходимо выполнить в терминале следующую команду. Она установит и настроит
husky и lint-staged в зависимости от инструментов качества кода из зависимостей
проекта в package.json.

npx mrm lint-staged

Пользователям Windows необходимо выполнить следующую команду. Она делает тоже
самое.

npx mrm@2 lint-staged

3 - Интерграция плагинов Ссылки на документацию по интеграции плагинов в
популярные редакторы.

Prettier editor integration ESLint editor integration 4 - Настройки VSCode Для
комфортной работы, после установки плагинов, нужно добавить несколько настроек
редактора для автосохранения и форматирования файлов.

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

настройки можно вынести в отдельные файлики: Делается поле того как поднял реакт
апп.

1.  .huskyrc

{ "hooks": { "pre-commit": "lint-staged" } }

2.  .lintstagedrc { "src/**/\*.{json,css,scss,md}": ["prettier --write"],
    "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write","eslint --fix"]  
    }
3.  npm install --save-dev prettier husky lint-staged

--файлик: .prettierrc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false,
"semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always"
}

\\\\\\\\\\\\\\\\\\///////////////////// how-to-deploy-react-app-in-github-pages
\\\\\\\\\\\\\\\\\\///////////////////// Procedure :

1- First create a repository named my-app using create-react-app.

npm init react-app my-app

2- We need to install GitHub Pages package as a dev-dependency.

cd my-app npm install gh-pages --save-dev

3- Add properties to package.json file.

The first property we need to add at the top level homepage second we will
define this as a string and the value will be
"http://{username}.github.io/{repo-name}" {username} is your GitHub username,
and {repo-name} is the name of the GitHub repository you created it will look
like this :

"homepage": "http://Ievgen-Rybalko.github.io/goit-react-hw-02-feedback"

Second in the existing scripts property we to need to add predeploy and deploy.

"scripts": { //... "predeploy": "npm run build", "deploy": "gh-pages -d build" }

package.json example

4- Create a Github repository and initialize it and add it as a remote in your
local git repository.

Now, create a remote GitHub repository with your app name and go back initialize
this git init add it as remote git remote add origin
git@github.com:Yuribenjamin/my-app.git

5- Now deploy it to GitHub Pages.

just run the following command :

npm run deploy
