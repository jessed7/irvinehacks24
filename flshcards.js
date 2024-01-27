document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("editbtn")
    var isEdit = false;
    button.addEventListener("click", function() {
        
        button.innerHTML = isEdit ? "&#128393;" : "&#10003;";
        if (isEdit) {
            var parentSpanID = button.closest("span").id
            var isCard = parentSpanID != "setname"


            var card = button.closest("span");
        }
        isEdit = !isEdit;


    });
});

