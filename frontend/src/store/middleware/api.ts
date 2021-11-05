import http from '../../http-common'
import { Middleware } from 'redux';



export const post: Middleware = ({ dispatch }) => next => (action) => {
  const { type, payload } = action;

  if (payload && payload.meta && payload.meta.api) {
    const { meta } = payload;

    http(meta.api)
      .then(({ data }) => {
        if (!data.errors) {
          dispatch({ type: `${type} success`, payload: data });
        } else if (data.errors) {
          dispatch({ type: `${type} error`, payload: data });
        }
      })
      .catch((err) => {
        dispatch({ type: `${type} error`, payload: err });
      });
  }

  return next(action);
};

export default [post];

