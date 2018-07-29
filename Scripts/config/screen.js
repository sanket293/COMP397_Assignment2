var config;
(function (config) {
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        Screen.WIDTH = 960;
        Screen.HEIGHT = 480;
        Screen.HALF_WIDTH = Screen.WIDTH / 2;
        Screen.HALF_HEIGHT = Screen.HEIGHT / 2;
        Screen.DISTANCE = 120;
        Screen.BACKGROUND_SPEED = 5;
        Screen.BUG_ENEMY_NUMBER = 7;
        Screen.PICKUP_NUMBER = 1;
        Screen.ALIEN_ENEMY_NUMBER = 5;
        Screen.PICKUP_LIFE_RENEW_NUMBER = 5;
        Screen.TOP_SPACE = 20;
        Screen.SCOREBORD_LABLES_HEIGHT = Screen.TOP_SPACE;
        Screen.LIVES_LABEL = Screen.TOP_SPACE;
        Screen.SCORE_LABEL = 390;
        Screen.PICKUP_LABEL = Screen.WIDTH - 125;
        Screen.PICKUP_IMAGE = Screen.WIDTH - 180;
        Screen.POINTS_FOR_BUG_ENEMY = 150;
        Screen.POINTS_FOR_ALENE_ENEMY = 100;
        Screen.POINTS_FOR_PICKUP = 50;
        Screen.POINTS_FOR_NEW_LIFE = 2000;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map