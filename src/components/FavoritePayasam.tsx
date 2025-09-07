import React from 'react';

const FavoritePayasam: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h1>Maaveli's Favorite Payasam</h1>
            <img src="/images/payasam.jpg" alt="Delicious Payasam" style={{ width: '300px', borderRadius: '8px' }} />
            <p>
                If there’s one thing that Maaveli loved more than his golden reign, it was a bowl of delicious payasam! 
                Legend has it that he once declared, "A kingdom without payasam is like a throne without a cushion!"
            </p>
            <h2>Recipe for the Perfect Payasam:</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>1 cup of rice (preferably the finest variety)</li>
                <li>4 cups of milk (the creamier, the better)</li>
                <li>1 cup of sugar (because who doesn’t love sweetness?)</li>
                <li>Cardamom and nuts for that royal touch!</li>
            </ul>
            <p>
                Mix it all together, let it simmer, and voilà! You have a dish fit for a king (or a king's favorite subject)!
            </p>
            <h3>Fun Fact:</h3>
            <p>
                Did you know? Maaveli once hosted a payasam festival where the winner was crowned the "Payasam King" 
                and received a lifetime supply of the sweet treat!
            </p>
        </div>
    );
};

export default FavoritePayasam;