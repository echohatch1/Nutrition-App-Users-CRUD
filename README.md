# Landon's RESTful CRUD Server #


## API URL ##
https://shrouded-hollows-45616.herokuapp.com


## End Points ##

/products

/products/id/

/products/name/


## Methods ##
GET | POST | PUT | DELETE


## Examples Calls ##

#### Get all data (GET) ####
https://shrouded-hollows-45616.herokuapp.com/products


#### Create an entry (POST) ####
https://shrouded-hollows-45616.herokuapp.com/products

Model:
{
	"name": "Headphones",
	"price": 20,
	"desc": "We got beats"
}


#### Get a single data object using its ID (GET) ####
https://shrouded-hollows-45616.herokuapp.com/products/id/5c6e063435b6501718e0dbc0

#### Get a single data object using its NAME (GET) ####
https://shrouded-hollows-45616.herokuapp.com/products/name/Alexa

#### Update a single data oject using its ID (PUT) ####
https://shrouded-hollows-45616.herokuapp.com/products/id/5c6e063435b6501718e0dbc0

Model:
{
	"name": "Kit Kat Bar",
    "price": 1,
	"desc": "Break me off a peice!"
}


#### Delete a single data object using its ID (DELETE) ####
https://shrouded-hollows-45616.herokuapp.com/products/id/5c6f25229fc1df41845fb447



