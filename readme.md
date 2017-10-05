#RESTful Routing

##Introduction
* Define REST and why it matters
* List all 7 RESTful routes
* Show examples of RESTful routing in practice

REST (representational state transfer) - the architecture, a mapping between HTTP routes and CRUD
CRUD (create read update destroy)

Example: blog site

CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

--------------- Blog Index -----------------

* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simpler Navbar

* Use Semantic UI Framework (similar to Bootstrap)
* Use body-parser again (is how we get data out of the form, form send data into request body, and then we parse the request body)

--------------- Basic Layout -----------------

* Add Header and Footer partials
* Include Semantic UI
* Add Simple Nav

--------- Putting the C in the CRUD ----------

* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

------------------- SHOWtime ------------------

* Add SHOW route
* Add SHOW template
* Add links to show page
* Style the SHOW template

---------------- Edit/Update  ------------------

* Add EDIT route
* Add EDIT form
* Add UPDATE route
* Add UPDATE form
* Add Method-Override (an npm we tell express to use)

------------------- DESTROYYYYY -----------------

* Add DESTROY route
* Add EDIT and DESTROY links

----------------- Final Updates -----------------

* Sanitize blog body with express-sanitizer npm (removes all scripts and gives pure HTML)
* Style Index
* Update REST Table