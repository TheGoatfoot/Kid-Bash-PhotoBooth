const {app, BrowserWindow} = require('electron')

app.on('ready',()=>{
    const window = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    })
    window.loadFile('./html/index.html')
})
