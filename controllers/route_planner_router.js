var express = require('express');
var routePlannerRouter = express.Router();
var RoutePlannerQuery = require('../db/route_planner_query.js');
var routePlannerQuery = new RoutePlannerQuery();
// var route = {route: "here's a new route"}


//INDEX
routePlannerRouter.get('/', function(req, res){
  routePlannerQuery.all(function(docs){
    res.json(docs);
  })
 

})

//SHOW
routePlannerRouter.get('/:id', function(req, res){
  routePlannerQuery.find( req.params.id, function(doc){
    res.json(doc);
    



  })
})



//CREATE
routePlannerRouter.post('/', function(req, res){
  var newRoute = req.body
  routePlannerQuery.add(newRoute, function(docs){
    res.json(docs);


  })
})


//DELETE



//UPDATE


module.exports = routePlannerRouter;