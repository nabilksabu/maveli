import React from 'react';

const HeroicDeeds: React.FC = () => {
    const deeds = [
        {
            title: "The Great Banana Heist",
            description: "Maaveli once single-handedly stopped a banana theft by convincing the thieves that bananas were overrated. They left empty-handed and confused!",
            image: "/images/banana-heist.jpg"
        },
        {
            title: "The River Rescue",
            description: "When a village was flooded, Maaveli used his magical powers to part the waters, creating a dry path for villagers to escape. He then threw a party to celebrate!",
            image: "/images/river-rescue.jpg"
        },
        {
            title: "The Festival of Lights",
            description: "Maaveli organized the first-ever festival of lights, where he accidentally set off fireworks that turned into a giant payasam bowl in the sky. It was a sight to behold!",
            image: "/images/festival-lights.jpg"
        }
    ];

    return (
        <div className="heroic-deeds">
            <h2>Maaveli's Heroic Deeds</h2>
            <ul>
                {deeds.map((deed, index) => (
                    <li key={index} className="deed-item">
                        <h3>{deed.title}</h3>
                        <img src={deed.image} alt={deed.title} />
                        <p>{deed.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroicDeeds;