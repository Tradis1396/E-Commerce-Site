import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  newList = [
    {
         "productName" : "T-Shirt",
         "basePrice" : 500,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Size",
                   "values" : ["xl","xxl"]
              },
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 70
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 80
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 90
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 100
              }
         ]
    },
    {
         "productName" : "Saree",
         "basePrice" : 5000,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              }
         ]
    }
]
  
}
