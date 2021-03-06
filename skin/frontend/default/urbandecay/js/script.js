/**
 * Created by illidar on 24.11.14.
 */

    // ==============================================
    // Product DETAILS
    // ==============================================

$j(document).ready(function(){
    $j('.box-collateral h2').append( "<span>+</span>" );

    $j('.box-collateral h2').click(function() {
        var txt = $j(this).text();
        $j("h2:contains('"+txt+"')").siblings('.box-collateral div').slideToggle("fast", function() {

            // js scroll plugin
            if ($j(this).is(':visible')) {
                $j(this).jScrollPane(
                    {
                        verticalDragMinHeight: 114,
                        verticalDragMaxHeight: 114
                    }
                )
            }
        });

        if ($j(".box-collateral h2:contains('"+txt+"') span").text() == "+") {
            $j(".box-collateral h2:contains('"+txt+"') span").text("-");
        } else {
            $j(".box-collateral h2:contains('"+txt+"') span").text("+");
        }
    });
});

    // ==============================================
    // Product Count Select Box
    // ==============================================

$j(document).ready(function(){
    $j('.slct_count').click(function(){
        var dropBlock = $j(this).parent().find('.slct_drop_list');

        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();

            $j(this).addClass('active');
            $j('#slct_decor_arrow').addClass('active_arrow');

            $j('.slct_drop_list').find('li').click(function(){

                var selectResult = $j(this).html();

                $j(this).parent().parent().find('#qty').val(selectResult);

                $j('.slct_count').removeClass('active');
                $j('.slct_count span').html(selectResult);
                $j('#slct_decor_arrow').removeClass('active_arrow');

                dropBlock.slideUp();
            });
        } else {
            $j(this).removeClass('active');
            $j('#slct_decor_arrow').removeClass('active_arrow');
            dropBlock.slideUp();
        }
        return false;
    });
});

    // ==============================================
    // Review Rating Lines
    // ==============================================

$j(document).ready(function() {
    $j("input:radio[class^=radio]").each(function() {
        var $this = $j(this);
        var $value = $this.attr('place');
        switch ($value)
        {
            case '1': $this.attr('title', 'Poor');
                break;
            case '2': $this.attr('title', 'Fair');
                break;
            case '3': $this.attr('title', 'Average');
                break;
            case '4': $this.attr('title', 'Good');
                break;
            case '5': $this.attr('title', 'Excellent');
                break;
            default:  $this.attr('title', '');
        }
    });

    $j('.hover-star').rating({
        focus: function(value, link){
            var str = $j(this).context.name;
            str = str.replace('[', '_').replace(']', '');
            var tip = $j("#hover_" + str);
            tip[0].data = tip[0].data || tip.html();
            tip.html(link.title || 'value: '+value);
        },
        blur: function(value, link){
            var str = $j(this).context.name;
            str = str.replace('[', '_').replace(']', '');
            var tip = $j("#hover_" + str);
            $j("#hover_" + str).html(tip[0].data || '');
        }
    });

});


    // ==============================================
    // Animate scroll
    // ==============================================

$j(document).ready(function() {
    function scrollToAnchor(aid) {
        var aTag = $j("div[class='" + aid + "']");
        $j('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
    }

    $j("#review-count-id").click(function () {
        scrollToAnchor('reviews-info-block');
    });
});

$j(document).mousemove(function() {
    if($j('.header-cart-link').is(':hover') || $j('.header-cart-mini-div-wrapper').is(':visible')) {
        $j('.mini-cart-items-in-bag-wrapper').jScrollPane(
            {
                verticalDragMinHeight: 114,
                verticalDragMaxHeight: 114
            }
        )
    }
});

    // ==============================================
    // Sort By Select Box
    // ==============================================

$j(document).ready(function() {
    $j(function () {
        $j("#sort_by_select").selectbox();
    });
});