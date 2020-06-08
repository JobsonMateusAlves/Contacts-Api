# Contacts-Api
Api com autenticação e CRUD de contatos.

## Collection do postman
https://www.getpostman.com/collections/7baaf7dc3e237f7a8a4a

## Autenticação 
### POST - Signup:
#### Headers: 
```
Content-Type : "application/json"
```
#### Body: 
```
{
	"name": "Exemplo da silva",
	"photo": "https://3.bp.blogspot.com/-eeX1iXI0Jkc/UPgVPtWPacI/AAAAAAAAAH4/-Qbe-muKsyY/s1600/papel-de-parede-sasuke-3.jpg",
	"email": "exemplo@gmail.com",
	"password": "12341234"
}
```

### POST - Login:
#### Headers: 
```
Content-Type: "application/json"
```
#### Body: 
```
{
	"email": "exemplo@gmail.com",
	"password": "12341234"
}
```

### DELETE - Logout
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
```

