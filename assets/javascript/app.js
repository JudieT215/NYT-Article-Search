$(document).ready(function() {
    // Declare global variables
    var searchTerm;
    var numRecords;
    var startYear = 1999;
    var endYear = 2020;


    // Declare functions
    function displayArticleResults() {
        // Capture user input into global variables
        searchTerm = $("#search-term").val();
        numRecords = $("#records-number").val();
        // startYear = $("#start-year");
        // endYear = $("#end-year");

        // Build queryURL
        var apiKey = "e67f89cb72c74c48bb6bf321b0c17541"
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231" + "&api-key=" + apiKey;

        // Call AJAX request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            var articles = response.response.docs;
            console.log(articles);
        })
        
        // Display article results in div
        for (i = 0; i < articles.length; i++) {
            
        }

    }

    // Execute function
    $("#search").on("click", displayArticleResults);

});