/**
 * Created by Administrator on 2016/7/13.
 */
//function�������ļ���һ��
function Background(x,y,imgId){
    this.x=x;
    this.y=y;
    this.img=document.getElementById(imgId);
    this.x2=this.x+this.img.width;
}

//��ʼ����
Background.prototype.show=function(){
                       //ÿ��������������Ĳ�����Ӧ
    g_context.drawImage(this.img,this.x,this.y);
   //���Ƶڶ���ͼ
    g_context.drawImage(this.img,this.x2,this.y);
    //�����ٶ�
    this.x-=g_speed;
    this.x2-=g_speed;
    //��x��Խ�߽���Ҫ���»ص��ұ�
    if(this.x<=this.img.width*-1){
        this.x=this.img.width;
    }
    if(this.x2<=this.img.width*-1){
        this.x2=this.img.width;
    }
}