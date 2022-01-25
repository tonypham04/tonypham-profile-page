export interface Project {
    id: number;
    name: string;
    imagePath: string;
    imageDescription: string;
    description: string;
    link: string;
}

export const projects = [
    {
        id: 1,
        name: 'Responsive Webpage',
        imagePath: '',
        imageDescription: '',
        description: 'This was my very first project which I developed while still in college. Using HTML and CSS I made a website showcasing my pizza making process. I developed the webpage with a mobile first approach and used media queries to adjust the CSS styles for tablet and desktop devices.',
        link: 'https://tonypham04.github.io/'
    },
    {
        id: 2,
        name: 'Music and Hardware',
        imagePath: '',
        imageDescription: '',
        description: 'This project was an application of concepts I learned from my Interfacing course at college. Using the Arduino programming language I wrote a sketch to play a tune in response to a button press. The sound comes from a piezo buzzer.',
        link: 'https://www.youtube.com/watch?v=Sh1UfIPNsb4'
    },
    {
        id: 3,
        name: 'Retro Game',
        imagePath: '',
        imageDescription: '',
        description: 'This project embodies two things I wanted to do after learning how to code: creating a game and learning a programming language on my own. I learned Python on my own by a mix of taking online courses on LinkedIn Learning and going through the tutorial in the Python documentation. I applied the concepts I learned with the Pygame module and created a retro style game. The objective of the game is to destroy as many asteroids as possible within the 2 minute time limit.',
        link: 'https://github.com/tonypham04/Robot-Hand-Asteroid-Smasher'
    }
];