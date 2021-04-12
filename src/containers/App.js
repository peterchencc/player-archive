import React, { useState } from 'react';
import logo from '../logo.png';
import SearchForm from '../components/SearchForm';
import PlayerProfile from '../components/PlayerProfile';
import { apiPlayerData } from '../services/api';

function App() {
  // const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState({
    id: '',
    active: '',
    profileId: '',
  });
  // const [activePlayerProfileId, setActivePlayerProfileId] = useState('');
  const searchPlayer = async (id) => {
    // setPlayerId(id);
    setPlayer((state) => ({
      ...state,
      id,
    }));

    try {
      const res = await apiPlayerData(id);
      const { active, 'profile-id': profileId } = res.data;
      setPlayer((state) => ({
        ...state,
        active,
        profileId,
      }));
    } catch (error) {
      setPlayer((state) => ({
        ...state,
        active: '',
        profileId: '',
      }));
    }
  };

  const hasPlayerId = player.id.length !== 0;
  const isActivePlayer = player.active === 'true' && player.profileId !== 0;

  return (
    <div className="min-h-screen flex flex-col bg-primary text-primary">
      <header className="bg-secondary text-secondary">
        <div className="border-b-2 border-gray">
          <nav className="container mx-auto flex items-center justify-between flex-wrap">
            <div className="text-2xl font-bold mx-4 sm:mx-8 py-4 flex">
              <span>OneFootball</span>
              <img className="ml-4" src={logo} alt="Logo" />
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto py-4 sm:py-16">
          <div className="flex flex-col mx-4 sm:mx-8 py-4">
            <h1 className="text-4xl font-bold mb-4">Player Archive</h1>
            <SearchForm searchPlayer={searchPlayer} />
          </div>
        </section>

        <section className="container mx-auto">
          <div className="mx-4 sm:mx-8 py-4 text-base sm:text-xl">
            {hasPlayerId && (
              <div className="border-b-2 border-gray py-4 mb-4 font-light">
                Search result for{' '}
                <span className="font-normal">'{player.id}'</span>
              </div>
            )}

            <div>
              {hasPlayerId ? (
                isActivePlayer ? (
                  <>
                    <PlayerProfile profileId={player.profileId} />
                  </>
                ) : (
                  <div className="">The player is not available</div>
                )
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p>Player Archive - Peter Chen</p>
      </footer>
    </div>
  );
}

export default App;
