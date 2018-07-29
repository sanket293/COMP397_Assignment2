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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#000000", 320, 240, true);
            this._backButton = new objects.Button("BackButton", 320, 360, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - INSTRUCTION SCENE");
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map