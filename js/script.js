const getCurrentForecast = async() => {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=e03cf4d8516442e1aa0112522211409&q=Tokyo&aqi=no');
    const myJson = await response.json(); //extract JSON from the http response

    // do something with myJson
    console.log(myJson);

    console.log(`It is currently ${myJson.current.condition.text} in ${myJson.location.name} today.`);
}

const getHourlyForecast = async() => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e03cf4d8516442e1aa0112522211409&q=Manila&days=10&aqi=no&alerts=no');
    const myJson = await response.json(); //extract JSON from the http response

    // do something with myJson
    console.log('');
    console.log('Hourly Forecast:');
    console.log(myJson);
}

getCurrentForecast();
getHourlyForecast();

// Modal 
$(".modal-button").click(function() {
    $(".modal-search").addClass("is-active");
});

$(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
});