/**
 * Created by Administrator on 2016/7/13.
 */
//function的名和文件名一致
function Background(x,y,imgId){
    this.x=x;
    this.y=y;
    this.img=document.getElementById(imgId);
    this.x2=this.x+this.img.width;
}

//开始绘制
Background.prototype.show=function(){
                       //每个参数都与上面的参数对应
    g_context.drawImage(this.img,this.x,this.y);
   //绘制第二张图
    g_context.drawImage(this.img,this.x2,this.y);
    //控制速度
    this.x-=g_speed;
    this.x2-=g_speed;
    //当x超越边界需要重新回到右边
    if(this.x<=this.img.width*-1){
        this.x=this.img.width;
    }
    if(this.x2<=this.img.width*-1){
        this.x2=this.img.width;
    }
}