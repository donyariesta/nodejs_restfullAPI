# NodeJS - Simple restfull API
this is a mini microservice using nodeJS based.
## technology stack:
- NodeJS
- Express JS
- mongodb
- redis

## endpoints
### [GET] http://[HOST]/generateToken
To generate token for accessing the APIs
#### return
{
    "success": true,
    "token": String Token
}

### [GET] http://[HOST]/api/users
to get list of users
#### header
- Authorization: Bearer [String token]
#### return
[
    {
        "_id": String ID,
        "userName": String Username,
        "accountNumber": String Account Number,
        "emailAddress": String Email Address,
        "identityNumber": String Identity Number,
        "createdAt": Timestamps Created at,
        "updatedAt": Timestamps Updated at
    }
]

### [POST] http://[HOST]/api/users
to create user data
#### body
- userName: String username
- accountNumber: String Account Number
- emailAddress: String Email Address
- identityNumber: String Identity Number

### [GET] http://[HOST]/api/users/:id
to get single user by id
#### params
- id: String User id
#### return
{
    "_id": String ID,
    "userName": String Username,
    "accountNumber": String Account Number,
    "emailAddress": String Email Address,
    "identityNumber": String Identity Number,
    "createdAt": Timestamps Created at,
    "updatedAt": Timestamps Updated at
}

### [PUT] http://[HOST]/api/users/:id
to update user data
#### params
- id: String User id
#### body
- userName: String username
- accountNumber: String Account Number
- emailAddress: String Email Address
- identityNumber: String Identity Number
#### return
{
    "_id": String ID,
    "userName": String Username,
    "accountNumber": String Account Number,
    "emailAddress": String Email Address,
    "identityNumber": String Identity Number,
    "createdAt": Timestamps Created at,
    "updatedAt": Timestamps Updated at
}
### [DELETE] http://[HOST]/api/users/:id
to delete user data
#### params
- id: String User id
### [GET] http://[HOST]/api/users/accountNumber/:id
to get single user by account number
#### params
- id: String Account Number
#### return
{
    "_id": String ID,
    "userName": String Username,
    "accountNumber": String Account Number,
    "emailAddress": String Email Address,
    "identityNumber": String Identity Number,
    "createdAt": Timestamps Created at,
    "updatedAt": Timestamps Updated at
}
### [GET] http://[HOST]/api/users/identityNumber/:id
to get single user by identity number
#### params
- id: String Identity Number
#### return
{
    "_id": String ID,
    "userName": String Username,
    "accountNumber": String Account Number,
    "emailAddress": String Email Address,
    "identityNumber": String Identity Number,
    "createdAt": Timestamps Created at,
    "updatedAt": Timestamps Updated at
}
