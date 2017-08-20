/**
    Method  :   String.prototype.repeat()
    Purpose :   Returns a new string which contains the specified number of copies of the string 
                on which it was called, concatenated together.
    Link    :   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
*/

// Function to repeat character N times
function repeatCharacter(char, n = 10) {
    const text = char.repeat( n );
    console.log( text );
}

// Show `🔥` emoji 10 times
repeatCharacter('🔥');
// Output
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Show `🔥` emoji 5 times
repeatCharacter('🔥', 5);
// Output
// 🔥🔥🔥🔥🔥

