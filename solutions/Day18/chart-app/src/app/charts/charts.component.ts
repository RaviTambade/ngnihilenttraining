import { Component, ElementRef, ViewChild } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {

  @ViewChild('barChart', { static: false }) barChart!: ElementRef;
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef;


  loadCharts() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      this.drawBarChart();
      this.drawLineChart();
    });
  }

  ngAfterViewInit(): void {
   
    // Wait for loader.js to load
    const interval = setInterval(() => {
      if (typeof google !== 'undefined' && google.charts) {
        clearInterval(interval);
        this.loadCharts();
      }
    }, 50);
  }

  drawBarChart() {
    const data = google.visualization.arrayToDataTable([
      ['Month', 'Sales'],
      ['Jan', 70],
      ['Feb', 120],
      ['Mar', 150],
      ['Apr', 200]
    ]);

    const options = {
      title: 'Monthly Sales',
      colors: ['#42A5F5']
    };

    const chart = new google.visualization.ColumnChart(this.barChart.nativeElement);
    chart.draw(data, options);
  }

  drawLineChart() {
    const data = google.visualization.arrayToDataTable([
      ['Day', 'Visitors'],
      ['Mon', 50],
      ['Tue', 70],
      ['Wed', 160],
      ['Thu', 50],
      ['Fri', 70],
      ['Sat', 160]
    ]);

    const options = {
      title: 'Visitors Trend',
      curveType: 'function'
    };

    const chart = new google.visualization.LineChart(this.lineChart.nativeElement);
    chart.draw(data, options);
  }
}