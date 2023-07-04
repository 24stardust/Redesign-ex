$(document).ready(function(){
    // 헤더
    $('body a').click(function(e){
        e.preventDefault();
    })
    $('.header-menu .depth1 > li').mouseenter(function(){
        $(this).find('.depth2').stop().show();
        $('.header-BG').show();
        $('.header-item').removeClass('down')
    })
    $('.header-menu .depth1 > li').mouseleave(function(){
        $(this).find('.depth2').hide();
        $('.header-BG').hide();
    })

    // 모바일 메뉴
    $('.mobile-btn').click(function(e){
        e.preventDefault();
        $('.burger').toggleClass('burger-open');
        $('.mobile-mask').toggleClass('mobile-mask-active');
        $('.mobile-nav').toggleClass('mobile-nav-open');
        $('.depth1 > li').height(70);
    })

    // 화면 사이즈
    $(window).resize(function(){
        let temp = $(window).width();
        if(temp > 1200){
            $('.burger').removeClass('burger-open')
            $('.mobile-mask').removeClass('mobile-mask-active')
            $('.mobile-nav').removeClass('mobile-nav-open')
            $('.mb-mainmenu').removeClass('mb-mainmenu-open')
        }
    })

    // 모바일 메뉴 펼치기
    const mb_mainmenu = $('.mb-mainmenu')
    const mb_submenu = $('.depth2')
    let mb_submenu_height = []
    $.each(mb_submenu, function(index){
        let count = $(this).find('li').length;
        console.log(count)
        mb_submenu_height[index]= 61*count+10;
    })

    let mb_li = $('.depth1 > li')
    $.each(mb_mainmenu, function(index){
        $(this).click(function(e){
            e.preventDefault();
            $(this).toggleClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active){
                let temp = mb_submenu_height[index]
                mb_li.eq(index).height(temp+70)
                // mb_li.eq(index).siblings().height(70)
            }else {
                mb_li.eq(index).height(70)
            }
        })
    })

    $('.mobile-mask').click(function(){
        $('.burger').removeClass('burger-open');
        $('.mobile-mask').removeClass('mobile-mask-active');
        $('.mobile-nav').removeClass('mobile-nav-open');
        $('.depth1 > li').height(70);
        $('.mb-mainmenu').removeClass('mb-mainmenu-open');
    })

    // 헤더 스크롤 배경
    const header_item = $('.header-item'),
        page = $('.header-item h1'),
        pageOffsetTop = page.offset().top;
    $(window).resize(function(){
        pageOffsetTop = page.offset().top;
    })

    $(window).scroll(function(){
        const scrolled = $(window).scrollTop() >= pageOffsetTop;
        header_item.toggleClass('down', scrolled)
    })
    

    // 시설안내 탭
    $('.facil_tab-menu li').click(function(){
        $('.facil_tab-menu li').removeClass('on')
        $(this).addClass('on')

        var idx = $(this).index()
        $('.facil_tab-item > *').hide().removeClass('on')
        $('.facil_tab-item > *').eq(idx).show().addClass('on')
    })

    // 알림 탭

    $('.post_tab-menu li').click(function(){
        $('.post_tab-menu li').removeClass('on')
        $(this).addClass('on')

        var idx = $(this).index()
        $('.post_tab-item > *').hide().removeClass('on')
        $('.post_tab-item > *').eq(idx).show().addClass('on')
    })


    // 고탑
    $(window).scroll(function(){
        if($(this).scrollTop() >=300){
            // gotop 보이게
            $('.gotop').fadeIn();
        }else {
            // gotop 안보이게
            $('.gotop').fadeOut();
        }
    })
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        },1000)
    })
    $('.go_bottom').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 3600
        },1000)
    })

})