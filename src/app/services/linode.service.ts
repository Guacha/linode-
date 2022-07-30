import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class LinodeService {

  private API_KEY = process.env['LINODE_API_KEY'];
  private API_URL = process.env['LINODE_API_URL'];
  
  constructor() { }

  
}
