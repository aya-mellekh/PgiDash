import { Component } from '@angular/core';
import { faChartBar, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {

  faChartBar = faChartBar
  faLocation = faLocation

}
