import React, { useState } from 'react';
// import SearchForm from '../components/SearchForm';
import PlayerProfile from '../components/PlayerProfile';
import { apiPlayerData } from '../services/api';

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [searchErrorMsg, setSearchErrorMsg] = useState('');
  const [activePlayerProfileId, setActivePlayerProfileId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchErrorMsg('');
    if (!searchField) return; // validation

    setIsSearching(true);

    const id = searchField.trim().toLowerCase();
    setTimeout(() => {
      apiPlayerData(id)
        .then((res) => {
          const { active, 'profile-id': profileId } = res.data;
          if (active === 'true') {
            setActivePlayerProfileId(profileId);
          } else {
            setSearchErrorMsg('The player is not available');
          }
        })
        .catch((err) => {
          setSearchErrorMsg('The player is not available');
        })
        .then(() => {
          setIsSearching(false);
        });
    }, 1500);
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
                disabled={isSearching}
                autoFocus
              />
            </label>
            <span>{searchErrorMsg}</span>
          </div>
          <button type="submit" value="Submit" disabled={isSearching}>
            {isSearching ? 'Searching' : 'GO'}
          </button>
        </form>
      </div>
      <div className="mx-4">
        {activePlayerProfileId && (
          <PlayerProfile profileId={activePlayerProfileId} />
        )}
      </div>
    </div>
  );
}

export default App;
