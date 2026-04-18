// All the tables that will be used in Dataform repo to avoid hardcoding and
// get the depencency graphy
const tables=[
    {name:"customers", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"employees", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"invoices", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"orders", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"order_details", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"products", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"shippers", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"suppliers", database:"bigquery-test-march", schema:"northwind_syd"},
    {name:"purchase_orders", database:"bigquery-test-march", schema:"northwind_syd"}
];

//Function to generate the table declarations
function generateTableDeclarations(){
    tables.forEach(table=>{
        declare({
            type:"declaration",
            schema:table.schema,
            name:table.name,
            database:table.database
        });
    });
}

// Call the function to generate the declarations
generateTableDeclarations();