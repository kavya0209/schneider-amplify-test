import { Component, OnInit , ViewChild} from '@angular/core';
import { Storage } from "@aws-amplify/storage";
import { Auth } from 'aws-amplify';
// import { AmplifyS3Image } from "@aws-amplify/angular";

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent implements OnInit {

  dataUploadFile = '';
  dataUploadFileType = '';
  dataSource : number;
  dataSetType1 = '';
  dataSetType2 = '';
  dataSetName = '';
  showDataSetType1 : boolean = true ;
  showDataSetType2 : boolean = false ;
  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit(): void {
  
  }

  onDataSourceChange(){
   
    if(this.dataSource == 1){
      this.showDataSetType1 = true;
      this.showDataSetType2 = false;
    }
    else{
      this.showDataSetType1 = false;
      this.showDataSetType2 = true;
    }

  }

  fileChangeEvent(fileInput: any) {
    this.dataUploadFile =  fileInput.target.files[0].name;
    this.dataUploadFileType = fileInput.target.files[0].type;
  }


  save(model : any){
    // console.log(model);
    // console.log(this.dataSetType1);

    // console.log(this.dataUploadFile);
    // console.log(this.dataUploadFileType);

    //   Storage.put('SE-Datasets' +'/' + model.dataSetName + '/' + this.dataUploadFile, {
    //   level: 'public',
    //   contentType: this.dataUploadFileType
    // }).then(data => {
    //     alert("Data Uploaded Successfully");
    //   }).catch((error: any) => {
    
    //       console.log(error);
          
          
    //     })
  }


 



}
