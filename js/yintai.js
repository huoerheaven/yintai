/*搜索*/
var sousuo1=$(".sousuo1")[0];
sousuo1.onfocus=function(){
	if(sousuo1.value=="夏季美裙趴"){
		sousuo1.value=""
	}
}
sousuo1.onblur=function(){
	if(sousuo1.value==""){
		sousuo1.value="夏季美裙趴"
	}
}

/*轮播*/
var banner=getClass("banner")[0];
var img=getClass("dadi1");
var btn=getClass("banner1bottom")[0];
var li=btn.getElementsByTagName("li");
var bannerleftbtn=$(".bannerleftbtn")[0];
var bannerrightbtn=$(".bannerrightbtn")[0];
var num=0;
function change(){
    num++;
    if(num>=img.length){
        num=0;
    }
    for(var i=0;i<img.length;i++){
        img[i].style.opacity=0;
        li[i].id="";
    }
    animate(img[num],{opacity:1});
    li[num].id="bottomli";
} 
var t=setInterval(change,3000);
bannerleftbtn.onclick=function(){
    num--;
    if(num<=-1){
        num=img.length-1;
    }
    for(var i=0;i<img.length;i++){
        img[i].style.opacity=0;
        li[i].id="";
    }
    animate(img[num],{opacity:1});
    li[num].id="bottomli";
}
bannerrightbtn.onclick=function(){
    num++;
    if(num>=img.length){
        num=0;
    }
    for(var i=0;i<img.length;i++){
        img[i].style.opacity=0;
        li[i].id="";
    }
    animate(img[num],{opacity:1});
    li[num].id="bottomli";
}
banner.onmouseover=function(){
    bannerleftbtn.style.display="block";
    bannerrightbtn.style.display="block";
    clearInterval(t);
    

}

banner.onmouseout=function(){
    bannerleftbtn.style.display="none";
    bannerrightbtn.style.display="none";
    t=setInterval(change,3000);


}
for(var i=0;i<li.length;i++){
    li[i].aa=i;
    li[i].onclick=function(){
        for(var j=0;j<li.length;j++){
            animate(img[j],{opacity:0});
            li[j].id="";
        }
        animate(img[this.aa],{opacity:1});
        this.id="bottomli";
        num=this.aa;
    }
}

/*阻止事件流的影响*/
var banner1you=$(".banner1you")[0];
banner1you.onmouseover=function(e){
            var e=e||window.event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        }
banner1you.onmouseout=function(e){
            var e=e||window.event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        }

/*阻止事件流的影响*/
var banner1zuo=$(".banner1zuo")[0];
banner1zuo.onmouseover=function(e){
            var e=e||window.event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        }
banner1zuo.onmouseout=function(e){
            var e=e||window.event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        }


// banner左侧划出效果
var bannerclass=$(".bannerclass");
var xiaoguo=$(".xiaoguo")[0];
for(var i=0;i<bannerclass.length;i++){
    bannerclass[i].index=i;
    bannerclass[i].onmouseover=function(){
    xiaoguo.style.display="block";
}
    bannerclass[i].onmouseout=function(){
        xiaoguo.style.display="none";
    }
}

/*购物车效果*/
var gouwuche=$(".gouwuche")[0];
var waifaguang=$(".waifaguang")[0];
gouwuche.onmouseover=function(){
    waifaguang.style.display="block";
}
gouwuche.onmouseout=function(){
    waifaguang.style.display="none";
}
/*第一个选项卡*/
var xxli=getClass("xxli");
var chaozhibox=getClass("chaozhibox");
for(var m=0; m<xxli.length;m++){
    xxli[m].bb=m;
    xxli[m].onmouseover=function(){
        for(var n=0;n<chaozhibox.length;n++){
            xxli[n].style.cssText="font-weight:normal;border-bottom:5px solid #333";
            chaozhibox[n].style.display="none";
        }
        this.style.cssText="font-weight:bold;border-bottom:5px solid #E5004F";
        chaozhibox[this.bb].style.display="block";
    }
}
/*银泰动效  向外延伸*/
var kuang=$(".kuang");
    var tops=$(".bian-top");
    var lefts=$(".bian-left");
    var bottoms=$(".bian-bottom");
    var rights=$(".bian-right");
    for(var i=0;i<kuang.length;i++){
        kuang[i].aa=i;
        kuang[i].onmouseover=function(){
             var cw=this.offsetWidth;
             var ch=this.offsetHeight;
             animate(tops[this.aa],{width:cw},400);
             animate(lefts[this.aa],{height:ch},400);
             animate(bottoms[this.aa],{width:cw},400);
             animate(rights[this.aa],{height:ch},400);
        }
        kuang[i].onmouseout=function(){
             var cw=this.offsetWidth;
             var ch=this.offsetHeight;
             animate(tops[this.aa],{width:0},400);
             animate(lefts[this.aa],{height:0},400);
             animate(bottoms[this.aa],{width:0},400);
             animate(rights[this.aa],{height:0},400);
        }
    }

 /*   第二个选项卡*/
var remenxuanxiangli=getClass("remenxuanxiangli");
var kaka=getClass("kaka");
for(var m=0; m<remenxuanxiangli.length;m++){
    remenxuanxiangli[m].bb=m;
    remenxuanxiangli[m].onmouseover=function(){
        for(var n=0;n<kaka.length;n++){
            remenxuanxiangli[n].style.cssText="font-weight:normal;border-bottom:4px solid #333";
            kaka[n].style.display="none";
        }
        this.style.cssText="font-weight:bold;border-bottom:4px solid #E5004F";
        kaka[this.bb].style.display="block";
    }
}

/*右侧精灵遮罩*/
var youcefen=getClass("youcefen");
var zhezhao=getClass("zhezhao");
for(var k=0;k<youcefen.length;k++){
    youcefen[k].aa=k;
    youcefen[k].onmouseover=function(){
        zhezhao[this.aa].style.display="block";  
    }
    youcefen[k].onmouseout=function(){
        zhezhao[this.aa].style.display="none";
    }
}

/*楼层跳转*/
var floor=$(".floor");
var youce=$(".youce")[0];
var youce1=$(".youce1");
var zhezhao=$(".zhezhao");
var now;
var flag=1;
window.onscroll=function(){
    if(obj.scrollTop>=700){
        if(flag==1){    
            animate(youce,{width:50},200);
            flag=2;
        }
    }else if(flag==2){
        animate(youce,{width:0},200);    
        flag=1;
    }
    
    for(var i=0;i<floor.length;i++){
        if(floor[i].offsetTop<=obj.scrollTop+180){
            for(var j=0;j<youce1.length;j++){
                zhezhao[j].style.display="none";
            }
            zhezhao[i].style.display="block";
            zhezhao[9].style.display="none";
            now=i;
        }

    }
}

for(var i=0;i<youce1.length;i++){
    youce1[i].cc=i;                
    youce1[i].onclick=function(){ 
        now=this.cc;         
        animate(obj,{scrollTop:floor[this.cc].offsetTop},500)           
    }
    youce1[i].onmouseover=function(){
        for(var j=0;j<youce1.length;j++){
            if(now!=j){
            zhezhao[j].style.display="none";
            }
        }
        zhezhao[this.cc].style.display="block";
    }
    youce1[i].onmouseout=function(){
        for (var k =0; k <= youce1.length; k++) {
            if(now!=k){
                zhezhao[k].style.display="none";
            }
        };
    }
}

/*左侧轮播小箭头遮罩*/
/*时尚名品*/
var zuobutton=getClass("zuobutton")[0];
var youbutton=getClass("youbutton")[0];
var zuobuttonzhezhao=getClass("zuobuttonzhezhao")[0];
var youbuttonzhezhao=getClass("youbuttonzhezhao")[0];
    zuobutton.onmouseover=function(){
        zuobuttonzhezhao.style.display="block";  
    }
    zuobutton.onmouseout=function(){
        zuobuttonzhezhao.style.display="none";
    }
    youbutton.onmouseover=function(){
        youbuttonzhezhao.style.display="block";  
    }
    youbutton.onmouseout=function(){
        youbuttonzhezhao.style.display="none";
    }
/*潮流女装*/

var zuobutton1=getClass("zuobutton1")[0];
var youbutton1=getClass("youbutton1")[0];
var zuobuttonzhezhao1=getClass("zuobuttonzhezhao1")[0];
var youbuttonzhezhao1=getClass("youbuttonzhezhao1")[0];
    zuobutton1.onmouseover=function(){
        zuobuttonzhezhao1.style.display="block";  
    }
    zuobutton1.onmouseout=function(){
        zuobuttonzhezhao1.style.display="none";
    }
    youbutton1.onmouseover=function(){
        youbuttonzhezhao1.style.display="block";  
    }
    youbutton1.onmouseout=function(){
        youbuttonzhezhao1.style.display="none";
    }
/*精品男装*/
var zuobutton2=getClass("zuobutton2")[0];
var youbutton2=getClass("youbutton2")[0];
var zuobuttonzhezhao2=getClass("zuobuttonzhezhao2")[0];
var youbuttonzhezhao2=getClass("youbuttonzhezhao2")[0];
    zuobutton2.onmouseover=function(){
        zuobuttonzhezhao2.style.display="block";  
    }
    zuobutton2.onmouseout=function(){
        zuobuttonzhezhao2.style.display="none";
    }
    youbutton2.onmouseover=function(){
        youbuttonzhezhao2.style.display="block";  
    }
    youbutton2.onmouseout=function(){
        youbuttonzhezhao2.style.display="none";
    }
/*时尚鞋靴*/
var zuobutton3=getClass("zuobutton3")[0];
var youbutton3=getClass("youbutton3")[0];
var zuobuttonzhezhao3=getClass("zuobuttonzhezhao3")[0];
var youbuttonzhezhao3=getClass("youbuttonzhezhao3")[0];
    zuobutton3.onmouseover=function(){
        zuobuttonzhezhao3.style.display="block";  
    }
    zuobutton3.onmouseout=function(){
        zuobuttonzhezhao3.style.display="none";
    }
    youbutton3.onmouseover=function(){
        youbuttonzhezhao3.style.display="block";  
    }
    youbutton3.onmouseout=function(){
        youbuttonzhezhao3.style.display="none";
    }
/*潮流箱包 */   
var zuobutton4=getClass("zuobutton4")[0];
var youbutton4=getClass("youbutton4")[0];
var zuobuttonzhezhao4=getClass("zuobuttonzhezhao4")[0];
var youbuttonzhezhao4=getClass("youbuttonzhezhao4")[0];
    zuobutton4.onmouseover=function(){
        zuobuttonzhezhao4.style.display="block";  
    }
    zuobutton4.onmouseout=function(){
        zuobuttonzhezhao4.style.display="none";
    }
    youbutton4.onmouseover=function(){
        youbuttonzhezhao4.style.display="block";  
    }
    youbutton4.onmouseout=function(){
        youbuttonzhezhao4.style.display="none";
    }
/*美容护肤 */   
var zuobutton5=getClass("zuobutton5")[0];
var youbutton5=getClass("youbutton5")[0];
var zuobuttonzhezhao5=getClass("zuobuttonzhezhao5")[0];
var youbuttonzhezhao5=getClass("youbuttonzhezhao5")[0];
    zuobutton5.onmouseover=function(){
        zuobuttonzhezhao5.style.display="block";  
    }
    zuobutton5.onmouseout=function(){
        zuobuttonzhezhao5.style.display="none";
    }
    youbutton5.onmouseover=function(){
        youbuttonzhezhao5.style.display="block";  
    }
    youbutton5.onmouseout=function(){
        youbuttonzhezhao5.style.display="none";
    }
    /*运动户外*/   
var zuobutton6=getClass("zuobutton6")[0];
var youbutton6=getClass("youbutton6")[0];
var zuobuttonzhezhao6=getClass("zuobuttonzhezhao6")[0];
var youbuttonzhezhao6=getClass("youbuttonzhezhao6")[0];
    zuobutton6.onmouseover=function(){
        zuobuttonzhezhao6.style.display="block";  
    }
    zuobutton6.onmouseout=function(){
        zuobuttonzhezhao6.style.display="none";
    }
    youbutton6.onmouseover=function(){
        youbuttonzhezhao6.style.display="block";  
    }
    youbutton6.onmouseout=function(){
        youbuttonzhezhao6.style.display="none";
    }
     /*内衣配饰*/   
var zuobutton7=getClass("zuobutton7")[0];
var youbutton7=getClass("youbutton7")[0];
var zuobuttonzhezhao7=getClass("zuobuttonzhezhao7")[0];
var youbuttonzhezhao7=getClass("youbuttonzhezhao7")[0];
    zuobutton7.onmouseover=function(){
        zuobuttonzhezhao7.style.display="block";  
    }
    zuobutton7.onmouseout=function(){
        zuobuttonzhezhao7.style.display="none";
    }
    youbutton7.onmouseover=function(){
        youbuttonzhezhao7.style.display="block";  
    }
    youbutton7.onmouseout=function(){
        youbuttonzhezhao7.style.display="none";
    }
         /*可爱婴童*/   
var zuobutton8=getClass("zuobutton8")[0];
var youbutton8=getClass("youbutton8")[0];
var zuobuttonzhezhao8=getClass("zuobuttonzhezhao8")[0];
var youbuttonzhezhao8=getClass("youbuttonzhezhao8")[0];
    zuobutton8.onmouseover=function(){
        zuobuttonzhezhao8.style.display="block";  
    }
    zuobutton8.onmouseout=function(){
        zuobuttonzhezhao8.style.display="none";
    }
    youbutton8.onmouseover=function(){
        youbuttonzhezhao8.style.display="block";  
    }
    youbutton8.onmouseout=function(){
        youbuttonzhezhao8.style.display="none";
    }
/*左侧小箭头轮播*/
/*时尚名品*/
var now2=0;
var next2=0;
var zuoda2=getClass("zuoda2");
for(var i=1;i<zuoda2.length;i++){
        zuoda2[i].style.left="170px";
    }
    

youbutton.onclick=function(){
        next2++;
        if(next2>=zuoda2.length){
            next2=0;
        }
        animate(zuoda2[now2],{left:-170})
        zuoda2[next2].style.left="170px";
        animate(zuoda2[next2],{left:0});
        zuoda2[next2].style.zIndex="6";
        zuoda2[now2].style.zIndex="2";
        now2=next2;
    }
zuobutton.onclick=function(){
    next2--;
    if(next2<=-1){
        next2=zuoda2.length-1;
    }
    animate(zuoda2[now2],{left:170})
    zuoda2[next2].style.left="-170px";
    animate(zuoda2[next2],{left:0});
    zuoda2[next2].style.zIndex="6";
    zuoda2[now2].style.zIndex="2";
    now2=next2;
}
/*潮流女装*/
var now3=0;
var next3=0;
var zuoda3=getClass("zuoda3");
for(var i=1;i<zuoda3.length;i++){
        zuoda3[i].style.left="170px";
    }
    

youbutton1.onclick=function(){
        next3++;
        if(next3>=zuoda3.length){
            next3=0;
        }
        animate(zuoda3[now3],{left:-170})
        zuoda3[next3].style.left="170px";
        animate(zuoda3[next3],{left:0});
        zuoda3[next3].style.zIndex="6";
        zuoda3[now3].style.zIndex="2";
        now3=next3;
    }
zuobutton1.onclick=function(){
    next3--;
    if(next3<=-1){
        next3=zuoda3.length-1;
    }
    animate(zuoda3[now3],{left:170})
    zuoda3[next3].style.left="-170px";
    animate(zuoda3[next3],{left:0});
    zuoda3[next3].style.zIndex="6";
    zuoda3[now3].style.zIndex="2";
    now3=next3;
}
/*精品男装*/
var now4=0;
var next4=0;
var zuoda4=getClass("zuoda4");
for(var i=1;i<zuoda4.length;i++){
        zuoda4[i].style.left="170px";
    }
    

youbutton2.onclick=function(){
        next4++;
        if(next4>=zuoda4.length){
            next4=0;
        }
        animate(zuoda4[now4],{left:-170})
        zuoda4[next4].style.left="170px";
        animate(zuoda4[next4],{left:0});
        zuoda4[next4].style.zIndex="6";
        zuoda4[now4].style.zIndex="2";
        now4=next4;
    }
zuobutton2.onclick=function(){
    next4--;
    if(next4<=-1){
        next4=zuoda4.length-1;
    }
    animate(zuoda4[now4],{left:170})
    zuoda4[next4].style.left="-170px";
    animate(zuoda4[next4],{left:0});
    zuoda4[next4].style.zIndex="6";
    zuoda4[now4].style.zIndex="2";
    now4=next4;
}
/*时尚鞋靴*/
var now5=0;
var next5=0;
var zuoda5=getClass("zuoda5");
for(var i=1;i<zuoda5.length;i++){
        zuoda5[i].style.left="170px";
    }
    

youbutton3.onclick=function(){
        next5++;
        if(next5>=zuoda5.length){
            next5=0;
        }
        animate(zuoda5[now5],{left:-170})
        zuoda5[next5].style.left="170px";
        animate(zuoda5[next5],{left:0});
        zuoda5[next5].style.zIndex="6";
        zuoda5[now5].style.zIndex="2";
        now5=next5;
    }
zuobutton3.onclick=function(){
    next5--;
    if(next5<=-1){
        next5=zuoda5.length-1;
    }
    animate(zuoda5[now5],{left:170})
    zuoda5[next5].style.left="-170px";
    animate(zuoda5[next5],{left:0});
    zuoda5[next5].style.zIndex="6";
    zuoda5[now5].style.zIndex="2";
    now5=next5;
}

/*潮流箱包*/
var now6=0;
var next6=0;
var zuoda6=getClass("zuoda6");
for(var i=1;i<zuoda6.length;i++){
        zuoda6[i].style.left="170px";
    }
    

youbutton4.onclick=function(){
        next6++;
        if(next6>=zuoda6.length){
            next6=0;
        }
        animate(zuoda6[now6],{left:-170})
        zuoda6[next6].style.left="170px";
        animate(zuoda6[next6],{left:0});
        zuoda6[next6].style.zIndex="6";
        zuoda6[now6].style.zIndex="2";
        now6=next6;
    }
zuobutton4.onclick=function(){
    next6--;
    if(next6<=-1){
        next6=zuoda6.length-1;
    }
    animate(zuoda6[now6],{left:170})
    zuoda6[next6].style.left="-170px";
    animate(zuoda6[next6],{left:0});
    zuoda6[next6].style.zIndex="6";
    zuoda6[now6].style.zIndex="2";
    now6=next6;
}
/*美容护肤*/
var now7=0;
var next7=0;
var zuoda7=getClass("zuoda7");
for(var i=1;i<zuoda7.length;i++){
        zuoda7[i].style.left="170px";
    }
    

youbutton5.onclick=function(){
        next7++;
        if(next7>=zuoda7.length){
            next7=0;
        }
        animate(zuoda7[now7],{left:-170})
        zuoda7[next7].style.left="170px";
        animate(zuoda7[next7],{left:0});
        zuoda7[next7].style.zIndex="6";
        zuoda7[now7].style.zIndex="2";
        now7=next7;
    }
zuobutton5.onclick=function(){
    next7--;
    if(next7<=-1){
        next7=zuoda7.length-1;
    }
    animate(zuoda7[now7],{left:170})
    zuoda7[next7].style.left="-170px";
    animate(zuoda7[next7],{left:0});
    zuoda7[next7].style.zIndex="6";
    zuoda7[now7].style.zIndex="2";
    now7=next7;
}
/*运动户外*/
var now8=0;
var next8=0;
var zuoda8=getClass("zuoda8");
for(var i=1;i<zuoda8.length;i++){
        zuoda8[i].style.left="170px";
    }
    

youbutton6.onclick=function(){
        next8++;
        if(next8>=zuoda8.length){
            next8=0;
        }
        animate(zuoda8[now8],{left:-170})
        zuoda8[next8].style.left="170px";
        animate(zuoda8[next8],{left:0});
        zuoda8[next8].style.zIndex="6";
        zuoda8[now8].style.zIndex="2";
        now8=next8;
    }
zuobutton6.onclick=function(){
    next8--;
    if(next8<=-1){
        next8=zuoda8.length-1;
    }
    animate(zuoda8[now8],{left:170})
    zuoda8[next8].style.left="-170px";
    animate(zuoda8[next8],{left:0});
    zuoda8[next8].style.zIndex="6";
    zuoda8[now8].style.zIndex="2";
    now8=next8;
}
/*内衣配饰*/
var now9=0;
var next9=0;
var zuoda9=getClass("zuoda9");
for(var i=1;i<zuoda9.length;i++){
        zuoda9[i].style.left="170px";
    }
    

youbutton7.onclick=function(){
        next9++;
        if(next9>=zuoda9.length){
            next9=0;
        }
        animate(zuoda9[now9],{left:-170})
        zuoda9[next9].style.left="170px";
        animate(zuoda9[next9],{left:0});
        zuoda9[next9].style.zIndex="6";
        zuoda9[now9].style.zIndex="2";
        now9=next9;
    }
zuobutton7.onclick=function(){
    next9--;
    if(next9<=-1){
        next9=zuoda9.length-1;
    }
    animate(zuoda9[now9],{left:170})
    zuoda9[next9].style.left="-170px";
    animate(zuoda9[next9],{left:0});
    zuoda9[next9].style.zIndex="6";
    zuoda9[now9].style.zIndex="2";
    now9=next9;
}
/*可爱婴童*/
var now10=0;
var next10=0;
var zuoda10=getClass("zuoda10");
for(var i=1;i<zuoda10.length;i++){
        zuoda10[i].style.left="170px";
    }
    

youbutton8.onclick=function(){
        next10++;
        if(next10>=zuoda10.length){
            next10=0;
        }
        animate(zuoda10[now10],{left:-170})
        zuoda10[next10].style.left="170px";
        animate(zuoda10[next10],{left:0});
        zuoda10[next10].style.zIndex="6";
        zuoda10[now10].style.zIndex="2";
        now10=next10;
    }
zuobutton8.onclick=function(){
    next10--;
    if(next10<=-1){
        next10=zuoda10.length-1;
    }
    animate(zuoda10[now10],{left:170})
    zuoda10[next10].style.left="-170px";
    animate(zuoda10[next10],{left:0});
    zuoda10[next10].style.zIndex="6";
    zuoda10[now10].style.zIndex="2";
    now10=next10;
}

/*小轮播*/
function lunbo(father){
    var aimg=$("a",father);
    var zhongbtn=$(".zhongbtn")[0];
    var zhongleft=$(".zhongleft",father)[0];
    var zhongright=$(".zhongright",father)[0];
    var zhongbtnli=$("li",father);
    var now=0;
    var next=0;
    for(var i=1;i<aimg.length;i++){
        aimg[i].style.left="390px";
    }
    father.onmouseover=function(){
         zhongleft.style.display="block";
         zhongright.style.display="block";
    }
    father.onmouseout=function(){
         zhongleft.style.display="none";
         zhongright.style.display="none";
    }
    zhongbtnli[0].onclick=zhongleft.onclick=function(){
        next--;
        if(next<=-1){
            next=aimg.length-1;
        }
            animate(aimg[now],{left:390})
            aimg[next].style.left="-390px";
            animate(aimg[next],{left:0});
            zhongbtnli[now].id="";
            zhongbtnli[next].id="zhongli";
            now=next;
    }
    zhongbtnli[1].onclick=zhongright.onclick=function(){
        next++;
        if(next>=aimg.length){
            next=0;
        }
            animate(aimg[now],{left:-390})
            aimg[next].style.left="390px";
            zhongbtnli[now].id="";
            animate(aimg[next],{left:0});
            
            zhongbtnli[next].id="zhongli";
            now=next;
    }
    /* for(var i=0;i<zhongbtnli.length;i++){
           zhongbtnli[i].aa=i;
           zhongbtnli[i].onclick=function(){
              next=this.aa;
              
              aimg[next].style.left="390px";
              zhongbtnli[now].id="";
              animate(aimg[next],{left:0});
              aimg[now].style.zIndex=0;
              aimg[next].style.zIndex=5;
             
              zhongbtnli[next].id="zhongli";
              now=next;
           }
       }*/
    }
var shishang1zhong=$(".shishang1zhong")[0];
var shishang1zhong1=$(".shishang1zhong1")[0];
var shishang1zhong2=$(".shishang1zhong2")[0];
var shishang1zhong3=$(".shishang1zhong3")[0];
lunbo(shishang1zhong);
lunbo(shishang1zhong1);
lunbo(shishang1zhong2);
lunbo(shishang1zhong3);