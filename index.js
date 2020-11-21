const fetch = require('node-fetch');

const quote_endpoint = 'https://philosophy-quotes-api.glitch.me/quotes';

const rappers = ['21 Savage', '6ix9ine', 'A Boogie wit da Hoodie', 'BlocBoy JB', 'Blueface', 'Cardi B', 'Cheif Keef', 'Fetty Wap', 'Future', 'Gucci Mane', 'Kodak Black', 'Lil Baby', 'Lil Durk', 'Lil Keed', 'Lil Mosey', 'Lil Xan', 'Lil Yachty', 'Famous Dex', 'Tay-K', 'Trippie Redd', 'Ty Dolla $ign', 'YFN Lucci', 'Young Thug', 'Yung Lean', 'Ugly God', 'YBN Nahmir', 'YNW Melly', 'Smokepurpp', 'Ski Mask the Slump God', 'Sheck Wes', 'MadeinTYO', 'Playboi Carti', 'Post Malone', 'Rich Homie Quan', 'Rich the Kid', 'Lil Pump', 'Lil Skies', 'Gunna', 'Lil Uzi Vert'];

function unlikelyQuote(authorArr){
    fetch(quote_endpoint)
    .then(res => res.json())
    .then(json => {
        const q_index = Math.floor(Math.random() * json.length);
        return json[q_index].quote;
    })
    .then(quote => {
        const a_index = Math.floor(Math.random() * authorArr.length);
        const year = Math.floor(1700 + (2020 - 1700) * Math.random());


        console.log(`\n\n\n'${quote}' - ${authorArr[a_index]} (${year})\n\n\n`);
    })
};

unlikelyQuote(rappers);