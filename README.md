# Contacts-Api
Api com autenticação e CRUD de contatos.

## Collection do postman
https://www.getpostman.com/collections/7baaf7dc3e237f7a8a4a

## Autenticação 
### POST - Signup:
#### Path: /signup/
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
#### Path: /login/
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
#### Path: /logout/
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
```


## Contatos
### POST - Criar contatos:
#### Path: /contacts/
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
Content-Type: "application/json"
```
#### Body: 
```
{
	"name": "Exemplo Contato Alves",
	"photo": "",
	"email": "exemplo.contato@gmail.com",
	"phone": "(85) 98828-1150"
}
```

### GET - Listar contatos:
#### Path: /contacts/
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
```
### GET - Detalhar contato:
#### Path: /contacts/5eda9bda0d63b73eaf6d2873
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
```

### PUT - Editar contato:
#### Path: /contacts/5eda9bda0d63b73eaf6d2873
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
Content-Type: "application/json"
```
#### Body: 
```
{
	"name": "Exemplo Contato Alves",
	"photo": "",
	"email": "exemplo.contato@gmail.com",
	"phone": "(85) 98828-1150"
}
```
### DELETE - Apagar contatos:
#### Path: /contacts/5eda9bda0d63b73eaf6d2873
#### Headers: 
```
token: "heDDNdoqmkqwOIJDHWdjnKDQKLWDQWdklmdqxwqkonx"
```
