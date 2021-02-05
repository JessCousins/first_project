// Part One
function myFunction1(event) {
    console.log("Hello");
}

let formButton1 = $('#button1');
formButton1.on("click", myFunction1);

// Part Two
function myFunction2(event) {
    let fieldValue = $("#field1").val();
    console.log(fieldValue);
    let fieldValue2 = $("#field2").val();
    console.log(fieldValue2);
    let addValues = Number(fieldValue) + Number(fieldValue2);
    console.log(addValues);
}

let formButton2 = $('#button2');
formButton2.on("click", myFunction2);

// Part Three
function hideFunction(event) {
    if ($("#paragraphToHide").is(":visible")) {
        $("#paragraphToHide").hide();
    } else {
        $("#paragraphToHide").show();
    }}

let formButton3 = $('#button3');
formButton3.on("click", hideFunction);

// Part Four
function validateFunction(event) {
    let v1 = $("#phoneField").val();
    let reg = /^\d{3}-\d{3}-\d{4}$/;
    if(reg.test(v1)) {
        console.log("OK");
    } else {
        console.log("Bad");
    }}

let formButton4 = $('#button4');
formButton4.on("click", validateFunction);

// Part Five
function jsonFunction(event) {
    let formJsonObject = {};
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    formJsonObject.firstName = firstName;
    formJsonObject.lastName = lastName;
    formJsonObject.email = email;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
}

let formButton5 = $('#button5');
formButton5.on("click", jsonFunction);