import React from 'react';
import HeroicDeeds from '../components/HeroicDeeds';
import GoldenReign from '../components/GoldenReign';
import FavoritePayasam from '../components/FavoritePayasam';

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Maaveli's Portfolio!</h1>
                <p>Join us as we explore the legendary reign of Maaveli, his heroic deeds, and his favorite payasam!</p>
            </header>
            <main>
                <section>
                    <h2>Heroic Deeds</h2>
                    <HeroicDeeds />
                </section>
                <section>
                    <h2>Golden Reign</h2>
                    <GoldenReign />
                </section>
                <section>
                    <h2>Favorite Payasam</h2>
                    <FavoritePayasam />
                </section>
            </main>
            <footer>
                <p>Made with love and a sprinkle of humor!</p>
            </footer>
        </div>
    );
};

export default HomePage;