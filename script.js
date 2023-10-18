$(document).ready(function() {
    var URL = "https://static.codehs.com/api/12345/movies/all";

        // click event for submit button the gets the value inputed
        $("#search").click(function() {
            var Title = $("#movie").val();
            findReleaseDate(Title);
        });


    function findReleaseDate(movie) {
        $.getJSON(URL, function(data) {
            // for if no data is found
            var releaseDate = "Release date not found."; 

            // loop through the movies 
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == movie) {
                    releaseDate = data[i]["release-date"];
                }
            }


            $("#release-date").text("Release Date: " + releaseDate);
        });
    }

});