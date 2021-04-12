import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import PlayerProfile from '../components/PlayerProfile';
import { apiPlayerData } from '../services/api';

function App() {
  const [player, setPlayer] = useState({
    id: '',
    active: '',
    profileId: '',
  });

  const searchPlayer = async (id) => {
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
    <Layout>
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
              Search result for <span className="font-bold">'{player.id}'</span>
            </div>
          )}

          {hasPlayerId &&
            (isActivePlayer ? (
              <PlayerProfile profileId={player.profileId} />
            ) : (
              <div>The player is not available.</div>
            ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;
