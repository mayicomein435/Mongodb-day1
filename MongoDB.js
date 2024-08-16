1.db.products.find({})
2.db.products.find({
    price: {
      $gte: 400,
      $lte: 800
    }
  })
  3.db.products.find({
    $or: [
      { price: { $lt: 400 } },
      { price: { $gt: 600 } }
    ]
  })
4.db.products.find({
    price: { $gt: 500 }
  }).limit(4)
5.db.products.find({}, { productName: 1, productMaterial: 1, _id: 0 })
6.db.products.findOne({ _id: 10 })
7.db.collection.find(
    {},
    {
      productName: 1,
      productMaterial: 1,
      _id: 0 
    }
  )
  8.db.collection.find(
    {
      productMaterial: /soft/i
    }
  )
9.  db.collection.find(
    {
      productColor: "indigo",
      productPrice: 492.00
    }
  )
10.  db.collection.deleteMany(
    {
      productPrice: 28
    }
  )
  
      