$(document).on('ready', function () {
    $("#number").focus();
});

$(document).on('submit', '#addForm', function (e) {
    e.preventDefault();
    addNum();
});

$(document).on('click', '#btn-clear', function () {
    clearNumbers();
});

$(document).on('click', '#btn-order', function () {
    initOrder();
});
/**
 * Created by cruiz on 1/12/2017.
 */
