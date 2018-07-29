module scenes {
    export class End extends objects.Scene {
        // member variables
        private _endLabel: objects.Label;
        private _exitButton: objects.Button;
        private _replayButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#000000", 320, 240, true);
            this._exitButton = new objects.Button("BackButton", 320, 350, true);
            this._replayButton = new objects.Button("ReplayButton", 320, 380, true);

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
            console.log(`Starting - END SCENE`);
            this.addChild(this._endLabel);
            this.addChild(this._exitButton);
            this.addChild(this._replayButton);



            this._exitButton.on("click", function(){

                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);

            this._replayButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;



            }, this);
        }
    }
}