import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Chart} from 'chart.js';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  tab: string = "graph";
  isAndroid: boolean = false;
  patient = {
    imageUrl: '../../assets/imgs/female1-512.png',
    firstName: "firstName",
    lastName: "lastName",
    address: "Address",
    gender: "Gender",
    dataOfBirth: "Data of birth",
    height: "Height",
    weight: "Weight",
    nic: "NIC",
    contactPersonName: "Contact person name",
    contactPersonNumber: "contact Person number",
  };

  @ViewChild('pulseRateCanvas') pulseRate;
  @ViewChild('ppgCanvas') ppg;
  private pulseRateChart: any;
  private ppgChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab = "graph";

  }


  ionViewDidLoad() {
    this.loadGraph();


  }

  loadGraph() {
    this.pulseRateChart = new Chart(this.pulseRate.nativeElement, {
      type: "line",
      data: {
        labels: [
          '10',
          '',
          '30',
          '',
          '50',
          '',
          '10',
          '',
          '30',
          '',
          '50',
          '',
          '10',
          '',
          '30',
          '',
          '50',
        ],
        datasets: [
          {
            label: "Temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgb(133, 4, 12,0.4)",
            borderColor: "rgb(133, 4, 12)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(133, 4, 12,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(133, 4, 12,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [36,35,36,34,36,37,36,34,36,35,35,36,36,37,34,35,37],
            spanGaps: false
          }
        ]
      },
      options: {
        scales: {
          width: 100,
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Celsius"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time"
              }
            }
          ]
        }
      }
    });
    this.ppgChart = new Chart(this.ppg.nativeElement, {
      type: "line",
      data: {
        labels: [
          '10',
          '',
          '30',
          '',
          '50',
          '',
          '10',
          '',
          '30',
          '',
          '50',
          '',
          '10',
          '',
          '30',
          '',
          '50',

        ],
        datasets: [
          {
            label: "PPG",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            // pointBorderColor: "rgba(75,192,192,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [475,471,473,470,473,471,469,466,466,468,461,466,465,449,451,455,473],
            spanGaps: false
          }
        ]
      },
      options: {
        scales: {
          width: 100,
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "PPG"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time"
              }
            }
          ]
        }
      }
    });
  }
}
