import { countGender, countStatus, elements } from './data.js';

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);


function drawChart() {
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows(countGender(elements));
  let options = {
    heigth: 200,
    colors: ['#146666', '#c3bd2e', '#22a2bc', '#f3b49f', '#f6c7b6'],
    'backgroundColor': {
      'fill': '#081014',
      'opacity': 30,
    },
    legend: {
        textStyle: {
        color: '#ffffff',
        fontSize: 14,
      }
    }
  };
  let chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);
}
function drawChart2() {
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows(countStatus(elements));
  let options = {
    heigth: 200,
    colors: ['#146666', '#c3bd2e', '#22a2bc', '#f3b49f', '#f6c7b6'],
    'backgroundColor': {
      'fill': '#081014',
      'opacity': 30,
    },
    legend: {
        textStyle: {
        color: '#ffffff',
        fontSize: 14,
      }
    }

  };
  let chart = new google.visualization.PieChart(document.getElementById('chart2'));
  chart.draw(data, options);
}