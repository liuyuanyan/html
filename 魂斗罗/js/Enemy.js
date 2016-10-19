/**
 * Created by Administrator on 2016/7/14.
 */

function Enemy(x,y,imgId,blood){
    this.x=x;
    this.y=y;
    this.blood=blood;
    this.img=document.getElementById(imgId);
}

Enemy.prototype.show=function(){
    g_context.drawImage(this.img,this.x,this.y);
    this.x-=g_speed+1;
    //���л��Ƿ���Ӣ���غ�
    HitHero(g_hero,this);
}
//������ͬ���εĵл�
function makeEnemyWithType(flag){
    if(flag==1){//����һ���л�
         g_enemyArray.push(new Enemy(480,100,'d1',2));
    }
    if(flag==2){//����һ���л�
        g_enemyArray.push(new Enemy(520,100,'d2',1));
        g_enemyArray.push(new Enemy(480,150,'d1',2));
        g_enemyArray.push(new Enemy(520,180,'d2',1));
    }
    if(flag==3){//����һ���л�
        g_enemyArray.push(new Enemy(520,150,'d2',1));
        g_enemyArray.push(new Enemy(560,150,'d2',1));
        g_enemyArray.push(new Enemy(600,150,'d2',1));
    }
    if(flag==4){//����һ���л�
        g_enemyArray.push(new Enemy(520,150,'d2',1));
        g_enemyArray.push(new Enemy(560,150,'d2',1));
        g_enemyArray.push(new Enemy(520,180,'d2',1));
        g_enemyArray.push(new Enemy(560,180,'d2',1));
    }
    if(flag==5){//����һ���л�
        g_enemyArray.push(new Enemy(480,90,'d2',1));
    }
    if(flag==6){//����һ���л�
        g_enemyArray.push(new Enemy(480,90,'d1',2));
        g_enemyArray.push(new Enemy(500,70,'d1',2));
    }
    if(flag==7){//����һ���л�
        g_enemyArray.push(new Enemy(500,90,'d1',2));
        g_enemyArray.push(new Enemy(500,60,'d1',2));
        g_enemyArray.push(new Enemy(460,90,'d1',2));
        g_enemyArray.push(new Enemy(460,60,'d1',2));
    }
    if(flag==8){//����һ���л�
        g_enemyArray.push(new Enemy(460,100,'d3',1));
        g_enemyArray.push(new Enemy(480,80,'d1',2));
        g_enemyArray.push(new Enemy(500,120,'d3',1));

    }
}
//���л�������Ļ�Ƴ� �����ڴ�ռ��
Enemy.prototype.removeEnemy=function(){
    if(this.x>500){
        var index=g_enemyArray.indexOf(this);
        g_enemyArray.splice(index,1);
    }
}


Enemy.prototype.die=function(){
    this.blood--;
  //�ж�Ѫ���Ƿ�Ϊ0
    if(this.blood==0){
        var index=g_enemyArray.indexOf(this);
        g_enemyArray.splice(index,1);
        g_score++;
        var node=document.getElementById("score");
        node.innerHTML="score:"+g_score;
    }

}