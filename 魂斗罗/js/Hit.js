/**
 * Created by Administrator on 2016/7/14.
 */

function Hit(shot,enemy){
    //�ӵ������
    var condition1=(shot.x+shot.width)<enemy.x;
    //�ӵ����ұ�
    var condition2=shot.x>enemy.x+enemy.img.width;

    //�ӵ�������
    var condition3=shot.y+shot.height<enemy.y;
    //�ӵ�������
    var condition4=shot.y>enemy.y+enemy.img.height;
    if(condition1||condition2||condition3||condition4){

    }else{//�ӵ�ײ�ϵл�
        enemy.die();
        shot.die();
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }
}

function HitHero(hero,enemy){
    var condition1=(hero.x+hero.img1.width)<enemy.x;
    //�ӵ����ұ�
    var condition2=hero.x>enemy.x+enemy.img.width;

    //�ӵ�������
    var condition3=hero.y+hero.img1.height<enemy.y;
    //�ӵ�������
    var condition4=hero.y>enemy.y+enemy.img.height;
    if(condition1||condition2||condition3||condition4){

    }else{//�ӵ�ײ�ϵл�
        hero.die();
        var audio=new Audio();
        audio.src="../source/m1.wav";
        audio.play();
    }
}

//�л�����
