namespace config {
  export class Screen {
    public static WIDTH: number = 960;
    public static HEIGHT: number = 480;
    public static HALF_WIDTH: number = Screen.WIDTH / 2;
    public static HALF_HEIGHT: number = Screen.HEIGHT / 2;
    public static DISTANCE: number = 120;

    public static BACKGROUND_SPEED: number = 5;
    public static BUG_ENEMY_NUMBER: number = 7;
    public static PICKUP_NUMBER: number = 1;
    public static ALIEN_ENEMY_NUMBER: number = 5;
    public static PICKUP_LIFE_RENEW_NUMBER: number = 5;

    public static TOP_SPACE: number = 20;

    public static SCOREBORD_LABLES_HEIGHT: number = Screen.TOP_SPACE;
    public static LIVES_LABEL: number = Screen.TOP_SPACE;
    public static SCORE_LABEL: number = 390;

    public static PICKUP_LABEL: number = Screen.WIDTH - 125;
    public static PICKUP_IMAGE: number = Screen.WIDTH - 180;

    public static POINTS_FOR_BUG_ENEMY: number = 150;
    public static POINTS_FOR_ALENE_ENEMY: number = 100;
    public static POINTS_FOR_PICKUP: number = 50;
    public static POINTS_FOR_NEW_LIFE: number = 2000;
  }
}
