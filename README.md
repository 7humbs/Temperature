# Mother Nature's Thermometer!
###Convert cricket chirps into degrees Fahrenheit or Celsius

![cricket](https://cloud.githubusercontent.com/assets/19316487/20552879/321409ea-b11d-11e6-9a1c-fc4e42a10940.png)

This was a fun project where I first implemented Javascript into HTML and CSS (no tutorials, either! I simply researched each problem I came across to come up with the solution). You can tell the temperature outside depending on how many times a cricket chirps. Isn't that cool? Users can either convert the chirps to Fahrenheit or Celsius, accompanied by a big woodsy background pic. Now when you go camping, you can pull up my program to see what the temperature is - crickets are mother nature's thermometer!

I originally was going to make this program convert between Celsius, Fahrenheit, and Kelvin. Upon researching the conversions I stumbled upon the cricket thing! My inspiration and formula comes from the [Almanac](http://www.almanac.com/content/cricket-chirps-natures-thermometer).

You may notice (if you checked out the link above) to determine the temperature in Fahrenheit, you enter the number of cricket chirps you hear for 14 seconds, and for Celsius, 25 seconds. To make it simpler for the user, I gather input for 14 seconds and use the Fahrenheit formula to figure out the temperature and then covert that to Celsius should they pick that measurement.

From radio buttons to the input field, this project taught me a lot. My most memorable part of the project was figuring out how to make the input field turn red when it was wrong and then change it back to the default setting when it was clicked on again - this taught me much about manipulating classes via JavaScript. It's so powerful!

With user input, I found the solution in HTML interesting to only accept numbers that must be greater than 0, and integers only - this was for the default arrows only though. I also had to find the solution if users were to manually input their text (such as typing out one, two, three, or something crazy like "cupcakes!," etc) - this was resolved in my Javascript invalid() function!

Positioning was interesting - I'm happy with the outcome of my content and its responsiveness. A challenging aspect was the footer! The footer is not displayed in smaller devices - the reason being is when I tested this on my phone, every time I entered a number, the default keyboard on my mobile device would push up the footer. This is an issue I'm still wanting to resolve (besides just not displaying it - that's technically not really a solution for me, haha), and I'm hoping with a bit more practice and knowledge, I can come back to this and try it again! The other challenge I have is making it where the user can hit the enter button on their keyboard instead of only being able to click the submit button.

I have other ideas I want to implement with this project, such as taking the viewer's weather from their personal location and converting it to cricket chirps - so perhaps some API actioin going on. I am going to move on to different projects so I can practice what I'm learning via Treehouse. Plus, with being new to git and github, it will give me an excuse to commit!
