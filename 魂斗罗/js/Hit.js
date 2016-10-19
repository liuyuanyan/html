/**
 * Created by Administrator on 2016/7/14.
 */

function Hit(shot,enemy){
    //子弹在左边
    var condition1=(shot.x+shot.width)<enemy.x;
    //子弹在右边
    var condition2=shot.x>enemy.x+enemy.img.width;

    //子弹在上面
    var condition3=shot.y+shot.height<enemy.y;
    //子弹在下面
    var condition4=shot.y>enemy.y+enemy.img.height;
    if(condition1||condition2||condition3||condition4){

    }else{//子弹撞上敌机
        enemy.die();
        shot.die();
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }
}

function HitHero(hero,enemy){
    var condition1=(hero.x+hero.img1.width)<enemy.x;
    //子弹在右边
    var condition2=hero.x>enemy.x+enemy.img.width;

    //子弹在上面
    var condition3=hero.y+hero.img1.height<enemy.y;
    //子弹在下面
    var condition4=hero.y>enemy.y+enemy.img.height;
    if(condition1||condition2||condition3||condition4){

    }else{//子弹撞上敌机
        hero.die();
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }
}

//敌机死亡
