!function(){var s=1;$(".level-one").addClass("is-open"),$(document).on("click","#primary-nav span",function(e){var i=$(e.target),a=i.parent(),l=a.attr("class");a.hasClass("level-one")&&(1==s?(a.addClass("active"),a.find(".level-two").addClass("is-open"),a.siblings().addClass("exit").removeClass("is-open"),setTimeout(function(){a.siblings().hide()},1e3),s+=1):2==s?($(".active").removeClass("active"),a.find(".level-two").removeClass("is-open"),a.siblings().show(10,function(){a.siblings().removeClass("exit").addClass("is-open")}),s-=1):3==s&&($(".active").removeClass("active"),a.find(".level-two").removeClass("is-open"),a.find(".level-three").removeClass("is-open"),a.siblings().show(10,function(){a.siblings().removeClass("exit").addClass("is-open")}),s-=2)),a.hasClass("level-two")&&(2==s?(a.addClass("active"),a.find(".level-three").addClass("is-open"),a.siblings().addClass("exit").removeClass("is-open"),setTimeout(function(){a.siblings().hide()},400),s+=1):3==s&&(a.removeClass("active"),a.find(".level-three").removeClass("is-open"),a.siblings().show(10,function(){a.siblings().removeClass("exit").addClass("is-open")}),s-=1))}),$(document).on("click","#toggle",function(s){var e=$(s.target),i=e.parent(),a=i.attr("class");$("body").toggleClass("is-open"),$("#primary-nav *").removeClass("active is-open exit").show()})}();