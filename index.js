const {app, BrowserWindow} = require('electron')
const escpos = require('escpos')
const fs = require('fs')

const device  = new escpos.USB()
const printer = new escpos.Printer(device)
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

exports.print = (arrayBuffer)=>{
    escpos.Image.load(Buffer.from(arrayBuffer), 'image/png', image=>{
        device.open(()=>{
            printer.align('ct')
            printer.raster(image, 'dwdh')
            printer.cut()
            printer.close()
        })
    })
}
