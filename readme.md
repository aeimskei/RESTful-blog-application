# RESTful Blog Applcation

This project demonstrate the understanding of RESTful route architecture by using its conventional pattern for defining routes. REST is a way of mapping HTTP routes and CRUD (Create, Read, Update and Destroy). My Blog Application is a simple way to represent this process. 

The user can easily navigate throught the simple UI.

## Setup the Blog App

CREATE  /blog
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

* Create the Blog model
* Add INDEX route and template
* Add Simpler Navbar

* Use Semantic UI Framework (similar to Bootstrap)
* Use body-parser again (is how we get data out of the form, form send data into request body, and then we parse the request body)

## Mongoose Schema & Model

* title (typeof string)
* image url (typeof string)
* body, blog text (typeof string)
* timestamp for created (date)

```
let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
})
```

## Basic Layout

* Add Header and Footer partials
* Include Semantic UI
* Add Simple Nav

## CREATE Route Steps

* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

## SHOW Route Steps

* Add SHOW route
* Add SHOW template
* Add links to show page
* Style the SHOW template

## EDIT/UPDATE Route Steps

* Add EDIT route
* Add EDIT form
* Add UPDATE route
* Add UPDATE form
* Add Method-Override (an npm we tell express to use)

## DESTROY Route Steps

* Add DESTROY route
* Add EDIT and DESTROY links

## Finalize

* Sanitize blog body with express-sanitizer npm (removes all scripts and gives pure HTML)
* Style Index
* Update REST Table