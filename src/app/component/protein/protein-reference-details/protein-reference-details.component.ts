import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-protein-reference-details',
  templateUrl: './protein-reference-details.component.html',
  styleUrls: ['./protein-reference-details.component.css']
})
export class ProteinReferenceDetailsComponent implements OnInit {


 // reference_id: number;
  reference: any;
  protein:any;
 // r_ec : number;
  //reference data

  r_protein: any;
  r_fasta: any;
  r_gene: string;
  r_organism:any;
  r_sequence:any;
  r_geneNames:any;
  r_functions =[];
  

  constructor( private route: ActivatedRoute , private api : ApiService) { }

  ngOnInit() {
//    console.log(this.route.snapshot.params.id)
//    console.log(this.route)
  //  this.reference_id = this.route.snapshot.params.id;
    this.getProteinReference(this.route.snapshot.params.id);

  }

  getProteinReference(id) {
     this.api.getItem('proteinreference' , id ).subscribe( data =>{
    this.reference = data.data; 
    this.getProtein(data.data.protein_id);
    this.getProteinReferenceData(data.data);

  }); 
  }
  getProtein(id) {
    this.api.getItem('protein' , id).subscribe(data=> {
      this.protein =  data.data;    
      });
      this.api.getItem('proteintype' , id).subscribe(data=> {
        this.protein['type'] = data.data.type;     
        });
    //  console.log(this.protein);
  }

  getProteinReferenceData(reference) {
    if (this.reference['database'] == 'uniprot') {
      console.log('uniprot accession: '+this.reference['accession']);

      this.api.getFASTA(this.reference['accession']).subscribe(data=> {
        this.r_fasta =  data; 
        console.log(data);   
        });
    } 

    this.getUniprotData(this.reference['accession']);

    this.api.getGeneNames(this.reference['accession']).subscribe( data =>{
      console.log('GeneNames API');
      console.log(data);
      this.r_geneNames = data;
    });
  }


  


  getUniprotData(id){
    
        this.api.getUniprot(id).subscribe(data=> {
        console.log(data);
        
        this.r_organism =  data.organism;
        this.r_protein =  data.protein;
        this.r_sequence = data.sequence;
        this.r_gene = data.gene;
        
        console.log(data.protein);

        console.log(data.organism)
       // this.reference['sequence'] = data.sequence.sequence;
       // this.reference['gene'] = data.gene[0].name.value;

/*         for(var i = 0; i < data.organism.names.length; i++) {
          this.organismNames[i] = data.organism.names[i];
        } */


   //   this.xml = data;
    //    console.log(data);
 //     console.log('data.organism.lineage:');
 //     console.log(data.organism.lineage);
   
 //     this.reference['sequence'] = data.sequence.sequence;
 //     this.reference['gene'] = data.gene[0].name.value;

/*       for(var i = 0; i < data.organism.names.length; i++) {
        this.reference['organism']['names']= data.organism.names[i];
      //  console.log(this.data);
      } */

     
      //this.protein['name'] = data.protein.recommendedName.fullName.value;
      // this.protein['accession'] = data.accession;
      //this.protein['name'] = data.name;
     // this.protein['gene'] = data.gene[0].name.value;
    
    
     //console.log(this.sequence);
     //  console.log(this.xml);
    
  /*     for(var i = 0; i < data.organism.names.length; i++) {
        this.data = data.organism.names[i];
        console.log(this.data);
      }
     */
/*       for(var i = 0; i < data.comments.length; i++) {
    
        if ( data.comments[i].type = "FUNCTION") {
    
          this.reference['functions'].push(data.comments[i].text[0].value);
          //this.functions[i] = data.comments[i].text[0].value;
        }
       // console.log(this.functions);
      } */
         
         //console.log(this.functions);
    
    
      });
      }





  

}
