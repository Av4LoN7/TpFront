function test() {
    
}

$(document).ready(function() {
    createSelect();

    // create select value via array
    function createSelect() {
    var tableauTarif = [{ val : 1, text : 'Normal'},{val : 2, text : 'Etudiant'}];
    var selectTarif = $("select.choixTarif");
    $(tableauTarif).each(function () {
        selectTarif.append($("<option>").attr('value', this.val).text(this.text));
    });

    var tableauSeance = [{val : 1, text : 'du lundi au vendredi de 9h à 18h'}, {val : 2, text : 'en soirée à partir de 19h'}, {val : 3, text : 'le weekend'}];
    var selectSeance = $("select.seance");
    $(tableauSeance).each(function() {
        selectSeance.append($("<option>").attr('value', this.val).text(this.text));
    });
    }

    // modif prix unitaire et total via event change sur la selection du tarif
    $(".choixTarif").change(function () {
        let selection = $(this).children("option:selected").val();
        let nombrePlace = $(".howMuch").val();
        let seanceS = $("select.seance").children("option:selected").val();

        if(parseInt(selection) === 2) {
            $(".prixUnit").text("5e");
                if(nombrePlace > 1){
                    $(".prixTotal").text( 5 * nombrePlace + "e");
                }else{
                    $(".prixTotal").text("5e")
                }
        } else {
            if(parseInt(seanceS) === 3) {
                $(".prixUnit").text("12.5e");
                $(".prixTotal").text( parseFloat(12.5 * nombrePlace) + "e");
            } else if(parseInt(seanceS) === 2){
                $(".prixUnit").text("12e");
                $(".prixTotal").text( 12 * nombrePlace + "e");
            } else {
                $(".prixUnit").text("10e");
                $(".prixTotal").text( 10 * nombrePlace + "e");
            }
        }

    });
    
    // modif prix unitaire et total via event change sur la selection de la seance
    $(".seance").change(function() {
       let seanceSelect = $(this).children("option:selected").val();
       let tarif = $(".choixTarif").children("option:selected").val();
       let nombrePlace = $(".howMuch").val();
       if(parseInt(tarif) === 1){
           if(parseInt(seanceSelect) === 1){
               $(".prixUnit").text("10e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( 10 * nombrePlace + "e");
               }else{
                   $(".prixTotal").text("10e")
               }
           } else if(parseInt(seanceSelect) === 2){
               $(".prixUnit").text("12e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( 12 * nombrePlace + "e");
               }else{
                   $(".prixTotal").text("12e")
               }
           } else {
               $(".prixUnit").text("12.5e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( parseFloat(12.5 * nombrePlace) + "e");
               }else{
                   $(".prixTotal").text("12.5e")
               }
           }
       } else if (parseInt(tarif) === 2) {
           if(parseInt(seanceSelect) === 1){
               $(".prixUnit").text("5e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( 5 * nombrePlace + "e");
               }else{
                   $(".prixTotal").text("5e")
               }
           } else if(parseInt(seanceSelect) === 2){
               $(".prixUnit").text("6e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( 6 * nombrePlace + "e");
               }else{
                   $(".prixTotal").text("6e")
               }
           } else {
               $(".prixUnit").text("6e");
               if(nombrePlace > 1){
                   $(".prixTotal").text( 6 * nombrePlace + "e");
               }else{
                   $(".prixTotal").text("6e")
               }
           }
       }
    });

    // modif prix unitaire et total via event change sur la selection du nombre de place
   $(".howMuch").on('input', function() {
       let prix = $(".prixUnit").text().split("e");
       let nombrePlace = $(".howMuch").val();
        $(".prixTotal").text(parseFloat(prix) * nombrePlace + "e");
   });

})
// function add new table row line for new reservation
function newLine(){
    $('.tableRowClone:first').clone(true).insertAfter($('.tableRowClone:last'));
}

