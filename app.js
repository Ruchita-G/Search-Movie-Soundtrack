// makes the button animate when enter is pressed.
$('.input-field').keypress(function (e) {
    if (e.which == 13) {
        jQuery(this).blur();
        jQuery('#submit').focus().click();
    }
});
//===============================================================================================

$("nav").submit(function (event) {

    event.preventDefault();

    var movie = $("#movieSearch").val();

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var movieDiv = $("<div class='movie'>");
        
        var imgURL = response.Poster;

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);

        var title = response.Title;

        var pTitle = $("<p>").text("title: " + title);

        console.log(pTitle);
        
        var rating = response.Rated;

        var rating = response.Director;
        var info = $("<div class='col s5'>").text("Director: " + rating);
        movieDiv.append(info);

        var rating = response.Actors;
        var info = $("<div class='col s5'>").text("Actors: " + rating);
        movieDiv.append(info);

        var rating = response.Rated;
        var info = $("<div class='col s5'>").text("Rated: " + rating);
        movieDiv.append(info);

        var year = response.Year;
        var info = $("<div class='col s5'>").text("Released: " + year);
        movieDiv.append(info);
        
        var rating = response.BoxOffice;
        var info = $("<div class='col s5'>").text("BoxOffice: " + rating);
        movieDiv.append(info);

        var rating = response.Metascore;
        var info = $("<div class='col s5'>").text("Metascore: " + rating);
        movieDiv.append(info);

        var rating = response.imdbRating;
        var info = $("<div class='col s5'>").text("imdbRating: " + rating);
        movieDiv.append(info);

        var plot = response.Plot;
        var info = $("<div class='col s5'>").text("Plot: " + plot);        
        movieDiv.append(info);

        $("#omdbDisplay").append(movieDiv);

    });

});

// Director: "Chris Buck, Jennifer Lee"

// Actors: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad"

// Rated: "PG"

// Year: "2013"

// BoxOffice: "$400,736,600"

// Metascore: "74"

// imdbRating: "7.5"

// Plot: "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
