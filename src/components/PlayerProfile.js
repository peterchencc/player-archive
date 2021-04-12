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

      <StatsCard title="Info">
        <StatsItem label="ID" value={playerId} />
        <StatsItem label="Age" value={profile.age} />
        <StatsItem label="Team" value={profile.team} />
        <StatsItem label="Role" value={profile.role} />
      </StatsCard>
      <StatsCard title="Top stats">
        <StatsItem label="Goals" value={stats.goals} />
        <StatsItem label="Assists" value={stats.assists} />
        <StatsItem label="Pass Accuracy" value={stats.passingAccuracy + '%'} />
      </StatsCard>
      <StatsCard title="Attack">
        <StatsItem label="Goals" value={stats.assists} />
        <StatsItem label="Minutes / goal" value={stats.minutesPerGoal} />
        <StatsItem label="LeftFootGoals" value={stats.leftFootGoals} />
        <StatsItem label="RightFootGoals" value={stats.rightFootGoals} />
        <StatsItem label="HeadedGoals" value={stats.headedGoals} />
        <StatsItem label="ShotsOnTarget" value={stats.shotsOnTarget} />
        <StatsItem label="Total Shots" value={stats.totalShots} />
      </StatsCard>
      <StatsCard title="Defence">
        <StatsItem label="TotalTackles" value={stats.totalTackles} />
        <StatsItem label="TacklesWon" value={stats.tacklesWon} />
        <StatsItem label="duelsWon" value={stats.duelsWon} />
        <StatsItem label="clearances" value={stats.clearances} />
        <StatsItem label="blocks" value={stats.blocks} />
        <StatsItem label="interceptions" value={stats.interceptions} />
      </StatsCard>
      <StatsCard title="Discipline">
        <StatsItem label="yellowCards" value={stats.yellowCards} />
        <StatsItem label="redCards" value={stats.redCards} />
        <StatsItem label="foulsConceded" value={stats.foulsConceded} />
      </StatsCard>
    </div>
  );
};

PlayerProfile.propTypes = {
  profileId: PropTypes.string.isRequired,
};

const StatsItem = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <div className="text-secondary">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const StatsCard = ({ title, children }) => {
  return (
    <section>
      <div className="uppercase font-bold mb-2 py-2 border-gray border-b-2">
        {title}
      </div>
      {children}
    </section>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default PlayerProfile;
