import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../services/steps.service';
import { iStep } from '../interfaces/i-step.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  steps: iStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
