if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
function sendDialogDelete(idCommentDelete, commentDeleteUpdate) {
    document.getElementById("idCommentDelete").value = idCommentDelete;
    document.getElementById("txtCommentDelete").value = commentDeleteUpdate;
}


function viewDataComent(idComment, matter, name, idUser, dateRegister, comment) {
    document.getElementById("txtMatterUpdate").value = matter;
    document.getElementById("txtIdUserUpdate").value = idUser;
    document.getElementById("txtNameUpdate").value = name;
    document.getElementById("txtCommentUpdate").value = comment;
    document.getElementById("txtIdUpdate").value = idComment;
    document.getElementById("txtDateRegister").value = dateRegister;
}

$('section.awSlider .carousel').carousel({
    pause: "hover",
    interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
    var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src', bscn);
});


/*
Philips ambilight tv
Üzerine gleince duruyor slide
*/