
import {  Validators } from '@angular/forms';


/* $table->increments('id');
//$table->tinyInteger('category_id')->unsigned()->index();
//$table->string('title', 255);
//$table->string('slug', 255)->unique();
//$table->string('description', 255)->nullable();
$table->text('summary');
$table->text('content');
//$table->enum('status', array('draft', 'publish'))->index();
$table->boolean('comments')->index();
$table->boolean('featured')->index();
$table->timestamps(); */

export const blogPostFields = [
  {
    type: 'input',
    label: 'title',
    name: 'title',
    value: '',
    placeholder: 'title',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'slug',
    name: 'slug',
    value: '',
    placeholder: 'slug',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'category_id',
    name: 'category_id',
    value: '',
    placeholder: 'category_id',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'status',
    name: 'status',
    value: '',
    placeholder: 'status',
    validation: [Validators.required]
  },
  {
    type: 'textarea',
    label: 'description',
    name: 'description',
    value: '',
    placeholder: 'description',
    validation: [Validators.required]
  }
/*   {
    type: 'input',
    label: '**',
    name: '**',
    value: '',
    placeholder: '**',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: '**',
    name: '**',
    value: '',
    placeholder: '**',
    validation: [Validators.required]
  }, */
]
export const tagFields = [
  {
    type: 'input',
    label: 'Name',
    name: 'name',
    value: '',
    placeholder: 'Enter category  name',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'Slug',
    name: 'slug',
    value: '',
    placeholder: 'Enter tag slug',
    validation: [Validators.required]
  }
];

export const blogCategoryFields = [
  {
    type: 'input',
    label: 'Name',
    name: 'name',
    value: '',
    placeholder: 'Enter category  name',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'Slug',
    name: 'slug',
    value: '',
    placeholder: 'Enter slug',
    validation: [Validators.required]
  },
  {
    type: 'textarea',
    label: 'description',
    name: 'description',
    value: '',
    placeholder: 'Enter description',
    validation: [Validators.required]
  },
];
  export const categoryFields = [
    {
      type: 'input',
      label: 'Category name',
      name: 'name',
      value: '',
      placeholder: 'Enter category  name',
      validation: [Validators.required]
    }
  ];

  export const proteinTypeFields = [
    {
      type: 'input',
      label: 'Type of Protein',
      name: 'type',
      value: '',
      placeholder: 'Enter type of protein',
      validation: [Validators.required]
    }
  ];

  export const proteinReferenceFields = [
    {
      type: 'input',
      label: 'Database',
      name: 'database',
      value: '',
      placeholder: '',
      validation: [Validators.required]
    } ,
    {
      type: 'input',
      label: 'Accession',
      name: 'accession',
      value: '',
      placeholder: '',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Protein ID',
      name: 'proteinid',
      value: '',
      placeholder: 'Enter protein ID',
      validation: [Validators.required]
    }
  ];




  export const organismFields = [
  {
    type: 'input',
    label: 'organism name',
    name: 'name',
    value: '',
    placeholder: 'Enter organism name name',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'species',
    name: 'species',
    value: '',
    placeholder: 'Enter organism species name',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'genus',
    name: 'genus',
    value: '',
    placeholder: 'Enter organism genus name',
    validation: [Validators.required]
  },
  {
    type: 'textarea',
    label: 'description',
    name: 'description',
    value: '',
    placeholder: 'Enter description',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'taxid',
    name: 'taxid',
    value: '',
    placeholder: 'taxon ID',
    validation: [Validators.required]
  }
]
  export const proteinFields = [
    
  {
    type: 'input',
    label: 'Protein name',
    name: 'name',
    value: '',
    placeholder: 'Enter protein name name',
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'Protein Image',
    name: 'image',
    value: '',
    placeholder: 'upload image',
    validation: [Validators.required]
  },
  {
    type: 'textarea',
    label: 'Description',
    name: 'description',
    value: '',
    placeholder: 'Enter protein description'
  },
  {
    type: 'select',
    label: 'Type of Protein',
    name: 'typeid',
    value: '',
    options: [ '1' , '2' , '3' , '4' ,  '5' , '6' , '7' ],
   // optionsValues: [   {enzyme: '1'  }  ],

    placeholder: 'Select protein type',
    validation: [Validators.required]
  }
];


export const updateFields = [
  {
    type: 'hidden',
    name: 'id',
    value: '',
    validation: [Validators.required]
  },
  {
    label: 'Submit',
    name: 'submit',
    type: 'button'
  }
];
export const submitButton = [
  {
    label: 'Submit',
    name: 'submit',
    type: 'button'
  }
];