import { countGender, countStatus, elements } from './data.js';

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChartStatus);
google.charts.setOnLoadCallback(drawChartGender);


function drawChartGender() {
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
  let chart = new google.visualization.PieChart(document.getElementById('chart-gender'));
  
  chart.draw(data, options);
}
function drawChartStatus() {
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
  let chart = new google.visualization.PieChart(document.getElementById('chart-status'));
  chart.draw(data, options);
}