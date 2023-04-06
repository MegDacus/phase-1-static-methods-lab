class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z'' -]/gi, '');
  }

  static titleize(string) {
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    return this.capitalize(string.replace(/\b\w+\b/g, 
    word => excludeWords.includes(word) ? word : this.capitalize(word)))

}}
