const fetch = require('node-fetch');

const quote_endpoint = 'https://philosophy-quotes-api.glitch.me/quotes';

const rappers = ['21 Savage', '6ix9ine', 'A Boogie wit da Hoodie', 'BlocBoy JB', 'Blueface', 'Cardi B', 'Cheif Keef', 'Fetty Wap', 'Future', 'Gucci Mane', 'Kodak Black', 'Lil Baby', 'Lil Durk', 'Lil Keed', 'Lil Mosey', 'Lil Xan', 'Lil Yachty', 'Famous Dex', 'Tay-K', 'Trippie Redd', 'Ty Dolla $ign', 'YFN Lucci', 'Young Thug', 'Yung Lean', 'Ugly God', 'YBN Nahmir', 'YNW Melly', 'Smokepurpp', 'Ski Mask the Slump God', 'Sheck Wes', 'MadeinTYO', 'Playboi Carti', 'Post Malone', 'Rich Homie Quan', 'Rich the Kid', 'Lil Pump', 'Lil Skies', 'Gunna', 'Lil Uzi Vert'];

/* Logs a quote to the console with an unlikely author.
authorArr is assumed to be an array filled with names of people unlikely to engage in philosophical thought */
function unlikelyQuote(authorArr){

    // Send a GET request to the Philosophy quotes API
    fetch(quote_endpoint)
    // Handle the response
    .then(res => res.json())
    .then(json => {
        // Pick a random quote from the response and return it
        const q_index = Math.floor(Math.random() * json.length);
        return json[q_index].quote;
    })
    .then(quote => {
        // Pick a random author from the array of names passed to the function
        const a_index = Math.floor(Math.random() * authorArr.length);
        // Generate a random year
        const year = Math.floor(1997 + (2020 - 1997) * Math.random());

        // Combine the data and output to the user
        console.log(`\n\n\n'${quote}' - ${authorArr[a_index]} (${year})\n\n\n`);
    })
    .catch(err => console.log(err));
};

unlikelyQuote(rappers);