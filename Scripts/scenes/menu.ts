namespace scenes {
  export class Menu extends objects.Scene {
    // member variables
    private _welcomeLabel: objects.Label;
    private _exitButton: objects.Button;
    private _startButton: objects.Button;
    private _instructionButton: objects.Button;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._welcomeLabel = new objects.Label(
        "Alien Shooter!",
        "60px",
        "Consolas",
        "#000000",
        config.Screen.HALF_WIDTH,
        config.Screen.TOP_SPACE * 2,
        true
      );
      this._startButton = new objects.Button(
        "StartButton",
        config.Screen.HALF_WIDTH,
        config.Screen.HALF_HEIGHT,
        true
      );
      this._instructionButton = new objects.Button(
        "InstructionButton",
        config.Screen.DISTANCE,
        config.Screen.HEIGHT - config.Screen.DISTANCE,
        true
      );
      this._exitButton = new objects.Button(
        "ExitButton",
        config.Screen.WIDTH - config.Screen.DISTANCE,
        config.Screen.HEIGHT - config.Screen.DISTANCE,
        true
      );

      this.Main();
    }

    public Update(): void {}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - Menu SCENE`);
      this.addChild(this._welcomeLabel);
      this.addChild(this._startButton);
      this.addChild(this._instructionButton);
      this.addChild(this._exitButton);

      this._startButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );

      this._instructionButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.INSTRUCTION;
        },
        this
      );

      this._exitButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.EXIT;
        },
        this
      );
    }
  }
}
