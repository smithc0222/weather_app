$(document).ready(function() {

  var locationAPI = $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    console.log(data);
    var state = data.region;
    var city = data.city;
    var lat = Math.round(data.lat);
    var lon = Math.round(data.lon);
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=d3bd37158407a170ed1402e19444d572";

    var weatherObject = $.getJSON(url, function(json) {
      var weatherData = [];
      var weather = json.weather[0]['main'];
      var temp = Math.round(json.main.temp);
      var icon = json.weather[0]['icon'];
      var image = "src='http://openweathermap.org/img/w/";

      $(".temp").html(temp + "&deg;");
      $(".weather").html(weather);
      $(".city").html(city + ", " + state);
      $(".image").html("<img " + image + icon + ".png'>");
      console.log("<img " + image + icon + ".png'>");

      $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');
        if ($(this).find('.btn-primary').size() > 0) {
          $(this).find('.btn').toggleClass('btn-primary');
        }
      });

      $('.btn-toggle').click(function() {
        if ($(this).find(".far").hasClass('active')) {
          $(".temp").html(Math.round(temp = ((temp - 32) * (5 / 9))) + "&deg;");
        };

        if ($(this).find(".cels").hasClass('active')) {
          $(".temp").html(Math.round(temp = ((9 / 5) * temp) + 32) + "&deg;");
        };
      });
    });
  });
});
