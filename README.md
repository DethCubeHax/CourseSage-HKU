# GPAid Alpha HKU

Sentiment Analysis:
Natural Language Processing
Used the RoBERTa Model for sentiment analysis of the course reviews based on positivity levels of reviews to get an estimate of the students' sentiment about the course load, course work, grading curvature etc.
Used the Huggingface Transformers Pipeline along with the Roberta model to tokenize and encode the text.
The text is decoded and the Roberta model is used to assign scores which are processed using numpy library components.
Pandas is used to produce a dataframe of course reviews which are stored alongside their respective positivity scores.
JSON parsing and OS is used to dump the data into csv files for data processing and sorting.

Scraping:
The scraper makes API calls to the server through user login and intercepts the API calls to extract course data from websites alongside user reviews, user scores, course grades and reviews.

Sorting by grades-
Use of numpy to generate a standardized grading model to produce a grade-factor that mutliplied with grades and average assumed gpa to produce a finalized rating for the course. This rating is used to sort the courses.

Sorting by reviews-
Used numpy alongside data from sentiment analysis. Used matplotlib to generate graphs and predict data patterns to establish a linkage between reviews and grades and overall course performance to produce a ranking-factor which is multiplied to produce the ranking of the course amongst all the other courses.
