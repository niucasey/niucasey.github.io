var slideIndeces = [1, 1, 1];
var slideLengths = [2, 3, 2];
var myimg = ["#myimg0", "#myimg1", "#myimg2", "#myimg3", "#myimg4", "#myimg5", "#myimg6", "#myimg7", "#myimg8",
			 "#myimg9", "#myimg10", "#myimg11", "#myimg12", "#myimg13", "#myimg14", "#myimg15", "#myimg16"];
var mymod = ["mymod0", "mymod1", "mymod2", "mymod3", "mymod4", "mymod5", "mymod6", "mymod7", "mymod8", 
			"mymod9", "mymod10", "mymod11", "mymod12", "mymod13", "mymod14", "mymod15", "mymod16"];
var mypic = ["img0", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", 
			"img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16"];
var mycap = ["cap0", "cap1", "cap2", "cap3", "cap4", "cap5", "cap6", "cap7", "cap8",
			 "cap9", "cap10", "cap11", "cap12", "cap13", "cap14", "cap15", "cap16"];


$(document).ready(function(){
    	$(".2015").hide();
    	$(".2018").hide();
    	$(".2017").hide();
    	$(".2016").hide();
    	$(".message").hide();
    	$("#backToTop").hide();
    	$("#message").hide();
        $(".2016title").click(function(){
            $(".2016").toggle("slow");
    });
        $(".2015title").click(function(){
            $(".2015").toggle("slow");
    });
        $(".2017title").click(function(){
            $(".2017").toggle("slow");
    });
        $(".2018title").click(function(){
            $(".2018").toggle("slow");
    });
        $("h2").hover(function(){
        	$("#message").toggle();
        });

     $("p.godown").click(function(){
		$("HTML,BODY").animate({scrollTop: $(".2018title").offset().top - 90}, "slow");
	});

     
     
});



$(function(){
     $(myimg[0]).click(function(){
     	document.getElementById(mymod[0]).style.display = "block";
     	document.getElementById(mypic[0]).src = this.src;
     	document.getElementById(mycap[0]).innerHTML = this.alt;
     });

     $(myimg[1]).click(function(){
     	document.getElementById(mymod[1]).style.display = "block";
     	document.getElementById(mypic[1]).src = this.src;
     	document.getElementById(mycap[1]).innerHTML = this.alt;
     });
     $(myimg[2]).click(function(){
     	document.getElementById(mymod[2]).style.display = "block";
     	document.getElementById(mypic[2]).src = this.src;
     	document.getElementById(mycap[2]).innerHTML = this.alt;
     });

     $(myimg[3]).click(function(){
     	document.getElementById(mymod[3]).style.display = "block";
     	document.getElementById(mypic[3]).src = this.src;
     	document.getElementById(mycap[3]).innerHTML = this.alt;
     });

     $(myimg[4]).click(function(){
     	document.getElementById(mymod[4]).style.display = "block";
     	document.getElementById(mypic[4]).src = this.src;
     	document.getElementById(mycap[4]).innerHTML = this.alt;
     });

     $(myimg[5]).click(function(){
     	document.getElementById(mymod[5]).style.display = "block";
     	document.getElementById(mypic[5]).src = this.src;
     	document.getElementById(mycap[5]).innerHTML = this.alt;
     });

     $(myimg[6]).click(function(){
     	document.getElementById(mymod[6]).style.display = "block";
     	document.getElementById(mypic[6]).src = this.src;
     	document.getElementById(mycap[6]).innerHTML = this.alt;
     });

     $(myimg[7]).click(function(){
     	document.getElementById(mymod[7]).style.display = "block";
     	document.getElementById(mypic[7]).src = this.src;
     	document.getElementById(mycap[7]).innerHTML = this.alt;
     });

     $(myimg[8]).click(function(){
     	document.getElementById(mymod[8]).style.display = "block";
     	document.getElementById(mypic[8]).src = this.src;
     	document.getElementById(mycap[8]).innerHTML = this.alt;
     });

     $(myimg[9]).click(function(){
     	document.getElementById(mymod[9]).style.display = "block";
     	document.getElementById(mypic[9]).src = this.src;
     	document.getElementById(mycap[9]).innerHTML = this.alt;
     });

     $(myimg[10]).click(function(){
     	document.getElementById(mymod[10]).style.display = "block";
     	document.getElementById(mypic[10]).src = this.src;
     	document.getElementById(mycap[10]).innerHTML = this.alt;
     });

     $(myimg[11]).click(function(){
     	document.getElementById(mymod[11]).style.display = "block";
     	document.getElementById(mypic[11]).src = this.src;
     	document.getElementById(mycap[11]).innerHTML = this.alt;
     });

     $(myimg[12]).click(function(){
     	document.getElementById(mymod[12]).style.display = "block";
     	document.getElementById(mypic[12]).src = this.src;
     	document.getElementById(mycap[12]).innerHTML = this.alt;
     });

     $(myimg[14]).click(function(){
     	document.getElementById(mymod[14]).style.display = "block";
     	document.getElementById(mypic[14]).src = this.src;
     	document.getElementById(mycap[14]).innerHTML = this.alt;
     });

    $(myimg[15]).click(function(){
     	document.getElementById(mymod[15]).style.display = "block";
     	document.getElementById(mypic[15]).src = this.src;
     	document.getElementById(mycap[15]).innerHTML = this.alt;
     });

       $(myimg[16]).click(function(){
     	document.getElementById(mymod[16]).style.display = "block";
     	document.getElementById(mypic[16]).src = this.src;
     	document.getElementById(mycap[16]).innerHTML = this.alt;
     });

        $(myimg[13]).click(function(){
     	document.getElementById(mymod[13]).style.display = "block";
     	document.getElementById(mypic[13]).src = this.src;
     	document.getElementById(mycap[13]).innerHTML = this.alt;
     });
     $(".close").click(function(){
     	for(var i = 0; i < mymod.length; i++){
     		document.getElementById(mymod[i]).style.display = "none";
     	}
     });
 });

$(function(){
	$("#backToTop").on('click', function(){
		$("HTML, BODY").animate({scrollTop: 0}, "slow");
	});
});


window.onscroll = function() {
	scrollFunction();
};



function scrollFunction(){
	if(document.body.scrollTop > 60 ||
		document.documentElement.scrollTop > 60){
		$("#backToTop").show("slow");
	}else{
		$("#backToTop").hide("slow");
	}
}







function nextSlide(index, name){
	var slides = document.getElementsByClassName(name);
	slideIndeces[index] ++;
	if(slideIndeces[index] > slideLengths[index]){
		slideIndeces[index] = 1;
	}
	for(var i = 0; i < slideLengths[index]; i ++){
		if(i === slideIndeces[index] - 1){
			slides[i].style.display = "block";
			continue;
		}
		slides[i].style.display = 'none';
	}
}


