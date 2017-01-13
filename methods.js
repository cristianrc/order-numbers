Numbers = []; // Stores the list of numbers to order
var i = 0, j = 0;
var iteration;

function addNum() { // Validate and Add Number
    var num = $("#number");

    if (num.val().trim() != "") { // simple validation spaces
        if (Numbers.indexOf(parseInt(num.val())) == -1) { // validation duplicated
            num.removeClass('invalid');
            Numbers.push(parseInt(num.val()));
            printNum();
            Materialize.toast('Number "' + num.val() + '" added correctly!', 3000)
        } else {
            num.addClass('invalid').next().attr('data-error', 'Duplicate number, please try again');
        }
        num.val('');
    } else {
        num.addClass('invalid').next().attr('data-error', 'Enter a number');
    }
    num.focus();
    console.log(Numbers.toString());
}

function clearNumbers() { // Clean panel numbers and Array
    Numbers.length = 0;
    $("#panel-numbers").html("");
    $("#number").focus();
}

function initOrder() { // Init and call Method OrderNumbers
    iteration = setInterval(orderNumbers, 400);
    $("#btn-order").addClass('disabled');
}

function printNum() { // Print numbers in Panel Numbers
    var panelNumbers = $("#panel-numbers");

    panelNumbers.html("");
    for (i_ = 0; i_ < Numbers.length; i_++) {
        panelNumbers.append("<span class='num'>" + Numbers[i_] + "</span>");
    }
}

function orderNumbers() {
    // Order numbers (Bubble sort algorithm)
    // necessary for the effect of ordering, if not be the animation simply use javascript function SORT
    animationOrder();
    $("#panel-numbers").addClass('animation');

    if (i < Numbers.length) {
        if (j < (Numbers.length - i)) {
            if (Numbers[j] > Numbers[j + 1]) {
                aux = Numbers[j];
                Numbers[j] = Numbers[j + 1];
                Numbers[j + 1] = aux;
            }
            j++;
        } else {
            j = 0;
            i++;
        }

    } else {
        clearInterval(iteration); // stop SetInterval
        $("#btn-order").removeClass('disabled');
        $("#panel-numbers").removeClass('animation');
        i = 0;
        j = 0;
    }
    printNum();
}

function animationOrder() {
    $("#animationDelays").remove();

    var totalNum = Numbers.length;
    var time = 0;
    var styles = "";
    for (totalNum; totalNum > 0; totalNum--) {
        time += (parseFloat((0.03).toFixed(2)));
        styles += ".animation span.num:nth-child(" + totalNum + ") { animation-delay: " + time.toFixed(2) + "s; } ";
    }
    $("<style id='animationDelays'>" + styles + "</style>").appendTo("head");
}
/**
 * Created by cruiz on 1/12/2017.
 */
