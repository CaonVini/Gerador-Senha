const { app, BrowserWindow } = require("electron");

app.whenReady()
    .then(function () {
        //Aqui criaremos a janela//
        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            resizable: false,
            height: 600,
            width: 800,
        })
        janela.loadFile("./public/index.html")
    })