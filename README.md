# Scaffolding the React App	

Following are the instructions for how to setup the react application using Facebook official create-react-app cli. And for personal use, I added react-hot-reloader and semantic-ui-react. So the tech stack would be:

* create-react-app cli
* react-hot-reloader
* semantic-ui-react


## Instructions

1. Install create-react-app globally and then initiate the react application

    首先globally安装create-react-app
    ```javascript
    npm install -g create-react-app
    ```

    然后在initiate react app
    ```javascript
    create-react-app my-app
    ```
    ```javascript
    cd my-app
    ```

2. Eject the react app to enable the webpack and other configurations 
    ```javascript
    npm run eject
    ```

3. 安装react-hot-reloader
     ```javascript
    npm i --save-dev react-hot-loader
    ```
4. Configure react-hot-reloader in webpack and index.js

    在webpack.config.dev.js文件中entry里加入react-hot-loader/patch，同时uncomment需要的code，config文件修改之后如下：
    ```javascript
    entry: [
        'react-hot-loader/patch',
        ......
        require.resolve('webpack-dev-server/client') + '?/',
        require.resolve('webpack/hot/dev-server'),
        // require.resolve('react-dev-utils/webpackHotDevClient'),
        ......
    ]
    ```

    然后修改index.js，加入react-hot-reloader，此时index.js文件如下：
    ```javascript
    import React from 'react';
    import {render} from 'react-dom'
    import './index.css';
    import App from './App';
    import {AppContainer} from 'react-hot-loader'
    import registerServiceWorker from './registerServiceWorker';

    render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('root')
    )

    if (module.hot) {
        module.hot.accept('./App' , ()=> {
            const NewRoot = require('./App').default;
            render(
                <AppContainer>
                    <NewRoot />
                </AppContainer>,
                document.getElementById('root')
            )
        })
    }

    registerServiceWorker();
	```
    
5. Install semantic UI npm package
    ```javascript
    npm i semantic-ui-react -S
    ```
	特别注意要在public中的index.html引入semantic-ui的css文件

    <link rel="stylesheet" 
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
    </link>

<br/>
这个时候在程序中就可以用semantic-ui-react的组件了，这个例子里面专门设置了PORT=3009在.env文件中，为了防止本地有端口冲突
<br/>
<br/>

### Stuff might be useful

 * [create-react-app cli](https://github.com/facebookincubator/create-react-app)
 * [semantic-ui-react](https://react.semantic-ui.com/introduction)
 * [make react hot reloader for create-react-app](http://joshbroton.com/add-react-hot-reloading-create-react-app)
