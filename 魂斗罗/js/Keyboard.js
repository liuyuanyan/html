/**
 * Created by Administrator on 2016/7/13.
 */
//键盘升起
function keyUp(e){
    if(e.keyCode==32){
        //g_hero.isJump=0;
    }else if(e.keyCode==65){
        //将子弹放进数组
        g_shotArray.push(new Shot());
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }else if(e.keyCode==40){
        g_hero.isDun=0;
    }
}
//键盘落下
function keyDown(e){
    if(e.keyCode==32){
       g_hero.isJump=1;
    }else if(e.keyCode==65){
        //将子弹放进数组
        g_shotArray.push(new Shot());
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }else if(e.keyCode==40){
        g_hero.isDun=1;
    }
}