import React, { useState, useEffect } from 'react';
// import SearchForm from '../components/SearchForm';
import PlayerProfile from '../components/PlayerProfile';
import { apiPlayerData, apiPlayerProfile } from '../services/api';

function App() {
  const [searchField, setSearchField] = useState('');
  const [searchErrorMsg, setSearchErrorMsg] = useState('');
  const [playerProfile, setPlayerProfile] = useState({
    isLoading: false,
    profile: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchErrorMsg('');

    const id = searchField.trim().toLowerCase();
    apiPlayerData(id)
      .then((res) => {
        const { active, 'profile-id': profileId } = res.data;

        if (active === 'true') {
          setPlayerProfile((state) => ({
            ...state,
            isLoading: true,
          }));
          setTimeout(() => {
            fetchPlayerProfile(profileId);
          }, 1500);
        } else {
          setSearchErrorMsg('The player is not available');
        }
      })
      .catch((err) => {
        setSearchErrorMsg('The player is not available');
      });
  };

  const fetchPlayerProfile = async (profileId) => {
    try {
      const res = await apiPlayerProfile(profileId);
      setPlayerProfile((state) => ({
        ...state,
        isLoading: false,
        profile: res.data,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="text-center bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="p-4 text-4xl font-bold">Player Archive</h1>
      <div className="my-4">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>
              Enter player's id:
              <input
                type="input"
                placeholder="some player id..."
                onChange={(e) => setSearchField(e.target.value)}
              />
            </label>
            <span>{searchErrorMsg}</span>
          </div>
          <button type="submit" value="Submit">
            GO
          </button>
        </form>
      </div>
      <div className="mx-4">
        <PlayerProfile
          // isLoading={playerProfile.isLoading}
          player={playerProfile.profile}
        />
      </div>
    </div>
  );
}

export default App;
