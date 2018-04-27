### Burger Logger Overview

This application uses MySQL, Node, Express, and Handlebars to allow a user to input the name of burgers they would like to eat and then devour them.

### CRUD Functions

The app uses three CRUD functions.

1.  READ - Shows all entries from the MySQL database when the application loads and displays them either under 'Burgers Available to Eat' or 'Burgers That Have Been Eaten' heading depending on it's current value from the database.

2.  UPDATE - When uses select an available burger to devour a request is called and hits the /api/burger/:id route in Express and changes the state of the burger to FALSE. The page is automatically reloaded and the burger the user selected is now displayed under the 'Burgers That Have Been Eaten' heading.

3.  CREATE - The user can enter a burger name in the text field and click 'Add a Burger'. This hits the /api/burger/ route in Express and inserts the new burger into the MySQL database. The submitted burger is automatically set to TRUE which places the burger under the heading 'Burgers Available to Eat' after automatically reloading the page.
