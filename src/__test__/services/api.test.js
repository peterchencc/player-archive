import { apiPlayerData, apiPlayerProfile } from '../../services/api';

describe('Test Api', () => {
  test('should call apiPlayerData to get player', () => {
    expect.assertions(1);
    const id = 'fabio';
    return apiPlayerData(id)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        expect(data.id).toEqual(id);
      });
  });

  test('should call apiPlayerProfile to get player profile', () => {
    const id = 'fabio';
    const profileId = 'profile-111.json';
    return apiPlayerProfile(profileId)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        expect(data.id).toEqual(id);
      });
  });
});
