

var baseURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=';
var apiKey = '&api-key=fac34c6cdfb64f3f9081e7f57a66d51f';
var userSearch = 'carolina';
var startYear = '20170101';
var endYear = '20180101';
var numResults = 10;
let queryURL = baseURL + userSearch + '&begin_date=' + startYear + '&end_date=' + endYear + apiKey;


$('#submit').on('click', function () {
    userSearch = $('#query').text();
    //display results
        
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){

    for (let i = 0; numResults; i++) {

        newDiv = $('<div>');
        h3 = $('<h3>');
        p = $('<p>');

        h3.text(response.response.docs[i].headline.main);
        p.text(response.response.docs[i].byline.original);

        newDiv
            .addClass('bg-light results-div')
            .append(h3)
            .append(p);
       
            $('#results')
                .append(newDiv);

        console.log(response.response.docs[i].headline.main);
        console.log(response.response.docs[i].byline.original);
    }

});
});


