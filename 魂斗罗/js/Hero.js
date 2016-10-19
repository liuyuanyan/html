/**
 * Created by Administrator on 2016/7/13.
 */
function Hero(x,y,imgId1,imgId2){
    this.x=x;
    this.y=y;
    //kong zhi tiaoyue
    this.jumpy=this.y;
    this.img1=document.getElementById(imgId1);
    this.img2=document.getElementById(imgId2);
    //定义全局变量，来控制绘制不同的图片
    this.count=0;
    this.isDun=0;
    this.isJump=0;
    this.direction="up";
    this.isDie=0;

}

//hui zhi hero
Hero.prototype.show=function(){
    this.count++;
    if(this.isDie){
        return;
    }
    if(this.isDun==1){
        var  dunImg=document.getElementById("hero3");
        g_context.drawImage(dunImg,this.x,this.y+25);
    }else if(this.isJump==1){

        g_context.drawImage(this.img1,this.x,this.jumpy);
        g_speed=5;
        if(this.direction=="up"){
            //if xiangshang
            if(this.jumpy>=50){
                this.jumpy-=3;
            }else{
                this.direction="down";

            }
        }

        if(this.direction=="down"){
            if(this.jumpy<=this.y){
                this.jumpy+=3;
            }else{
                this.isJump=0;
                this.direction="up";
                g_speed=4;
            }
        }


    }
    else {
        if(this.count%4==0){
                g_context.drawImage(this.img1,this.x,this.y);
            }else{
                g_context.drawImage(this.img2,this.x,this.y);
            }

    }
    if(this.isJump==1)return;
    if(this.x>g_background.x&&this.x<g_background+60){
        this.die();
    }else if(this.x>g_background.x2&&this.x<g_background.x2+60){
        this.die();
    }
}
//人死
Hero.prototype.die=function(){
    this.isDie=1;
    over.style.display="block";

}

