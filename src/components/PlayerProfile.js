import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const PlayerProfile = ({ player }) => {
  if (Object.keys(player).length === 0) return null;

  const { id, profile, stats } = player;

  return (
    <div className="">
      <div>{id}</div>
      <div>{profile.age}</div>
      <div>{profile.role}</div>
      <div>{stats.goals}</div>
    </div>
  );
};

// PlayerProfile.propTypes = {

// }

export default PlayerProfile;
