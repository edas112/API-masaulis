# Getters

### `GET` `/paslaugos`

route returns Array of **paslaugos** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "description": String,
        "img": String,
    },
]
```

```

<br>
<br>

# Setters

### `POST` `/paslaugos`

route create new Array of **paslaugos** <br>

**Response:**<br>

```

[
{
"_id": ObjectID, // mongoDB ObjectID
"title": String,
"description": String,
"img": String,
},
]

```



<br>
<br>
```

# Getters

### `GET` `/footer`

route returns Array of **products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "number": String,
        "email": String,
        "adres": String,
    },
]
```

<br>
<br>

# Setters

### `POST` `/footer`

route create new Array of **products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "number": String,
        "email": String,
        "adres": String,
    },
]
```

<br>
<br>

### `PATCH` `/footer`

route updated Array of **single products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "number": String,
        "email": String,
        "adres": String,
    },
]
```

<br>
<br>
