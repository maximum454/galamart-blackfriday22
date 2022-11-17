$(function (){
    $('.blackfriday22-block__btn').on('mouseenter', function (e){
        let idCatalog = $(this).data('id');
        $(this).parents('.blackfriday22-block__body').find('.blackfriday22-category__item').removeClass('active');
        $(this).parents('.blackfriday22-block__body').find('[data-catalog='+idCatalog+']').addClass('active');
    })
    $('.blackfriday22-block__btn').on('mouseleave', function (e){
        $(this).parents('.blackfriday22-block__body').find('.blackfriday22-category__item').removeClass('active');
    })
})