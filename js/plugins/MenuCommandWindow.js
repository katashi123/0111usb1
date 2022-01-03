Window_MenuCommand.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem('MenuCommandWindow');
};
Window_MenuCommand.prototype.standardBackOpacity = function() {
    return 255;
};
Scene_Boot.prototype.loadSystemWindowImage = function() {
    ImageManager.reserveSystem('Window');
    ImageManager.reserveSystem('MenuCommandWindow');
};