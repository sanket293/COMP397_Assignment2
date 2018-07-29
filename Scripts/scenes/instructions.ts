module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _instructionLabel: objects.Label;
        private _backButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#000000", 320, 240, true);
            this._backButton = new objects.Button("BackButton", 320, 360, true);

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - INSTRUCTION SCENE`);
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }
    }
}