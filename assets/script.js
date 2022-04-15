

// var myModal = document.getElementById('infoModal')

// myModal.addEventListener('show.bs.modal', function (event) {
//     if (!data) {
//         return event.preventDefault() // stops modal from being shown
//     }
// })

$(document).ready(function () {
    console.log("ready!");

    var infoModal = document.getElementById('infoModalBtn')

    infoModal.addEventListener('click', function () {
        console.log("listening")
        $("#infoModal").modal("show");
    });

    $("#lodgingModalBtn").on('click', function () {
        $("#lodgingModal").modal("show");
    })

    $("#directionsModalBtn").on('click', function () {
        $("#directionsModal").modal("show")
    })

    $("#registryModalBtn").on("click", function () {
        $("#registryModal").modal("show")
    })

    $("#rsvpModalBtn").on("click", function () {
        $("#rsvpModal").modal("show")
    })

    $("#faqModalBtn").on("click", function () {
        $("#faqModal").modal("show")
    })

    $(".btn-close").on('click', function () {
        $("#infoModal").modal("hide");
        $("#lodgingModal").modal("hide");
        $("#directionsModal").modal("hide")
        $("#registryModal").modal("hide")
        $("#rsvpModal").modal("hide")
        $("#faqModal").modal("hide")
    })
})
