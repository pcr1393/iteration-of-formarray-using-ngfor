import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from '../../Models/contact.model';
import { ContactListService } from '../../Services/contact-list.service';
import { Observable, Subscription } from 'rxjs';
import * as cloneDeep from 'lodash';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contacts: contact[];
  contacts$: Observable<contact[]>;
  contactSubscription: Subscription;
  queryString: string;
  contactIndexToBeDeleted: number;
  page: number = 1;
  employeeForm: FormGroup;
  noOfRows = 10;
  noOfPages: number;
  constructor(private router: Router, private contactListService: ContactListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      'employees': new FormArray([])
    });
    this.contactListService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts;
      for (let i = 0; i < this.contacts.length; i++) {
        this.employeesFormArray.push(this.fb.group({
          'dept': this.contacts[i] && this.contacts[i].dept ? this.contacts[i].dept : '',
          'completed': this.contacts[i] && this.contacts[i].completed ? this.contacts[i].completed : ''
        }));
      }
    });
  }

  get employeesFormArray(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  deleteContact(){
    this.contacts.splice(this.contactIndexToBeDeleted, 1);
  }

  storeContactIndex(index){
    this.contactIndexToBeDeleted = index;
  }

  createRange(lastPage: number): any {
    let paginationArray: any = [];
    for (let i = 0; i < lastPage; i++) {
      const page = {
        label: `${ i + 1}`,
        value: i + 1
      };
      paginationArray.push(page);
    }
    return paginationArray;
  }

  getStartIndex(currentPage: number, lastPage: number): string {
    let firstIndex = 1;
    if((currentPage !== lastPage) || (currentPage > 0 && lastPage > 0)) {
      firstIndex = (Number(this.noOfRows) * (Number(currentPage) -1) + 1);
    }
    return firstIndex.toString();
  }

  getLastIndex(currentPage: number, lastPage: number): string {
    let lastIndex = this.contacts ? this.contacts.length : null;
    if((currentPage !== lastPage)) {
      lastIndex = (Number(this.noOfRows) * (Number(currentPage)));
    }
    return lastIndex.toString();
  }


  removeDeletionIndex(){
    this.contactIndexToBeDeleted = undefined;
  }


  addContact(){
    this.contactListService.actionChosen('Add');
    this.router.navigate(['addOrEdit']);
  }

  editContact(contact, index){
    this.contactListService.setContactDetails(contact);
    this.contactListService.setContactIndexForEditing(index);
    this.contactListService.actionChosen('Edit');
    this.router.navigate(['addOrEdit']);
  }



}
