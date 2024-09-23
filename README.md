Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template
===

Due: September 19th, by 11:59 AM.
Rose Strobel

---

HTML:  
- HTML input tags and form fields of various flavors (`<textarea>`, `<input>`, checkboxes, radio buttons etc.)
- HTML that can display all data *for a particular authenticated user*. Note that this is different from the last assignnment, which required the display of all data in memory on the server.

Note that it might make sense to have two pages for this assignment, one that handles login / authentication, and one that contains the rest of your application.
For example, when visiting the home page for the assignment, users could be presented with a login form. After submitting the login form, if the login is 
successful, they are taken to the main application. If they fail, they are sent back to the login to try again. For this assignment, it is acceptable to simply create 
new user accounts upon login if none exist, however, you must alert your users to this fact.  

CSS:  
- CSS styling should primarily be provided by your chosen template/framework. 
Oftentimes a great deal of care has been put into designing CSS templates; 
don't override their stylesheets unless you are extremely confident in your graphic design capabilities. 
The idea is to use CSS templates that give you a professional looking design aesthetic without requiring you to be a graphic designer yourself.

JavaScript:  
- At minimum, a small amount of front-end JavaScript to get / fetch data from the server. 
See the [previous assignment](https://github.com/cs-4241-23/shortstack) for reference.

Node.js:  
- A server using Express and a persistent database (mongodb).

General:  
- Your site should achieve at least 90% on the `Performance`, `Best Practices`, `Accessibility`, and `SEO` tests 
using Google [Lighthouse](https://developers.google.com/web/tools/lighthouse) (don't worry about the PWA test, and don't worry about scores for mobile devices).
Test early and often so that fixing problems doesn't lead to suffering at the end of the assignment. 

Deliverables
---

Do the following to complete this assignment:

1. Implement your project with the above requirements. I'd begin by converting your A2 assignment. First, change the server to use express. Then, modify the server to use mongodb instead of storing data locally. Last but not least, implement user accounts and login. User accounts and login is often the hardest part of this assignment, so budget your time accordingly.
2. If you developed your project locally, deploy your project to Glitch (unless completing the alternative server technical acheivement described below), and fill in the appropriate fields in your package.json file.
3. Test your project to make sure that when someone goes to your main page on Glitch (or an alternative server), it displays correctly.
4. Ensure that your project has the proper naming scheme `a3-yourfirstname-yourlastname` so we can find it.
5. Fork this repository and modify the README to the specifications below.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a3-firstname-lastname`.

---
*Technical*

I received a 100 in all 4 categories on lighthouse for the login, but I recieved all 100's for the to-do page except for accessibility. It is saying that because input.checkbox does not have a label, it cannot rate it a 100, which I don't understand because I put a label on the checkboxes in my main.js code.

*Design/UX*

1) I provided unique and informative page titles. My page titles describe what webpage you are on, whether you are on the login and sign up page or the to-do list page.
2) I used headings to convey meaning and structure. The headings on the to-do page clearly notes what the website is meant for. Along with the heading, I also described it in a paragraph below it.
3) I kept content clear and concise. The content on the page contains either login or signup, or information for the to-do tasks. The content on the to-do page includes a text box where the user can input their task, a submit button to submit their task, and a list of all the tasks below it.
4) I provided sufficient contrast between the foreground and background. The foreground and background are two different colors.
5) I associated a label with every form control. All of the forms in my website have a label that clearly describes what that textbox does. On the log in page, there is a label for both login and signup. On the to-do page, there is a label for tasks using a placeholder.
6) I reflected the reading order in the code order. My code goes from top to bottom how you would see the website. For example, I have the header first, then the paragraph, then the text inputs and submit button, then the lists.
7) I ensured that interactive elements are easy to identify. I made sure that the user's cursor turns into a pointer when hovering over interactive elements. I also made these elements less bold than the other text on the page and made their opacity slightly less when hovering over them.
8) I provided clear and consistent navigation options. The navigation accross the webpage includes clear and consistent navigation by using clear headings and displaying informative content on the page.
9) I ensured that forms have clear and descriptive labels. Each label for the forms have very descriptive labels so that the user is not confused. If they are trying to create a new task, there is a label to add the task. If they want to sign in or sign up, there is a label to notify the user what they are doing.
10) I used headings and spacing to group related content. I used whitespace to make different content more apparent. There is sufficient white space between the heading and paragraphs, as well as the list of tasks. I also used a hr line to make it more apparent.
11) I identified the main language used on the webpage. In the meta tag, <html lang="en">, I said that the language of the website is english.
12) I did not use color to convey information. I did not use color, but rather prompts to display information. If the user did not input a value in to the task textbox, a prompt would show notifying them to input a value before submitting. If the user wanted to delete a task, I would prompt them making sure that they want to delete their task.

CRAP:
Contrast: In my website, I applied contrast by using different colors to make each element stand out. For example, I made the headings bold and applied a larger font-size to them. I made the body text, including the paragraph tag, placeholders, and buttons, much smaller in comparison to the header. This made the content look more visually appealing due to how it guides the user's eye down the page and displays the information in a reading order. I also applied a border-radius to my buttons to make them more round. I did the same for the text boxes and the containers to give the entire website a much softer feel. I also wanted it to contrast against the sharp font applied to the text. Overall, this made the shapes and the font stand out, ensuring that the user has a good experience.

Repetition: Regarding repetition, I created a color scheme throughout the entire website. I used this color scheme on both the log in page and the to-do page. This made the website look more put together and made navigating to different webpages feel on theme. Had I used different colors, navigating to a different webpage would feel like visiting a whole new webiste. I also applied a border-radius to all of the text boxes and buttons on both webpages. This made all of the interactible elements seem on theme. One element did not stand out over another. Regarding the fonts, I used the same font for all of the text elements and made sure that they all used the same color. Using repetition, I made the webpages seem more consistent and "on brand."

Alignment: My website had a structured sense of alignment. I focused on centering all of the text and objects in the center. This includes the container element, the buttons, and the text boxes. The centering of these elements made the pages look alot more symmetrical and professional. I also made sure that objects were spaced correctly, where one element is not too close or too far from another element. This helps guide the user's eye down the website. With everything centered, it makes reading the text easier. This prevents the user from being confused with the alignment. They can easily find all interactible buttons and text boxes due to knowing what to expect and knowing where objects may be. Overall, centering the content is what made my website easier to navigate and readable.

Proximity:  Regarding proximity, I grouped all related elements together code wise. I grouped them in a container div to make it easier separating and styling different elements. I placed large headings at the top of the page to show the user what the webpage is. Below the heading, I placed a smaller body section with a description of the website. I then created a todo-container that had the user inputs, such as the text box and the button to submit their task. These are below the description but in their own div. Below the inputs, I create a horizontal line to separate the tasks from the content above and made an unlisted list to place the tasks. I used white space and horizontal lines to organize the overall page layout, making it easier for the user to navigate through the website.

---

## Your Web Application Title

your glitch (or alternative server) link e.g. http://a3-charlie-roberts.glitch.me

My project is a to-do list. The user will sign in or sign up. If the user signs up, their username and password will be sent to
my MongoDB database. They will now be able to sign in with their given username and password. Cookies allows my website to store their username and password for 24 hours, which makes logging in easier. If the user enters the wrong password or they don't have an account, it will send a log to the console. Once the user logs in and loads into the to-do list webpage, they are able to create tasks. These tasks are edittable and deletable. Users can also check off their task if it is completed. Adding and deleting tasks are also sent to my MongoDB database in the "tasks" section. It stores the user's username and the task they added, so that when that user logs in, their tasks will be stored. Some challenges were making the server work, as well as displaying the task data. It was difficult debugging my code figuring out why I would be getting error codes.

The CSS framework I used was bootstrap. I mainly relied on bootstrap for its text-font and its container. I have also used bootstrap before, which is why I felt more comfortable using it for this project. Regarding custom CSS, I just changed the background colors of the containers and text so that it matched my own theme. I also centered everything and added some padding to the borders so that they were more rounded.

## Achievements
My achievements are worth however you see fit

## Technical Achievements
- **Tech Achievement 1**: I used a lot of middleware, including express.urlencoded, express.json, cookieSession, and express.static.

**Tech Achievement 2**I received a 100 in all 4 categories on lighthouse for the login, but I recieved all 100's for the to-do page except for accessibility. It is saying that because input.checkbox does not have a label, it cannot rate it a 100, which I don't understand because I put a label on the checkboxes in my main.js code.

**Tech Achievement 3** I used MongoDB to save user data

### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative

**Design Achievement 2**: I added some of my own design elements to bring the whole page together, such as centering text and content, and creating a color scheme.
