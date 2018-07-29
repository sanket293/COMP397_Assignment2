var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Exit = /** @class */ (function (_super) {
        __extends(Exit, _super);
        // constructors
        function Exit() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Exit.prototype.Start = function () {
            this._exitLabel = new objects.Label("exit", "60px", "Consolas", "#000000", 320, 240, true);
            this._backButton = new objects.Button("BackButton", 320, 360, true);
            this.Main();
        };
        Exit.prototype.Update = function () {
        };
        Exit.prototype.Reset = function () {
        };
        Exit.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Exit.prototype.Main = function () {
            console.log("Starting - EXIT SCENE");
            // adding exit lable to scene
            this.addChild(this._exitLabel);
            // adding back button to scene
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Exit;
    }(objects.Scene));
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
//# sourceMappingURL=exit.js.map