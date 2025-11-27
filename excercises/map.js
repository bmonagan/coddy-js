function formatNames(names) {
  return names.map(name => {
    let words = name.toLowerCase().split(' ');
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  });
}