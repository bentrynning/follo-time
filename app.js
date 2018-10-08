const { app, BrowserWindow } = require('electron');
const path = require('path');

let window = null;

let url;
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/';
} else {
    url = `file://${process.cwd()}/dist/index.html`;
}

app.once('ready', () => {
    const options = {
        width: 800,
        height: 600,
        show: false,
        backgroundColor: '#236167'
    };
    window = new BrowserWindow(options);

    window.loadURL(url);
    window.once('ready-to-show', () => {
        window.show();
    });
});
