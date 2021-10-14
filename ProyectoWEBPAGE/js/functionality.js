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