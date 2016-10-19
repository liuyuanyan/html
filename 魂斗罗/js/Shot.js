/**
 * Created by Administrator on 2016/7/13.
 */

function Shot(){
    this.x=g_hero.x+g_hero.img1.width;
    this.y=g_hero.y+g_hero.img1.height* 0.333;
    this.width=5;
    this.height=5;
    if(g_hero.isDun==1){
        this.x+=25;
        this.y+=20;
    }
    if(g_hero.isJump==1){

        this.y-=40;
    }

}
Shot.prototype.show=function(){

    //g_context.fillStyle="red";
    //
    //g_context.fillRect(this.x,this.y,this.width,this.height);
    //
    //g_context.fill();
    var  dunImg=document.getElementById("shot");
    g_context.drawImage(dunImg,this.x,this.y);
    this.x+=4;

    //碰撞检测,将子弹和每个敌机进行检测
    for(var i=0;i<g_enemyArray.length;i++){
        Hit(this,g_enemyArray[i]);
    }



}

Shot.prototype.removeShot=function(){
    if(this.x>500){
        var index=g_shotArray.indexOf(this);
        g_shotArray.splice(index,1);
    }
}

Shot.prototype.die=function(){
    var index=g_shotArray.indexOf(this);
    g_shotArray.splice(index,1);
}