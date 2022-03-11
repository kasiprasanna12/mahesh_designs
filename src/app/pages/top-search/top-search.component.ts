import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KataShiki } from 'src/app/classes/katashiki';
import { UserService } from 'src/app/user.service';
import { Car } from 'src/app/vsi-list/vsi';
interface City {
  name: string
}
@Component({
  selector: 'top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.scss']
})
export class TopSearchComponent implements OnInit {
  @Input() versionID: any;
  cities: City[];
  selectedCity1: City | undefined;
  katashikiList: KataShiki[] = [];
  vsiData: Car[] = []
  carFamilyCode: any = [];
  vsiVersion: any = [];
  fuel: any = [];
  semicom: any = [];
  dvTrain: any = [];
  engine: any = [];
  wheelBase: any = [];
  steeringWheel: any = [];
  deck: any = [];
  body: any = [];
  transmission: any = [];
  grade: any = [];
  destination: any = [];
  index: any;
  CFCIndex: any;
  versionIndex: any;
  fuelIndex: any;
  CFCValue: any;
  versionValue: any;
  fuelValue: any;
  semiValue: any;
  dvValue: any;
  engineValue: any;
  baseValue: any;
  wheelValue: any;
  deckValue: any;
  bodyValue: any;
  tmValue: any;
  gradeValue: any;
  destinationValue: any;
  arrayData: any = {};

  constructor(public service: UserService,
    private datepipe: DatePipe,
    private route: ActivatedRoute) {
    this.cities = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
  }

  ngOnInit(): void {
    // alert('top'+ this.versionID)
    console.log(this.service.selectedVsi)
    this.CFCValue = this.service.selectedVsi.cfc
    this.versionValue = this.service.selectedVsi.selectedValue
    this.fuelValue = this.service.selectedVsi.fuelType
    this.fuel.push(this.service.selectedVsi.fuelType)
    this.getFilteredVersions('html')
    this.changeVersions()


    // console.log(this.vsiVersion)

    // this.route.paramMap.subscribe(
    //   (d:any)=>{
    //     this.index = d.get('index');
    //   }
    // )

    // this.service.getLocalData().subscribe(
    //   (d:any)=>{
    //     let date1 = new Date(d.release_date.split('T')[0]);
    //     let v= this.datepipe.transform(date1, 'yyyy/MM/dd');
    //     this.versionIndex = `${d.vsi_version} | ${v}`;
    //     this.fuelIndex = d.fuel_type;
    //     console.log(this.versionIndex)
    //   }
    // )
    //Katashiki API


    //VSI LIst API
    // this.service.getVSI().subscribe(
    //   (res: any) => {
    //     this.vsiData = res.data;
    //     this.vsiData.forEach(
    //       (e:any,i:any)=>{
    //         let date = new Date(e.release_date.split('T')[0]);
    //         e.release_date = this.datepipe.transform(date, 'yyyy/MM/dd');
    //         this.versionIndex = e.date;
    //         this.fuelIndex = e.fuel_type;
    //         e.date = `${e.vsi_version} | ${e.release_date}`;
    //         if(this.index == i){
    //           this.CFCIndex = e.cfc;
    //         }
    //       }
    //     )

    //     //Car Family Code
    //     this.vsiData.forEach(
    //       (e: any) => {
    //         this.carFamilyCode.push(e['cfc']);
    //       }
    //     )
    //     this.carFamilyCode = this.carFamilyCode.filter((elem: any, index: any, self: any) => {
    //       return index === self.indexOf(elem)
    //     })

    //     //vsiVersion
    //     this.vsiData.forEach(
    //       (e: any) => {
    //         this.vsiVersion.push(e['date']);
    //       }
    //     )
    //     this.vsiVersion = this.vsiVersion.filter((elem: any, index: any, self: any) => {
    //       return index === self.indexOf(elem)
    //     })

    //     //Fuel
    //     this.vsiData.forEach(
    //       (e: any) => {
    //         this.fuel.push(e['fuel_type']);
    //       }
    //     )
    //     this.fuel = this.fuel.filter((elem: any, index: any, self: any) => {
    //       return index === self.indexOf(elem)
    //     })

    //   }
    // )
  }

  select() {
    if (this.semiValue != undefined) {
      this.arrayData['semi-complete'] = this.semiValue
    }
    if (this.dvValue != undefined) {
      this.arrayData['drive_train'] = this.dvValue;
    }
    if (this.engineValue != undefined) {
      this.arrayData['engine'] = this.engineValue;
    }
    if (this.baseValue != undefined) {
      this.arrayData['wheel_base'] = this.baseValue;
    }
    if (this.wheelValue != undefined) {
      this.arrayData['steering_wheel'] = this.wheelValue;
    }
    if (this.deckValue != undefined) {
      this.arrayData['deck'] = this.deckValue;
    }
    if (this.tmValue != undefined) {
      this.arrayData['transmission'] = this.tmValue;
    }
    if (this.bodyValue != undefined) {
      this.arrayData['body'] = this.bodyValue;
    }
    if (this.gradeValue != undefined) {
      this.arrayData['grade'] = this.gradeValue;
    }
    if (this.destinationValue != undefined) {
      this.arrayData['destination'] = this.destinationValue;
    }
    console.log(this.arrayData)
    this.service.sendLocalData(this.arrayData)
  }

  getFilteredVersions(type: any) {
    this.vsiVersion = []
    this.service.vsiListData.forEach((element: any) => {
      this.carFamilyCode.push(element.cfc)
      if (this.CFCValue == element.cfc) {
        element.vesrsions.forEach((version: any) => {
          this.vsiVersion.push(version.vsi_version + ' ' + '|' + ' ' + version.release_date)
        });
        if (type == 'change') {
          this.fuel = []
          this.fuel.push(element.vesrsions[0].fuelType)
          this.versionValue = element.vesrsions[0].vsi_version + ' ' + '|' + ' ' + element.vesrsions[0].release_date
          this.service.onchangeOfCarfamily.next(element.vesrsions[0].vsi_version)
        }
      }
    });
  }
  changeVersions() {
    // alert(this.versionValue.split('|'))
    const version = this.versionValue.split('|')
    this.service.onchangeOfCarfamily.next(version[0].trim())
    this.versionID = version[0].trim()
    this.getfilterValues()
  }
  getfilterValues() {
    this.emptyVales()
    this.service.getvsiVersion(this.versionID).subscribe(
      (res: any) => {
        this.katashikiList = res.data;

        //semi-complete
        this.katashikiList.forEach(
          (e: any) => {
            this.semicom.push(e['semi-complete']);
          }
        )
        this.semicom = this.semicom.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //drive_train
        this.katashikiList.forEach(
          (e: any) => {
            this.dvTrain.push(e['drive_train']);
          }
        )
        this.dvTrain = this.dvTrain.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //engine
        this.katashikiList.forEach(
          (e: any) => {
            this.engine.push(e['engine']);
          }
        )
        this.engine = this.engine.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })//wheelBase
        this.katashikiList.forEach(
          (e: any) => {
            this.wheelBase.push(e['wheel_base']);
          }
        )
        this.wheelBase = this.wheelBase.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })
        // steeringWheel
        this.katashikiList.forEach(
          (e: any) => {
            this.steeringWheel.push(e['steering_wheel']);
          }
        )
        this.steeringWheel = this.steeringWheel.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //deck
        this.katashikiList.forEach(
          (e: any) => {
            this.deck.push(e['deck']);
          }
        )
        this.deck = this.deck.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //body
        this.katashikiList.forEach(
          (e: any) => {
            this.body.push(e['body']);
          }
        )
        this.body = this.body.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //transmission
        this.katashikiList.forEach(
          (e: any) => {
            this.transmission.push(e['transmission']);
          }
        )
        this.transmission = this.transmission.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //grade
        this.katashikiList.forEach(
          (e: any) => {
            this.grade.push(e['grade']);
          }
        )
        this.grade = this.grade.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })

        //description
        this.katashikiList.forEach(
          (e: any) => {
            this.destination.push(e['destination']);
          }
        )
        this.destination = this.destination.filter((elem: any, index: any, self: any) => {
          return index === self.indexOf(elem)
        })
      }
    )
  }

  emptyVales() {
    this.semicom = [];
    this.dvTrain = [];
    this.engine = [];
    this.wheelBase = [];
    this.steeringWheel = [];
    this.deck = [];
    this.body = [];
    this.transmission = [];
    this.grade = [];
    this.destination = [];

  }

}
