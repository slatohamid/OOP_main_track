/*
Use Case #3
We are preparing three types of content for a website:

Articles
Ads
Vacancies
All of those have a title and text. When showing the title, they are modified as follows: articles remain as they are, ads are shown in all caps and vacancies are appended with " - apply now!". The original title should still be retrievable, so no modification is permanent.

Have an array with two articles, one ad and one vacancy. Use this array to show all content types (title + text).

Bonus: an article can be marked as "breaking news". If this is the case, the title is prepended with "BREAKING: ". Extra bonus: display all the content with the appropriate html tags.*/

// Sample content array with articles, ads, and vacancies
const contentArray = [
  {
    type: "article",
    title: "Introduction to Web Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    type: "article",
    title: "10 Tips for Healthy Living",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    type: "ad",
    title: "special offer",
    text: "Limited time offer! 50% off on selected items.",
  },
  {
    type: "vacancy",
    title: "Frontend Developer",
    text: "Join our team and contribute to cutting-edge web development - apply now!",
  },
];

// Function to display content with appropriate modifications
function displayContent(content) {
  // Iterate through the content array
  for (const item of content) {
    let modifiedTitle = item.title;

    // Check for breaking news
    if (item.type === "article" && item.breakingNews) {
      modifiedTitle = `BREAKING: ${modifiedTitle}`;
    }

    // Modify titles based on content type
    switch (item.type) {
      case "ad":
        modifiedTitle = modifiedTitle.toUpperCase();
        break;
      case "vacancy":
        modifiedTitle = `${modifiedTitle} - apply now!`;
        break;
      default:
      // For articles, do nothing extra to the title
    }

    // Display the content with appropriate HTML tags
    console.log(`<h2>${modifiedTitle}</h2>`);
    console.log(`<p>${item.text}</p>`);
    console.log("<hr>"); // Add a horizontal line between content for clarity
  }
}

// Display the content
displayContent(contentArray);
