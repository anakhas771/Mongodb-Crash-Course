use('ecommerce');

db.products.find()
db.products.find().pretty()
db.products.find({ category: "Electronics" })


// Using Comparison Operators
db.products.find({ price: { $gt: 1000 } }) 
db.products.find({ price: { $gte: 1000, $lte: 50000 } })

// Logical Operators
db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Projection (Select Specific Fields)
db.products.find({}, { name: 1, price: 1, _id: 0 })

// Sorting and Limiting
db.products.find().sort({ price: -1 }).limit(2)
