
url = "http://api.icndb.com/jokes/random";
// button
var button = document.getElementById("get-joke");

// obsługa wciśnięcia przycisku
button.addEventListener("click", function()
{
    getJoke();
});

var paragraph = document.getElementById('joke');

// funkcja pobierająca żart za pomocą API + AJAX
function getJoke() 
{
    // utworzenie obiektu AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", function()
    {
        // parsuj JSON
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    // GET
    xhr.send();
}

// wywołanie, żeby żart pojawił się od razu po pierwszym uruchomieniu strony
getJoke();