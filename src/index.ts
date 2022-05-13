import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
    const windows = new BrowserWindow({
        width: 800,
        height: 600,
    });

    windows.loadFile("../HTML/index.html");
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
