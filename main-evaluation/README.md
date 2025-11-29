2 .Problem Statement
⚠ Please Note
Focus more on core functionality and JavaScript logic
Keep styling minimal — basic layout is enough, design does not carry much weight compared to working features
Build a simple Fleet Management App with two pages:

index.html – Login page
admin.html – Admin dashboard page
3. Page 1: index.html (Login Page)
Create a basic login page with:

An email input
A password input
A Login button
Login Validation Logic:

Valid credentials:

Email: admin@gmail.com
Password: admin1234
If both match:

Show an alert("Login success")
Redirect/navigate to admin.html
Otherwise:

Show an alert saying "Wrong email or password" (or similar clear message)
4. Page 2: admin.html (Admin Dashboard)
The admin.html page should have three main sections:

Navbar
Sidebar
Main Content Area
4.1 Sidebar – Fleet Form
In the sidebar, create a form with the following fields:

Reg No of Vehicle (text input)
Category (select input with options: Auto, Car, Truck, Bus)
Driver Name (text input)
Is Available (boolean – can be a checkbox, toggle, or select: Available / Unavailable)
"Add Fleet" Button
On clicking "Add Fleet":

Validate inputs (e.g., required fields).
If valid, append the vehicle data into the Main Content Area as a card.
Layout: Maintain 3 cards per row.
4.2 Main Content – Fleet Cards
Each fleet (vehicle) should be displayed as a card in the main content section.

Each card must display:

Reg No of Vehicle
Category
Driver Name
Availability Status (Available / Unavailable)
Use this image src for all the vehicle Sample Vehicle Link
Each card must also have three buttons:

Update Driver
Change Availability
Delete Vehicle
4.3 Card Actions (Behavior)
Update Driver Button

On click, open a prompt() asking for a new driver name.
Enter Driver and Update Driver Name, when OK button is clicked
Change Availability Button

On click:

If the vehicle is currently Available, change it to Unavailable.
If it is Unavailable, change it to Available.
The change should be reflected immediately in the card UI.

Delete Vehicle Button

On click, That Particular Vehicle should be deleted and Updated Data should be Re-rendered into UI again
As Developer, Take Care of Edge Cases & Validation

(Please Note: This is second priority in this evaluation but carries minimun weightage in the score)

Handle the following Edge Cases & Validation carefully:

Form Validation on Add Fleet:
Required fields should not be left empty.
Handle invalid or missing values gracefully.
Clear the form once Data is added
Empty Driver Name in Prompt (Update Driver):
If user submits empty or whitespace-only input, then Do not update the driver name
Optionally show an alert like: "Driver name cannot be empty."
Delete Confirmation:
Always show a confirmation confirm() before deleting a vehicle.
Only delete if the user confirms.
6. Navbar – Filters & Clear Filter
In the navbar, add:

A Category Filter (select input – All, Auto, Car, Truck, Bus)
An Availability Filter (select input – All, Available, Unavailable)
A "Clear Filter" button
Filtering Behavior:

When a category is selected:

Only show vehicles/cards of that selected category.
When an availability is selected:

Only show vehicles that match the selected availability.
Filters can be combined - optional:

e.g., Category = Car and Availability = Available should show only available cars.
On clicking "Clear Filter":

Reset filters to default (e.g., All / empty).
Re-render and show all original data (all vehicles added so far).
7. Video Explaination:
Click this Video Link for better understanding of the problem
8. Docs Links
If needed you can refer the docs links provided below

MDN: prompt() — used for getting updated driver name
MDN: alert() — used for success/error messages
MDN: confirm() — used to confirm deleting a vehicle
MDN: createElement() — used for creating cards/UI elements dynamically
MDN: addEventListener() — used for button click functionality
MDN: append() — used for attaching new elements into DOM
CSS Box Shadow Examples — used for UI design styling of cards