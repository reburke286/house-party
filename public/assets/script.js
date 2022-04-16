$(document).ready(function () {
    console.log('hi')

    //Modal Functions
    $("#infoModalBtn").on("click", function () {
        $("#infoModal").modal("show");
    })

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

    //RSVP functions
    $(".rsvp-btn").on('click', handleRSVP)

    function handleRSVP(e) {
        e.preventDefault();
        const name = $("#name").val()
        const groupData = $("#group").val()
        const yes = $("#yes-rsvp").is(':checked')
        const no = $("#no-rsvp").is(':checked')

        let answer;

        if (name === "") {
            alert("You need to tell us who you are. That seems obvious.")
            return;
        }
        if (yes && no) {
            alert("Oh, um, just pick one?")
            return;
        } else if (no) {
            answer = false
        } else if (yes) {
            answer = true
        }

        const newRSVP = {
            name: name,
            group: groupData,
            answer: answer
        }

        saveRSVP(newRSVP).then(() => {
            $("#name").val("")
            $("#group").val("")
            $('#yes-rsvp').prop('checked', false);
            $('#no-rsvp').prop('checked', false);
            getRSVPs();
            $("#rsvpModal").modal("hide");
        })
    }

    const getRSVPs = () =>
        fetch('/api/rsvps', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

    const saveRSVP = rsvp => {

        fetch('/api/rsvps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rsvp)
        }).then((data) => {
            console.log(data)
            alert("Congratulations! You've just done the very noble thing of telling two people in the midst of planning a huge party whether or not you're coming. We love you.")
        })
    }


})
