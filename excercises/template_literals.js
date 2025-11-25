function greetAll(names) {
  let result = "";
  for (let i = 0; i < names.length; i++) {
    result += `Hello, ${names[i]}!\n`;
  }
  return result.trim();
}