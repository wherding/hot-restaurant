let express = require ("express");
let path = require("path");
let app = express();

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [{
  
    name: "Captain America",
    phone: 111000333,
    email: "capamerica@gmail.com",
    id:1
},
{
  
    name: "Dr Strange",
    phone: 111000444,
    email: "drstrange@gmail.com",
    id:2
},
{
   
    name: "Iron Man",
    phone: 111000333,
    email: "ironman@gmail.com",
    id:3
}];

let waitlist = [{
    
    name: "Hulk",
    phone: 333999555,
    email: "smash@gmail.com",
    id:5
},
{
   
    name: "Black Widow",
    phone: 555777333,
    email: "kill@gmail.com",
    id:6
},
{
   
    name: "Will",
    phone: 6036647898,
    email: "will@gmail.com",
    id:7
}];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/home.html"));
});
app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "public/home.html"));
});


app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "public/reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "public/tables.html"));
});
/************below is api */
app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});
app.get("/api/tables", function(req, res){
    return res.json(reservations);
});
// app.get("/api/v1/characters/:characterId", function (req,res){
//     let characterId = req.params.characterId;

//     console.log(characterId);

//     for (let i = 0; i < characters.length; i++) {
//         if (characterId === characters[i].routName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

app.post("/api/v1/waitlist", function (req, res){
    let newReservation = req.body;

    console.log(newReservation);

 

    if (reservations.length < 5) {
        reservations.push(newReservation);
    }
    else {
        waitlist.push(newReservation);
    }

   return res.json(newReservation);    
});




app.listen(PORT, function(){
    console.log("listing on PORT " + PORT);
});