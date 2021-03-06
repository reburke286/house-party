$(document).ready(function () {
    console.log("hey cutie ... :) ")
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

        handleEmail(newRSVP)
    }


    const handleEmail = ({ name, answer, group }) => {
        const subject = `New RSVP from ${name}`
        const body = `${name} has RSVP'd: ${answer}. This applies to ${group} as well.`
        const templateParams = {
            subject,
            body,
        }
        emailjs.send("service_qv5x0ps", "template_h8xdf0l", templateParams, 'AjGjDzBIJheyJUOHP').then(function (response) {
            console.log('SUCCESS!', `We love you ${name}, ${response.text}?`);
            $("#name").val("")
            $("#group").val("")
            $('#yes-rsvp').prop('checked', false);
            $('#no-rsvp').prop('checked', false);
            $("#rsvpModal").modal("hide");
            alert("Congratulations! You've just done the very noble thing of telling two people in the midst of planning a huge party whether or not you're coming. We love you.")
        }, function (error) {
            console.log('FAILED...', error);
        });

    }


})
