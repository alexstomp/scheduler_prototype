// This is where it all goes :)

$().ready(function() {

    // OPENING THE DRAWER
    $('.assignment-row').click(function(){
        $(this).addClass('editing');
        $('.drawer').animate({'right': '0px'}, 300);
        $('#assignments-wrap').animate({'padding-right': '400px'}, 300);
    });

    $('.grid-row .cell').click(function(){
        $(this).addClass('editing');
        $('.drawer').animate({'right': '0px'}, 300);
        $('#grid-wrap').animate({'padding-right': '400px'}, 300);
    });

    $('.drawer .js-close-link').click(function() {
        $('.drawer').animate({'right': '-100%'}, 300);
        $('#assignments-wrap').animate({'padding-right': '0'}, 300);
        $('#grid-wrap').animate({'padding-right': '0'}, 300);
        $('.grid-row .cell.editing').removeClass('editing');
        $('.assignment-row.editing').removeClass('editing');
    });

    // ASSIGNMENTS DRAWER
    $('.js-open-assignment').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            if($('.js-open-assignment.active').length == 0) {
                $('.js-assignment-fields').hide();
            }
        } else {
            $(this).addClass('active');
            $('.js-assignment-fields').show();
        }
    });

    $('.js-car-select').change(function() {
        $('.js-officer-selection').show();
    });

    $('.js-first-patrol').change(function() {
        second_patrol.hide();
        $('.js-partner').show();
    });

    $('.js-partner .js-alternate-selection').click(function() {
        $('.js-partner').hide();
        $('.js-second-patrol').show();
    });

    $('.js-next-assignment').click(function() {
        ResetForm();
        $('.js-open-assignment.active').removeClass('active');
        $('.js-open-assignment').last().addClass('active');
        $('.js-assignment-fields').show();
        $('.js-close-link').addClass('accent');
        $('.js-next-assignment').hide();
    });

    $('.js-success').click(function() {
        $('.js-removed-sample').hide();
        $('.js-sample').show();
    });

    var ResetForm = function() {
        $('.js-car-select').prop('selectedIndex', 0);
        $('.js-select-patrol').prop('selectedIndex', 0).show();
        $('.js-assignment-fields').hide();
        $('.js-officer-selection').hide();
        $('.js-partner').hide();
    };

//    var first_patrol = $(".js-first-patrol").select2().data('select2').$container.addClass('js-first-patrol');
//    var second_patrol = $(".js-second-patrol").select2().data('select2').$container.addClass('js-second-patrol');
});
