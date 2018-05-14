import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export  class BackendService {
 country;
 city;
flight;
blog;
multi;
multiArgs;
 currency : string ;
 language:string;
 en=true;
 gr=false;
 it=false;
 ru=false;
 ch=false;
 jp=false;
 sp=false;
 tr=false;
 fr=false;
multiResults;

 getCurrency ():string{
  return this.currency;
 }
 setCurrency(curr){
   this.currency= curr;
 }
  constructor(private http: Http) {
  }

  getLocation(): Promise<any> {
    const url = `api/util/location `;
    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });
  }

  getflights( parameters :string) :Promise<any>{
    const url = `api/flights?`+parameters;

    const hh = new Headers();
    hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
    const options = new RequestOptions({
      headers: hh
    });
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response ;
    });

  }
  addRedirection( link , country,city): Promise<any> {

  const url = `api/status/redirection`;
  const hh = new Headers();
  hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
  const options = new RequestOptions({
    headers: hh
  });

  const sdata = {
    'country': country,
    'city': city,
    'url': link,
  }

  return this.http.post(url, sdata,options).toPromise().then(response => {
    return response.json();
  });
}
addNewsletter(  email, country,city,language): Promise<any> {

const url = `api/status/newsletter`;
const hh = new Headers();
hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
const options = new RequestOptions({
  headers: hh
});

const sdata = {
  'country': country,
  'city': city,
  'email': email,
  'language': language,
}

return this.http.post(url, sdata,options).toPromise().then(response => {
  return response.json();
});
}
getArticles() :Promise<any>{
  const url = `api/models/blog`;

  const hh = new Headers();
  hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
  const options = new RequestOptions({
    headers: hh
  });
  return this.http.get(url, options
  ).toPromise().then(response => {
    return response ;
  });

}
getNews() :Promise<any>{
  const url = `api/models/news`;

  const hh = new Headers();
  hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
  const options = new RequestOptions({
    headers: hh
  });
  return this.http.get(url, options
  ).toPromise().then(response => {
    return response ;
  });

}

getArticle(id) :Promise<any>{
  const url = `api/models/blog/`+id;

  const hh = new Headers();
  hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
  const options = new RequestOptions({
    headers: hh
  });
  return this.http.get(url, options
  ).toPromise().then(response => {
    return response ;
  });

}


addmulti(routes): Promise<any> {

const url = `api/flights_multi`;
const hh = new Headers();
hh.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudEB0cmF2b2xpYy5jb20iLCJuYW1lIjoiVHJhdm9pYyBDbGllbnQgV2ViIEFwcGxpY2F0aW9uIiwiX2lkIjoiNWFhMGZmOTI4MTAwNzg0YjQzYmI4YjNhIiwiaWF0IjoxNTIwNTAwNjU1fQ.Vkqv2KJJDhVRTlts2N_HZViUNQugTn5Hju7hKZB9Dn0');
const options = new RequestOptions({
  headers: hh
});

const sdata = {
'routes':routes
}

return this.http.post(url, sdata,options).toPromise().then(response => {
  this.multiResults=response.json;
  return response.json();

});
}
}
