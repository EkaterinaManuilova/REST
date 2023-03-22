$(document).ready(function () {
    $("form").submit(function (event) {
        const formData = {
            query: $("#ip").val(),
        };
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
        const token = "9f6b9634249a7dd0861a1901e5deaecbd277b3d5";

        $.ajax({
            type: "GET",
            url: url + formData.query,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Token "+ token)
            },
            data: '',
            dataType: "json",
            encode: true,
        }).done(function (result) {
            console.log(result);
            if (result.location != null) {
                $("#result").html(
                    '<p>Город: ' + result.location.data.city + '</p>');
            } else {
                $("#result").html('Ничего не найдено');
            }

        });
        event.preventDefault();
    });
});