module scenes {
    export class Exit extends objects.Scene {
        // member variables
        private _exitLabel: objects.Label;
        private _backButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._exitLabel = new objects.Label("exit", "60px", "Consolas", "#000000", 320, 240, true);
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
            console.log(`Starting - EXIT SCENE`);

// adding exit lable to scene
            this.addChild(this._exitLabel);

            // adding back button to scene
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }
    }
}