module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _playButton: objects.Button;
        private _playNextLevelButton: objects.Button;
        private _backButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._welcomeLabel = new objects.Label("Play !", "60px", "Consolas", "#000000", 320, 240, true);
            this._playButton = new objects.Button("PlayButton", 320, 360, true);
            this._playNextLevelButton = new objects.Button("PlayNextLevelButton", 320, 380, true);
            this._backButton = new objects.Button("BackButton", 320, 400, true);

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
            console.log(`Starting - START SCENE`);
            this.addChild(this._welcomeLabel);
            this.addChild(this._playButton);
            this.addChild(this._playNextLevelButton);

// simple level play button - level 1
            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

// next level play button - level 2
            this._playNextLevelButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAYNEXTLEVEL;
            }, this);


            // adding back button to scene
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);


        }
    }
}