import { Injectable } from '@angular/core';

import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
//import  {x2js} from  'xml2js/lib/xmlToJson.js';
//import  { xml2json} from  'xml2js/lib/xml2js.js';
//import  {xml2json} from 'xml2js/lib/xml2json.js';

@Injectable()
export class ApiService {

  constructor(	private http : Http	)   { }

  getItem( model , id ) {
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return  this.http.get("http://127.0.0.1:8000/api/v1/"+model+"/getById/"+id , {headers : headers}).map(res => res.json());
  }
  getAll( model , amt , offset ) {
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
    if (model=='protein') {
      return  this.http.get("http://127.0.0.1:8000/api/v1/protein/"+amt+"/"+offset+"/en" , {headers : headers}).map(res => res.json());
    } else  return  this.http.get("http://127.0.0.1:8000/api/v1/"+model+"/"+amt+"/"+offset+"/en" , {headers : headers}).map(res => res.json());
  }
  updateItem( model , id , item ) {
     console.log(item);
     console.log("http://127.0.0.1:8000/api/v1/"+model+"/update/"+id);
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return  this.http.post("http://127.0.0.1:8000/api/v1/"+model+"/update/"+id , item , {headers : headers}).map(res => res.json());
  }


  addItem(model , item) {
    console.log("model = "+model);
    console.log(item);
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return  this.http.post("http://127.0.0.1:8000/api/v1/"+model+"/add" , item , {headers : headers}).map(res => res.json());
  }

  deteteItem(model , id) {
  return  this.http.get("http://127.0.0.1:8000/api/v1/"+model+"/delete/" + id ).map(res => res.json());
  }














///protein tools

getFASTA( id ) {
  const headers = new Headers();
 // headers.append('Content-type' , 'application/json');
  return  this.http.get("http://www.uniprot.org/uniprot/"+id+".fasta" , {headers : headers});
}


/*  getUniprot( id ) {
  const headers = new Headers();
  headers.append('accept' , 'application/xml');
  return  this.http.get("http://www.uniprot.org/uniprot/"+id+".xml" , {headers : headers});
}
*/

//get 
getUniprot( id ) {
  const headers = new Headers();
  headers.append('accept' , 'application/json');
  return  this.http.get("https://www.ebi.ac.uk/proteins/api/proteins/"+id , {headers : headers}).map(res => res.json());
}

//get protein references of a protein given its id
getReferences(id) {
const headers = new Headers();
headers.append('Content-type' , 'application/json');
 return  this.http.get("http://127.0.0.1:8000/api/v1/proteinreference/" , {headers : headers})
        .map(res => res.json().data.filter(data => data.protein_id == id));
}

  ///


  getKegg(EC) {
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return  this.http.get("http://rest.kegg.jp/get/ec:"+EC+"/" , {headers : headers})
    .map(res => res.json());
    }

  getGeneNames(id) {
    const headers = new Headers();
    headers.append('Accept' , 'application/json');
    return  this.http.get(" http://rest.genenames.org/fetch/uniprot_ids/"+id , {headers : headers}).map(res => res.json().response.docs[0]);
    }


   

  EBIgetProtein( ) {
    const headers = new Headers(); 
    headers.append('Content-type' , 'application/json' );
    console.log( 'https://www.ebi.ac.uk/proteins/api/proteins/P69905')
    return  this.http.get("https://www.ebi.ac.uk/proteins/api/proteins/P69905" , {headers : headers}).map(res => res.json() );
  }


  getNCBIsummary( db , id) {
    const headers = new Headers();
    headers.append('Accept' , 'application/json');
    return  this.http.get("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db="+db+"&id="+id+"&retmode=json" , {headers : headers}).map(res => res.json());
    }

     getGbifSpecies(id) {
       const headers = new Headers();
       headers.append('Accept' , 'application/json');
        return  this.http.get("http://api.gbif.org/v1/species/+id" , {headers : headers}).map(res => res.json());
       }

       getMygeneSpecies(id) {
     //http://mygene.info/new-api-for-species-data/
     //http://mygene.info/v2/species/38881
        const headers = new Headers();
        headers.append('Accept' , 'application/json');
         return  this.http.get("http://mygene.info/v2/species/"+id , {headers : headers}).map(res => res.json());
        }
      
        getEbiTax(id) {
         // http://www.ebi.ac.uk/ena/browse/taxonomy-service
        //  /9606
             const headers = new Headers();
             headers.append('Accept' , 'application/json');
              return  this.http.get("http://www.ebi.ac.uk/ena/data/taxonomy/v1/taxon/tax-id/"+id , {headers : headers}).map(res => res.json());
             }
      /*  2642020



     //https://www.itis.gov/ITISWebService/jsonservice/getFullRecordFromTSN?tsn=38881
     
    
     http://artsdatabanken.no/Pages/180034
    
    https://rest.ensembl.org/documentation/info/taxonomy_classification
     */



}
