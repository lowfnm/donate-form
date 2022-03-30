import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import ThemeConfig from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeConfig>
            <App />
        </ThemeConfig>
    </React.StrictMode>,
    document.getElementById('root')
);
