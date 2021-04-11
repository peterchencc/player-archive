import React, { useState, useEffect } from 'react';
import { apiPlayerProfile } from '../services/api';
// import PropTypes from 'prop-types'

const PlayerProfile = ({ profileId }) => {
  // const { 'profile-id': profileId } = player;
  const [playerId, setPlayerId] = useState('');
  const [profile, setProfile] = useState({});
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(`useEffect profileId`, profileId);
    setIsLoading(true);
    setTimeout(() => {
      apiPlayerProfile(profileId)
        .then((res) => {
          const { id, profile, stats } = res.data;
          setPlayerId(id);
          setProfile(profile);
          setStats(stats);
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          setIsLoading(false);
        });
    }, 1500);
  }, [profileId]);

  return isLoading ? (
    <p>Loading Player Details...</p>
  ) : (
    <div className="">
      <div>Id: {playerId} </div>
      <div>{profile.age}</div>
      <div>{profile.role}</div>
      <div>{stats.goals}</div>
    </div>
  );
};

// PlayerProfile.propTypes = {

// }

export default PlayerProfile;
