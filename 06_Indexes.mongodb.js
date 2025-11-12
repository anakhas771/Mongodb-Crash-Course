use ('ecommerce');

// Create Index
db.products.createIndex({ name: 1 }) // Ascending index on 'name' field

// View Indexes
db.products.getIndexes() // List all indexes on 'products' collection
