import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  public client :Client;

  constructor() {
    this.client = new Client({
      host: 'localhost:9200',
      log: 'trace'
    });



   this.client.ping({
    requestTimeout: Infinity,
    body: 'hello JavaSampleApproach!'
  });

  }
}
