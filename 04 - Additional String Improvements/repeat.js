// Function to repeat character N times
function repeatCharacter(char, n = 10) {
    const text = char.repeat( n );
    console.log( text );
}

// Show `🔥` emoji 10 times
repeatCharacter(🔥);
// Output
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Show `🔥` emoji 5 times
repeatCharacter(🔥, 5);
// Output
// 🔥🔥🔥🔥🔥

