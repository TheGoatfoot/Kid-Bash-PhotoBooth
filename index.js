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
    fs.writeFile("./hello.png", Buffer.from(arrayBuffer), err=>{
        console.log(err)
    })
}
/*
escpos.Image.load('FRAME.png', 'image/png', image=>{
    
    console.log(image)
    device.open(()=>{
        printer.align('ct')
        printer.text('image')
        printer.raster(image, 'dwdh')
        printer.cut()
        printer.close()
    })
})
*/
