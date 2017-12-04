// Puedes hacer uso de la base de datos a través de la variable `data`
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
//jquery header dinamico//
$(document).ready(function(){
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('header').addClass('header2');
    } else {
      $('header').removeClass('header2');
    }
  });
 
});

function drawChart() {
  
          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          data.addRows([
            ['Año', 3],
            ['Onions', 1],
            ['Olives', 1],
            ['Zucchini', 1],
            ['Pepperoni', 2]
          ]);
  
          // Set chart options
          var options = {'title':'How Much Pizza I Ate Last Night',
                         'width':400,
                         'height':300};
  
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          chart.draw(data, options);
        }