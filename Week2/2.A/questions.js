const questions = [
    // Questions and answers
    {
        question: 'A deal is made to make Washington, DC the new capital in "The Room Where It Happens," a song in what smash hit Broadway musical?' , 
        answer: 'Hamilton' , 
    },

    {
        question: 'What lyricist and composer who died in 2021 has a Broadway theater named for him? The theater was named for him in 2010, on the occasion of his 80th birthday.' , 
        answer: 'Stephen Sondheim' ,
    },

    {
        question: 'With over 10,000 performances, what spooky performance is the longest running show in Broadway history?' ,
        answer: 'Phantom of the Opera' ,
    },

    {
        question: 'What musical is "Marian the Librarian" from?' ,
        answer: 'The "Music Man"' ,
    },

    {
        question: '"The rain in Spain stays mainly in the plain" is a famous lyric from what classic Broadway musical?' ,
        answer: '"My Fair Lady"' ,
    },
];

// random prompt
const randomQuestion = Math.floor(Math.random() * questions.length);
console.log(Math.floor(Math.random() * 5));

const userInput = window.prompt(questions[randomQuestion].question);

// response and answer
window.alert('You answered ' + userInput + '. The correct answer is ' + questions[randomQuestion]. answer + '.');