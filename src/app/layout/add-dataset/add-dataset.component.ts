import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent implements OnInit {

  Invoice_Document = '';
  constructor() { }

  ngOnInit(): void {
  }

  importData(){
    console.log(this.Invoice_Document)
  }

  fileChangeEvent(fileInput: any) {

    console.log(fileInput.target.files[0].name);
    // this.fileValidResultInvoice = this.globals.validateFile(fileInput.target.files[0].name);
    // this.filesToUpload1 = <Array<File>> fileInput.target.files;
    
  //   await Storage.put(key, userImage, {
  //     contentType: userImage.type,
  // });








  }

}
