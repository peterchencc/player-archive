import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';
import { apiPlayerProfile } from '../services/api';

const PlayerProfile = ({ profileId }) => {
  const [playerId, setPlayerId] = useState('');
  const [profile, setProfile] = useState({});
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
    <LoadingIndicator />
  ) : (
    <div className="py-4 mb-16 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
      <section className="sm:col-span-2 md:col-span-1 md:row-span-3 self-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={profile.picture}
            alt="Player"
            className="rounded-full h-36 w-36 mb-2"
          />
          <div className="text-2xl font-bold">{playerId}</div>
          <div className="text-secondary">{profile.role}</div>
        </div>
      </section>

      <section>
        <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
          Info
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">ID</div>
          <div className="text-xl font-bold">{playerId}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Age</div>
          <div className="font-bold">{profile.age}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Team</div>
          <div className="font-bold">{profile.team}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Role</div>
          <div className="font-bold">{profile.role}</div>
        </div>
      </section>
      <section>
        <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
          Top stats
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Goals</div>
          <div className="font-bold">{stats.goals}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Assists</div>
          <div className="font-bold">{stats.assists}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Pass Accuracy</div>
          <div className="font-bold">{stats.passingAccuracy + '%'}</div>
        </div>
      </section>
      <section>
        <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
          Attack
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Goals</div>
          <div className="font-bold">{stats.goals}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Minutes / goal</div>
          <div className="font-bold">{stats.minutesPerGoal}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">leftFootGoals</div>
          <div className="font-bold">{stats.leftFootGoals}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">rightFootGoals</div>
          <div className="font-bold">{stats.rightFootGoals}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">headedGoals</div>
          <div className="font-bold">{stats.headedGoals}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">shotsOnTarget</div>
          <div className="font-bold">{stats.shotsOnTarget}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">Total Shots</div>
          <div className="font-bold">{stats.totalShots}</div>
        </div>
      </section>
      <section>
        <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
          Defence
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">totalTackles</div>
          <div className="font-bold">{stats.totalTackles}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">tacklesWon</div>
          <div className="font-bold">{stats.tacklesWon}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">duelsWon</div>
          <div className="font-bold">{stats.duelsWon}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">aerialDuelsWon</div>
          <div className="font-bold">{stats.aerialDuelsWon}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">clearances</div>
          <div className="font-bold">{stats.clearances}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">blocks</div>
          <div className="font-bold">{stats.blocks}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">interceptions</div>
          <div className="font-bold">{stats.interceptions}</div>
        </div>
      </section>
      <section>
        <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
          Discipline
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">yellowCards</div>
          <div className="font-bold">{stats.yellowCards}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">redCards</div>
          <div className="font-bold">{stats.redCards}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-secondary">foulsConceded</div>
          <div className="font-bold">{stats.foulsConceded}</div>
        </div>
      </section>
    </div>
  );
};

PlayerProfile.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default PlayerProfile;
