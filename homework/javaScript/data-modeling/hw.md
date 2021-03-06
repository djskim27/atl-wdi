[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> Answer here
  ```js
  var task = {
   name : 'Taking garbage out';
   date: '01/26/2014';
   startTime: '9:30pm';
   endTime: '9:32pm';
   statusOfCompletion: 'completed'
  }

  var projects = {
    name : 'Studying for SAT';
    subject: 'Checklist for for perfect SAT score';
    tasks: ['Private tutoring', 'Kaplan SAT Math', 'Memorize Vocab Flash Cards'];
  }
  ```
- In order to track tasks efficiently, a name and status of completion is important. Date and start/end times are necessary to figure out the exact time period it takes to complete the task. For projects, name and subject are important for grouping specific tasks under one label. An array is necessary to list every task in the project.
### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

> Answer here
  ```js
  var picture = {
    title: "Cat ate my pizza";
    dateTaken: "10/21/2017";
    dateOfUpload: "10/25/2017";
    location: "Suwanee, Georgia"
    imageURL: "";
    User:"LordOfPhotos";
  }
  var album = {
    title: "Vacation in my bed";
    dateOfUpload: "03/04/2017";
    photos: ["photo 1", "photo 2", "photo 3"]
    albumURL:"";
  
  }
  ```
For a photosharing app, it is important for the app to have as many details about the photo/album as much as possible. Pictures can be used as time stamps of specific memories; dates/locations of when/where the pictures were taken are important for other users to be able to see (if the uploader allows this info to be visible).
### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

> Answer here
  ```js
  var light= {
    location: "kitchen";
    name: "kitchenLight1";
    brightness: 50%;
  }

  var homeSystem = {
    lightSet: ["kitchen", "bathroom", "bedroom"];
    temperature: '80 degrees';
  }
  ```
  In order to manage a home automation system, the app must have access to light locations and its brightness. Thermostats are used to find the average temperature of the entire house so only one temperature value is needed.
### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> Answer here
```js
var product = {
  productName: "Polo Black Jacket";
  price: "$50.99";
  quantity: 1;
}

var orderInfo ={
  date: "10/27/1989";
  orderStatus: "completed";
  listOfProducts: ["Black iPhone 7", "Vitamix Multivitamin", "p90x Workout DVD"];
}
```
Product information (name, price, and quantity) and order information (date, order status, and total list of products): enough said!
## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> Answer here
Advantage: User has access to specific name of each station and its description.

Disadvantage: User has no information on location and distance between different stations.
### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> Answer here
First Option:
Advantage - All appointments and patient info is rooted under a specific doctor; this makes it easier to see all of a specific doctor's appointments with patients.
Disadvantage - This makes it hard for someone to pull all appointment data that pertains to a specific patients (must iterate through every specific doctor in order to do so).

Second Option:
Advantage - Opposite of first option! Makes it easier to see all appointment data pertaining to a specific patient.
Disadvantage - opposite of first option.

Which option is better? This will depend on whether or not this app focuses on keeping up with appointments of specific doctors vs appointments of specific patients.
## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > Answer here
  Player Info:
  -Player Name
  -X or O
  -Move Info

  Game Info:
  -X Player Move Info
  -Y Player Move Info
  -Result

b.  How might those entities be represented in JavaScript code?

  > Answer here
  ```js
  var playerInfo = {
    name: "Seto";
    type: "X";
    moves: ["1","5","9"];
  }

  var gameInfo = {
    xMoves: ["1","3","7"];
    oMoves: ["5","2","8"];
    Result: "O wins!";
  }
  ```

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > Answer here
A tic tac to game would need info on the specific players (name, x or o, and moves). Both players' moves are rooted into the game info in order to determine a winner.