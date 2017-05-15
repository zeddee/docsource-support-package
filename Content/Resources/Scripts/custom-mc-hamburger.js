$(document).on("ready",function(){
		// Modify classes in MC menu proxy

		var checkBurgers = setInterval(function(){
				if(typeof(document.getElementsByClassName("menu _Skins_menu_sideNav")[0].children[0]) != "undefined") {
					if(document.getElementsByClassName("menu _Skins_menu_sideNav")[0].children[0].className === "has-children") {
						clearInterval(checkBurgers);
						hamburgersPlz();
					}
				}
		}, 25);		
		
		$('input[type="search"]').removeAttr('style'); // remove style attribute generated by flare *somehow*
		$('._Skins_searchbar.mc-component>.search-field.needs-pie').css('box-shadow', "0 0 0px #cacaca");
	});

function hamburgersPlz() {
	$('.mc-component').removeClass('menu _Skins_menu_sideNav')// cleans out the flare menu class, leaving only .mc-component which is used in our css to target the generated TOC menu
	$('.hamburger .sub-menu .has-children>a').append(' <button class="hamburger-expand"><i class="fa fa-caret-down"></i></button>');
	$('.small-hamburger .has-children>a').append(' <button class="hamburger-expand"><i class="fa fa-caret-down"></i></button>');
	$('.hamburger-expand').attr('href', '#'); //attempt to prevent click from navigating to page -- should only expand/collapse sidenav
	$('.has-children:first-of-type').attr('id', 'first-child');
	// searchbar force style	
	// get flare-generated toc menus to work
	$('.hamburger .has-children>a').click(function(){$(this).parent('.has-children').children('.sub-menu').slideToggle();});
	$('.small-hamburger .has-children>a').click(function(){$(this).parent('.has-children').children('.sub-menu').slideToggle();});
	$('.fa-bars').click(function(){$('.toggle-menu').slideToggle();});
}