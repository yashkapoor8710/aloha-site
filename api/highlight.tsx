import request from '../utils/request';

export const getHighlights = async () => {
  return request
    .get('/v1/highlights')
    .then(response => response)
    .catch(ex => {
      return ex.response;
    });
};

export const getCategories = async () => {
  return request
    .get('/v1/categories')
    .then(response => response)
    .catch(ex => {
      return ex.response;
    });
};

export const getActivities = async (activityType: string) => {
  return request
    .get(`v1/activities/${activityType}`)
    .then(response => response)
    .catch(ex => {
      return ex.response;
    });
};
