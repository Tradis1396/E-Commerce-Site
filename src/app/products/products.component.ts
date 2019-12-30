import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';
import { FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  userData: FormGroup;
  @Input() productName;
  @Input() basePrice;
  @Input() image;
  @Input() description;
  @Input() type;

  newArr = [];
  newArr2 = [];
  a; b; c; sum;

  varientDetails = [
    {
      "size": "xl",
      "meterial": "cotton",
      "color": "red",
      "addOnprice": 30
    },
    {
      "size": "xl",
      "meterial": "cotton",
      "color": "yellow",
      "addOnprice": 40
    },
    {
      "size": "xl",
      "meterial": "silk",
      "color": "red",
      "addOnprice": 50
    },
    {
      "size": "xl",
      "meterial": "silk",
      "color": "yellow",
      "addOnprice": 60
    },
    {
      "size": "xxl",
      "meterial": "cotton",
      "color": "red",
      "addOnprice": 70
    },
    {
      "size": "xxl",
      "meterial": "cotton",
      "color": "yellow",
      "addOnprice": 80
    },
    {
      "size": "xxl",
      "meterial": "silk",
      "color": "red",
      "addOnprice": 90
    },
    {
      "size": "xxl",
      "meterial": "silk",
      "color": "yellow",
      "addOnprice": 100
    }
  ]

  constructor() {
  }
  ngOnInit() {
  }


  onSave(clickDatas, productname, type, sizes) {
    console.log(`button clicked ${productname} ${type} ${sizes}`);
    if (clickDatas) {
      if (type == "Size") {
        this.a = sizes;
        // this.newArr.push({
        //   "size": sizes,
        // })
      }
      else if (type == "Meterial") {
        this.b = sizes;

        // this.newArr.push({
        //   "meterial" : sizes
        // })
      }
      else {
        this.c = sizes;

        // this.newArr.push({
        //   "color" : sizes
        // })
      }
      console.log(this.a, this.b, this.c)

      if (this.a && this.b && this.c !== undefined) {
        this.newArr.push({
          "size": this.a,
          "meterial": this.b,
          "color": this.c
        });
        let varient = this.varientDetails.find((varients) => {
          varients.size && varients.color && varients.meterial
        }) === this.newArr.find((elem) => {
          elem.size && elem.meterial && elem.color
        })

        if(varient){
          this.varientDetails.find((varients) => {
            this.sum = 0
            return this.sum += varients.addOnprice
          })
          console.log(this.basePrice += this.sum);
          this.basePrice += this.sum
          this.sum = 0;
        }
        console.log("it matches" , varient)

      }
      console.log(this.newArr2);

      console.log(this.newArr);

      if (this.newArr) {
        // let varient = this.varientDetails.find((varients) => {
        //   varients.size && varients.color && varients.meterial
        // }) === this.newArr.find((elem) => {
        //   elem.size && elem.meterial && elem.color
        // })


     
      }

    }
  }

  // this.newArr2.concat(this.newArr);

}



