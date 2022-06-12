import { Component, OnInit } from '@angular/core';
import { Storage } from "@aws-amplify/storage";

@Component({
  selector: 'app-prediction-engine',
  templateUrl: './prediction-engine.component.html',
  styleUrls: ['./prediction-engine.component.scss']
})
export class PredictionEngineComponent implements OnInit {

  folderNames = [];
  constructor() { }

  ngOnInit(): void {

    // Storage.list('')
    // .then(data => {
    //    console.log(data);
    //   // var folderNames = []; 
    //   var datalist = data;

    //   for(var i=2;i<datalist.length;i++){
    //      console.log(datalist[i].key);
    //      var x = datalist[i].key.slice(12);
    //      var y = x.split("/");
    //      var z = y[0];
    //      this.folderNames.push(z);
    //      console.log(this.folderNames)
         
    //   }





    // })
    // .catch(err => console.log(err));
  }

}
