// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    x = x.toLowerCase();
    const originalArray = x.split('');
    const reversedArray = x.split('').reverse();
    
    // Join the arrays into strings before comparison
    const originalString = originalArray.join('');
    const reversedString = reversedArray.join('');
  
    return originalString === reversedString;
  }