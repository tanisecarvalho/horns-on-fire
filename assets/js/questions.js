// questions for the quiz
const hardRock = [
  {
    "question": "Who's the lead singer of the band Guns N' Roses?",
    "options": ["John Lennon", "Steven Tyler", "Axl Rose", "Jani Lane"],
    "correct": "Axl Rose"
  },
  {
    "question": "From which band is the song 'I Saw Red'?",
    "options": ["Warrant", "Stryper", "Faster Pussycat", "Winger"],
    "correct": "Warrant"
  },
  {
    "question": "Which of these guitar players never played for Guns N' Roses?",
    "options": ["Bumblefoot", "Mick Mars", "Buckethead", "Tracii Guns"],
    "correct": "Mick Mars"
  },
  {
    "question": "<em>Woke up to the sound of pouring rain...</em> This is the beginning of which Skid Row song?",
    "options": ["In A Darkened Room", "Quicksand Jesus", "I Remember You", "Wasted Time"],
    "correct": "I Remember You"
  },
  {
    "question": "Which was the first Bon Jovi song?",
    "options": ["Livin' On A Prayer", "Always", "It's My Life", "Runaway"],
    "correct": "Runaway"
  }
];

const guessWho = [
  {
    "question": "My birth name is 'James Richard Southworth', but you know me as...",
    "options": ["Tracci Guns", "Rachel Bolan", "Slash", "Nikki Sixx"],
    "correct": "Rachel Bolan"
  },
  {
    "question": "My birth name is 'Frank Carlton Serafino Feranna, Jr.', but you know me as...",
    "options": ["Mick Mars", "Eddie Jackson", "Nikki Sixx", "Dee Snider"],
    "correct": "Nikki Sixx"
  },
  {
    "question": "My birth name is 'Vincent Damon Furnier', but you know me as...",
    "options": ["Alice Cooper", "Kip Winger", "Duff McKagan", "Chip Z'Nuff"],
    "correct": "Alice Cooper"
  },
  {
    "question": "My birth name is 'Scott Lawrence Mulvehill', but you know me as...",
    "options": ["Steve 'Sex' Summers", "Scotti Hill", "Geoff Tate", "Scott Ian"],
    "correct": "Scotti Hill"
  },
  {
    "question": "My birth name is 'Robert Alan Deal', but you know me as...",
    "options": ["Mick Mars", "Rachel Bolan", "Alice Cooper", "Chip Z'Nuff"],
    "correct": "Mick Mars"
  },
  {
    "question": "My birth name is 'Saul Hudson', but you know me as...",
    "options": ["Axl Rose", "Scotti Hill", "Geoff Tate", "Slash"],
    "correct": "Slash"
  },
  {
    "question": "My birth name is 'Jeffrey Dean Isbell', but you know me as...",
    "options": ["C.C. DeVille", "Izzy Stradlin", "Bret Michaels", "Mick Mars"],
    "correct": "Izzy Stradlin"
  },
  {
    "question": "My birth name is 'Gregory Rybarski', but you know me as...",
    "options": ["Alice Cooper", "Chip Z'Nuff", "Duff McKagan", "Slash"],
    "correct": "Chip Z'Nuff"
  },
  {
    "question": "My birth name is 'Bruce Anthony Johannesson', but you know me as...",
    "options": ["C.C. DeVille", "Bruce Dickinson", "Bret Michaels", "Slash"],
    "correct": "C.C. DeVille"
  },
  {
    "question": "My birth name is 'Richard Allan Ream', but you know me as...",
    "options": ["Axl Rose", "Rikki Rockett", "Snake Sabo", "Vinnie Chas"],
    "correct": "Rikki Rockett"
  },
  {
    "question": "My birth name is 'Steven Edward Duren', but you know me as...",
    "options": ["Steven Adler", "Kip Winger", "Steven Sweet", "Blackie Lawless"],
    "correct": "Blackie Lawless"
  },
  {
    "question": "My birth name is 'John Kennedy Oswald', but you know me as...",
    "options": ["Stevie Rachelle", "Jani Lane", "Jack Russell", "Mick Mars"],
    "correct": "Jani Lane"
  },
  {
    "question": "My birth name is 'Jeffrey Philip Wielandt', but you know me as...",
    "options": ["Geoff Tate", "Richie Sambora", "Zakk Wylde", "C.C. DeVille"],
    "correct": "Zakk Wylde"
  },
  {
    "question": "My birth name is 'Hector Juan Samuel Torres', but you know me as...",
    "options": ["Richie Sambora", "Tico Torres", "Slash", "Ozzy Osbourne"],
    "correct": "Tico Torres"
  },
  {
    "question": "My birth name is 'Mark Glickman', but you know me as...",
    "options": ["Snake Sabo", "Mark \"The Animal\" Mendoza", "Michael Foster", "Mike Stone"],
    "correct": "Mark \"The Animal\" Mendoza"
  }
];

const powerBallads = [
  {
    "question": "<em>'I paint a picture of the days gone by. When love went blind and you would make me see...'</em>, which balad is this?",
    "options": ["Every Rose Has Its Thorn by Poison", "Home Sweet Home by Mötley Crüe", "I Remember You by Skid Row", "The Price by Twisted Sister"],
    "correct": "I Remember You by Skid Row"
  },
  {
    "question": "<em>'Every time we kiss I feel you breathe your love so deep inside of me...'</em>, which balad is this?",
    "options": ["I Saw Red by Warrant", "Everytime I Look At You by Kiss", "More Than Words by Extreme", "Alone by Heart"],
    "correct": "I Saw Red by Warrant"
  },
  {
    "question": "<em>'Saying \"I love you\" is not the words I want to hear from you...'</em>, which balad is this?",
    "options": ["Here I Go Again by Whitesnake", "The Price by Twisted Sister", "More Than Words by Extreme", "Always by Bon Jovi"],
    "correct": "More Than Words by Extreme"
  },
  {
    "question": "<em>'You know that I've seen too many romantic dreams. Up in lights, falling off the silver screen...'</em>, which balad is this?",
    "options": ["Wasted Time by Skid Row", "Heartbreak Station by Cinderella", "What It Takes by Aerosmith", "Home Sweet Home by Mötley Crüe"],
    "correct": "Home Sweet Home by Mötley Crüe"
  },
  {
    "question": "<em>'It was easy to keep all your lies in disguise 'cause you had me in deep with the devil in your eyes...'</em>, which balad is this?",
    "options": ["What It Takes by Aerosmith", "I Don't Love You Anymore by The Quireboys", "Always by Bon Jovi", "November Rain by Guns N' Roses"],
    "correct": "What It Takes by Aerosmith"
  },
  {
    "question": "<em>'But you were there to whisper in my ear: Why don't you share my dreams with me?...'</em>, which balad is this?",
    "options": ["Let It Rain by Warrant", "House of Pain by Faster Pussycat", "The Deeper of the Love by Whitesnake", "I Live my Life for You by FireHouse"],
    "correct": "The Deeper of the Love by Whitesnake"
  },
  {
    "question": "<em>'You and me, we had a fight, but the band they played our favorite song and I held you in my arms so strong...'</em>, which balad is this?",
    "options": ["November Rain by Guns N' Roses", "Never Say Goodbye by Bon Jovi", "Wait by White Lion", "Miles Away by Winger"],
    "correct": "Never Say Goodbye by Bon Jovi"
  },
  {
    "question": "<em>'Why be alone when we can be together, baby? You can make my life worthwhile I can make you start to smile...'</em>, which balad is this?",
    "options": ["To Be With You by Mr. Big", "When It's Love by Van Halen", "I'll Cry For You by Europe", "I Live my Life for You by FireHouse"],
    "correct": "To Be With You by Mr. Big"
  },
  {
    "question": "<em>'Watching the days go by, thinking 'bout the plans we made. Days turn into years. Funny how they fade away...'</em>, which balad is this?",
    "options": ["Cryin' by Vixen", "Let It Rain by Warrant", "House of Pain by Faster Pussycat", "Heartbreak Station by Cinderella"],
    "correct": "Heartbreak Station by Cinderella"
  },
  {
    "question": "<em>'Till now I always got by on my own I never really cared until I met you and now it chills me to the bone...'</em>, which balad is this?",
    "options": ["After the Rain by Nelson", "Alone by Heart", "When It's Love by Van Halen", "Without You by Mötley Crüe"],
    "correct": "Alone by Heart"
  },
  {
    "question": "<em>'The lonliness just fades away, thoughts of you, just memories. No cryin' now, for what we're missin'...'</em>, which balad is this?",
    "options": ["I'll Cry For You by Europe", "Miles Away by Winger", "After the Rain by Nelson", "Let It Rain by Warrant"],
    "correct": "Miles Away by Winger"
  },
  {
    "question": "<em>'They say that love don't last forever. Well, I'd be the last to disagree. Sometimes you win, sometimes you lose...'</em>, which balad is this?",
    "options": ["Miles Away by Winger", "When It's Love by Van Halen", "Feels Like Love by Danger Danger", "Wait by White Lion"],
    "correct": "Feels Like Love by Danger Danger"
  },
  {
    "question": "<em>'I never really wanted to let you get inside my heart. I wanted to believe this would soon be ending...'</em>, which balad is this?",
    "options": ["Alone Again by Dokken", "Everytime I Look At You by Kiss", "Without You by Mötley Crüe", "Cryin' by Vixen"],
    "correct": "Everytime I Look At You by Kiss"
  },
  {
    "question": "<em>'Though it's been a while now. I can still feel so much pain. Like a knife that cuts you the wound heals...'</em>, which balad is this?",
    "options": ["Every Rose Has Its Thorn by Poison", "House of Pain by Faster Pussycat", "Alone Again by Dokken", "Without You by Mötley Crüe"],
    "correct": "Every Rose Has Its Thorn by Poison"
  },
  {
    "question": "<em>'And I will always be with you. And there is nothing we can't do as long as we're together...'</em>, which balad is this?",
    "options": ["Always by Bon Jovi", "Feels Like Love by Danger Danger", "I Live my Life for You by FireHouse", "Cryin' by Vixen"],
    "correct": "I Live my Life for You by FireHouse"
  }
];

const guessAlbum = [
  {
    "question": "Which album is this?",
    "options": ["Appetite for Destruction by Guns N' Roses", "Hysteria by Def Leppard", "The Final Countdown by Europe", "Look What the Cat Dragged In by Poison"],
    "correct": "Appetite for Destruction by Guns N' Roses",
    "album": "01.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Hysteria by Def Leppard", "1984 by Van Halen", "Skid Row by Skid Row", "Metal Health by Quiet Riot"],
    "correct": "Skid Row by Skid Row",
    "album": "02.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Look What the Cat Dragged In by Poison", "Dr. Feelgood by Mötley Crüe", "Pump by Aerosmith", "Hysteria by Def Leppard"],
    "correct": "Dr. Feelgood by Mötley Crüe",
    "album": "03.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Metal Health by Quiet Riot", "Pump by Aerosmith", "1984 by Van Halen", "Night Songs by Cinderella"],
    "correct": "Night Songs by Cinderella",
    "album": "04.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Danger Danger by Danger Danger", "Appetite for Destruction by Guns N' Roses", "Skid Row by Skid Row", "Pornograffiti by Extreme"],
    "correct": "Danger Danger by Danger Danger",
    "album": "05.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Dr. Feelgood by Mötley Crüe", "The Final Countdown by Europe", "Trixter by Trixter", "Night Songs by Cinderella"],
    "correct": "The Final Countdown by Europe",
    "album": "06.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Pornograffiti by Extreme", "Bark at the Moon by Ozzy Osbourne", "Cherry Pie by Warrant", "Dr. Feelgood by Mötley Crüe"],
    "correct": "Pornograffiti by Extreme",
    "album": "07.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["New Jersey by Bon Jovi", "Cherry Pie by Warrant", "Metal Health by Quiet Riot", "After the Rain by Nelson"],
    "correct": "Metal Health by Quiet Riot",
    "album": "08.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Night Songs by Cinderella", "Dr. Feelgood by Mötley Crüe", "Hysteria by Def Leppard", "Cherry Pie by Warrant"],
    "correct": "Hysteria by Def Leppard",
    "album": "09.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["FireHouse by FireHouse", "Bark at the Moon by Ozzy Osbourne", "Slave to the Grind by Skid Row", "Look What the Cat Dragged In by Poison"],
    "correct": "Look What the Cat Dragged In by Poison",
    "album": "10.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Winger by Winger", "1984 by Van Halen", "Bark at the Moon by Ozzy Osbourne", "After the Rain by Nelson"],
    "correct": "1984 by Van Halen",
    "album": "11.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["What Comes Around Goes Around by Tuff", "Pump by Aerosmith", "New Jersey by Bon Jovi", "Night Songs by Cinderella"],
    "correct": "Pump by Aerosmith",
    "album": "12.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Winger by Winger", "Slippery When Wet by Bon Jovi", "FireHouse by FireHouse", "What Comes Around Goes Around by Tuff"],
    "correct": "Slippery When Wet by Bon Jovi",
    "album": "13.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["After the Rain by Nelson", "New Jersey by Bon Jovi", "Dog Eat Dog by Warrant", "What Comes Around Goes Around by Tuff"],
    "correct": "Dog Eat Dog by Warrant",
    "album": "14.jpg"
  },
  {
    "question": "Which album is this?",
    "options": ["Slave to the Grind by Skid Row", "FireHouse by FireHouse", "After the Rain by Nelson", "Winger by Winger"],
    "correct": "After the Rain by Nelson",
    "album": "15.jpg"
  }
];