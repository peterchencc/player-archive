import React, { useState } from 'react';
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
    <>
      <header>
        <h1 className="p-4 text-4xl font-bold">Player Archive</h1>
      </header>
      <main className="text-center bg-gradient-to-r from-green-400 to-blue-500">
        <div className="container">
          <SearchForm searchPlayer={searchPlayer} />
        </div>

        <section>
          <div>{hasPlayerId && <div>Searching for "{player.id}"</div>}</div>

          <div className="mx-4">
            {hasPlayerId ? (
              isActivePlayer ? (
                <PlayerProfile profileId={player.profileId} />
              ) : (
                <div>the player is not available</div>
              )
            ) : null}
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
