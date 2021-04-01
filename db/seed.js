const db = require('./connection.js')

db.run("INSERT INTO Flavours (Name) VALUES ('Strawberry'),('Räckor'), ('Oxfilé'),  ('Vegansk banana'), ('Kaviar'), ('Orange juice'), ('Chocolate'), ('Moldy cheeeeese')", function(err){
    err && console.log(err)

} )

