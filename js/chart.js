$(document).ready(function() {
  var apiPath = "http://api.fixer.io/";
  var chartArray = [['date', 'Rate']];


  $( "#btn_EURUSD" ).click(function() {
    $( "#curve_chart" ).css("display", "inline-block");
    getChartData(apiPath, "2000-01-01", "USD");
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  });
  $( "#btn_EURGBP" ).click(function() {
    $( "#curve_chart" ).css("display", "inline-block");
    getChartData(apiPath, "2000-01-01", "GBP");
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    // chartArray = [];
  });
  $( "#btn_EURCZK" ).click(function() {
    $( "#curve_chart" ).css("display", "inline-block");
    getChartData(apiPath, "2000-01-01", "CZK");
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    // chartArray = [];
  });



  function drawChart() {
    var data = null;
    data = google.visualization.arrayToDataTable(chartArray);

    var options = {
      crosshair: { trigger: 'both', orientation: 'both', opacity: 0.5 },
      title: 'Exchange rate chart',
      legend: { position: 'bottom' },
      backgroundColor: '#2d423f', 
      colors: ['#ffee00'],
      // vAxis: { titleTextStyle: color: ["green"]}
      hAxis: {textStyle:{color: '#ffee00', opacity: 0.7} },
      vAxis: {textStyle:{color: '#ffee00', opacity: 0.7} } 
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

  function getChartData(apiPath, date, quote){
    chartArray.splice(0);
    chartArray.push(['date', 'Rate']);

      for(var i = 0; i<100; i++){

        // Date format: 2000-01-03
        var api = apiPath + date;

          $.getJSON(api).then(function(json){
            var currencyData = json;

            chartArray.push([currencyData.date, currencyData.rates[quote]]);

          });
          if(date.substr(date.length - 1) == "9"){
            date = date.substring(0, date.length-2) + (parseInt(date.substring(date.length-2, date.length-1)) + 1) + "0";
          }
          else if(date.substr(date.length - 2) == "28"){
            date = date.substring(0, date.length-4) + (parseInt(date.substring(date.length-4, date.length-3)) + 1) + "-01";
          }
          else{
            date = date.substring(0, date.length-1) + (parseInt(date.substr(date.length - 1)) + 1);
          }
          // console.log(date);
          // console.log("* " + parseInt(date.substr(date.length - 1)));
      }    
  };
});