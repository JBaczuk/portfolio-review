# pick-name
App that retrieves your classes and names of students from those classes. Then chooses a name at random.

## Vision
Initially I want this to be an application. Probably a web app.

Problem: Educators have some primitive methods to cold calling students. Whether it is tediously writing their names on 120 popsicle sticks (where do you get that many sticks anyways) or trying to call at random based on where they sit in the room. These are all ways that are biased and primitive. I want to make an application that simply chooses a name of a student in your class at random with no bias. The application first and foremost should be simple to set-up and extremely simple to use. 

## Goal 
Open web app. Get names of classes. Get names of students in classes. Choose a class to have a student name from that class appear at random. Save all this data for next use. 

## IO
I want to build this as an application. Deployed and ready to use by other educators. 

Imputs
  1. Number of classes should be imported or entered manually. 
      Considering importing from pdf, txt, doc, csv, xls and saving to database.
      There may be a better way. Need to do some research.
  2. Names of students should also be imported or entered manually. 
      As a start I can attempt extracting from text. Save to database.
  3. Click on a class button with animation. 
      Extend this with image of student if possible. 

Outputs
  1. Get a simple page to display class in form of buttons with class labeled as text.
  2. Display random student name

All this data should be saved so teacher can go back and choose again. 

Extention: Random student groups generator. Can generate groups of 2 up to 6. 
Extention: A random student cannot be called twice in a row until at leat 10 other students are called first.

## How to run the code
Option 1: Go to link https://pick-name.netlify.app
Option 2: 
  Clone the code into your preferred IDE (like VS code).
  In terminal and directory of the project run 'npm i' (install npm dependencies).
  In terminal run 'npm run start'.
  The project will run in browser 'localhost:3000'.
  
Let me know if you have questions, comments, or suggestions on this. 

