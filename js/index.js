$(function(){
	
	//下拉菜单
	function NavTab(obj){
		var oShowLi=$(obj).parent('li');
		var oShowList=$(obj);
		oShowLi.each(function(index, element) {
	        this.onmouseenter=function(){
				oShowList.eq(index).show();
			}
	        this.onmouseleave=function(){
				oShowList.eq(index).hide();
			}
	    });
	}
	NavTab('.showList')
	
	//全选 不选 反选
	var oAll=$('.logoWarp-all');
	var oNoAll=$('.logoWarp-noall');
	var oTgAll=$('.logoWarp-toggleall');
	var oInp=$('.list_item').children('li').children('label').children('input');
	
	oAll.click(function(){
		oInp.each(function(index1,element1){
			element1.checked=true;
		})
	});
	oNoAll.click(function(){
		oInp.each(function(index1,element1){
			element1.checked=false;
		})
	});
	oTgAll.click(function(){
		oInp.each(function(index1,element1){
			if(element1.checked==false){
				element1.checked=true;
			}else{
				element1.checked=false;
			}
		})
	});
	



//导航切换

////调用导航封装函数
var oLeftBox=$('.leftBox');
oLeftBox.each(function(i,e){
	Tab(e,'.comTitle>.comTitle_tabs>li',$('.comTitle').next('.tabs').find('.tabs_item'));
	Tab(e,'.contNav>.contNav_item',$('.titBg').next('.tabs').find('.tabs_item'));
})

console.log()

Tab('.tab_4',".tab_title>li",".smList>.item")

//导航切换更改后代码
function Tab(tab1,comTiTaLi,Items){
    var obj = $(tab1);
    obj.find(comTiTaLi).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        obj.find(Items).removeClass("show");
        obj.find(Items).eq($(this).index()).addClass("show");
		var oChangeUl=obj.find(Items).find('.photo_list').eq($(this).index());
        oChangeUl.html(oChangeUl.html()+oChangeUl.html());
		var oChangeLe=obj.find(Items).find('.photo_prev').eq($(this).index());
		var oChangeRi=obj.find(Items).find('.photo_next').eq($(this).index());
		oChangeUl.css({'margin-left':'0px'})
		oChangeRi.click(function(){
			oChangeUl.animate({'margin-left':'-1000px'},{duration:2000})
		})
		oChangeLe.click(function(){
			oChangeUl.animate({'margin-left':'0px'},{duration:2000})
		})	
    });
}

//切换导航与轮播切换
Tab('.comWidth1','.comTitle>.comTitle_tabs>li','.tabs>.tabs_item');






function NumAdd(Drop){
	var oDrop=$(Drop);
	var oNextN=oDrop.find('.next');
	var oPrevN=oDrop.find('.prev');
	var oDropI=oDrop.find('span').find('i');
	var NumAddnum=0;
	oNextN.mouseenter(function(){
		NumAddnum++;
		if(NumAddnum>=5){
			NumAddnum=0;
		}
		oDropI.removeClass('active');
		oDropI.eq(NumAddnum).addClass('active');
	})
	oPrevN.mouseenter(function(){
		NumAddnum--;
		if(NumAddnum<0){
			NumAddnum=4;
		}
		oDropI.removeClass('active');
		oDropI.eq(NumAddnum).addClass('active');
	})
}



NumAdd('.drop');













	
})


















//导航切换更改前代码
//function Tab(tab1,comTiTaLi,Items){
//  var obj = $(tab1);
//  obj.find(comTiTaLi).on("mouseover",function(){
//      $(this).addClass("active").siblings().removeClass("active");
//      obj.find(Items).removeClass("show");
//      obj.find(Items).eq($(this).index()).addClass("show");
//      console.log($(this).index())
//  });
//  console.log(obj)
//}
//
//






