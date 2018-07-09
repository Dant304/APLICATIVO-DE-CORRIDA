$(document).ready(() => {
    $("#campoMotorista").hide();
    $("#campoPassageiro").hide();

    $("#buttonMotorista").click(() => {
        $("#campoMotorista").show();
        $("#campoPassageiro").hide();
    });
    $("#buttonPassageiro").click(() => {
        $("#campoMotorista").hide();
        $("#campoPassageiro").show();
    });
});