import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatrixDialogComponent } from 'src/app/matrix-dialog/matrix-dialog.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'nav-unclassified',
  templateUrl: './nav-unclassified.component.html',
  styleUrls: ['./nav-unclassified.component.scss']
})
export class NavUnclassifiedComponent implements OnInit {
  selectType = 'over';

  constructor(public dialog: MatDialog,
    private userService:UserService) { }

  ngOnInit(): void {
    this.classifiedType('over')
  }

  classifiedType(type: any) {
    this.selectType = type
    let listType = []
    switch (type) {
      case 'A': {
        listType.push('A')
        break
      }
      case 'B': {
        listType.push('B')
        break
      }
      case 'D': {
        listType.push('D','E')
        break
      }
      case 'G': {
        listType.push('G')
        break
      }
      case 'J': {
        listType.push('J','K')
        break
      }
      case 'L': {
        listType.push('L')
        break
      }
      case 'N': {
        listType.push('N','P','R')
        break
      }
      case 'T': {
        listType.push('T','U')
        break
      }
      case 'over': {
        listType.push('over')
        break
      }
      case 'Un': {
        listType.push('Un')
        break
      }
    }
    this.userService.onchangeSpecification.next(listType)
  }
}
