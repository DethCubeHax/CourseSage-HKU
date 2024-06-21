# 📚 CourseSage HKU

CourseSage HKU is a robust platform designed to assist HKU students in making informed course selections. By aggregating data from various sources, the platform provides detailed insights into course performance, reviews, and more. Below is an overview of its key features and functionalities.

## Features

### 📈 Regression Model
Our regression model analyzes course grades to generate a scoring factor. This factor helps in sorting courses from best to worst grades within each faculty. Key components include:
- **Data Handling:** Utilized `numpy` and `pandas` for loading and managing data.
- **Data Extraction:** Employed `JSON` and `IO` to export data to the file system.

### 🧠 Sentiment Analysis
CourseSage HKU leverages Natural Language Processing (NLP) to analyze course reviews using the RoBERTa model, estimating student sentiment regarding course load, coursework, grading curves, and more. Highlights include:
- **Model:** Employed the Huggingface Transformers Pipeline and the RoBERTa model for text tokenization and encoding.
- **Score Processing:** Used `numpy` for sentiment score processing and `pandas` for generating a dataframe of course reviews with positivity scores.
- **Data Storage:** Utilized `JSON` parsing and `os` for exporting data into CSV files for further processing and sorting.

### 🌐 Web Scraping
The platform includes a scraper that extracts course data, user reviews, scores, and grades by making API calls to the server through user login. It intercepts API calls to collect comprehensive data.

### 📊 Course Sorting
#### By Grades:
- Developed a standardized grading model using `numpy` to create a grade-factor.
- This grade-factor multiplies with grades and average assumed GPA to produce a final course rating for sorting purposes.

#### By Reviews:
- Combined sentiment analysis data with `numpy` and used `matplotlib` to generate graphs and predict data patterns.
- Established a linkage between reviews, grades, and overall course performance to create a ranking factor for course sorting.

## 🛠️ Technical Details
### Libraries and Tools
- **Data Processing:** `numpy`, `pandas`
- **NLP:** Huggingface Transformers, RoBERTa Model
- **Visualization:** `matplotlib`
- **Data Handling:** `JSON`, `os`
- **Web Scraping:** Custom API calls interception

### Data Storage
All processed data is stored in CSV files for easy access and manipulation.

## 💻 Interactive UI
The platform features an interactive user interface allowing users to sort courses based on various criteria such as grades, reviews, and overall performance. This helps students make informed decisions about their course selections.

## 🚀 Getting Started
1. **Installation:** Clone the repository and install the necessary dependencies.
2. **Data Setup:** Run the scraper to collect the latest course data.
3. **Analysis:** Use the regression model and sentiment analysis features to analyze the data.
4. **UI Interaction:** Utilize the interactive UI to explore and sort courses.

## 🤝 Contributing
We welcome contributions! Feel free to submit pull requests or report issues on our GitHub repository.

## 📬 Contact
For any inquiries or support, please reach out to wasiflh@connect.hku.hk

---

CourseSage HKU aims to streamline course selection for HKU students by providing detailed and actionable insights into course performance. Happy learning!
