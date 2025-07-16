import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // Get API URL from environment
  constructor(private http: HttpClient) { }

  readonly ROOT_URL: string = environment.apiUrl;




  get(
    url: string,
    isFormData: boolean = false,
    isDownload: any = false,
    skipAuth: boolean = false,
    // encrypt: any = environment.EncryptionOn_Off,
    // resEcrypt: any = environment.EncryptionOn_Off
  ) {
    let req = this.http.get<any>(
      this.ROOT_URL + url,
      this.setHeader(isDownload, skipAuth, isFormData)
    );
    return req;
  }

  post(
    url: string,
    object: any,
    isFormData: boolean = false,
    skipAuth: boolean = false,
    isDownload: boolean = false,
    // encryptReq: boolean = environment.EncryptionOn_Off,
    // encryptRes: boolean = environment.EncryptionOn_Off


  ) {
    let req = this.http.post<HttpResponse<any>>(this.ROOT_URL + url, object, this.setHeader(isDownload, skipAuth, isFormData));
    if (isDownload) {
      return req;
    }
    return req
  }




  setHeader(isDownload: any = false, skipAuth: boolean = false, isJson: boolean = false) {
    let token = !skipAuth ? localStorage.getItem('token') : null;
    if (!token) {
      token = '';
    }
    let responseType: any = 'json';
    let observeType: any = 'body';
    if (isDownload) {
      responseType = 'blob'
      observeType = 'response';
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Access-Control-Max-Age', '86000')

    if (isJson) {
      headers.set('Content-Type', 'application/json');
    }

    return {
      headers: headers,
      responseType: responseType,
      observe: observeType,
    };
  }


   
}

