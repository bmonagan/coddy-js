function formatBlogTitle(title) {
  // Trim whitespace from both ends
  let trimmedTitle = title.trim();
  
  // Split the title into words
  let words = trimmedTitle.split(" ");
  
  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }
  
  // Join the words back together
  let formattedTitle = words.join(" ");
  
  // Replace all occurrences of "javascript" with "JavaScript"
  formattedTitle = formattedTitle.replaceAll("Javascript", "JavaScript");
  
  return formattedTitle;
}