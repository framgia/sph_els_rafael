import http from '../../http-common'
import { Middleware } from 'redux';
import { AxiosError } from 'axios';



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
        const errorAx = err as AxiosError;
        dispatch({ type: `${type} error`, payload: errorAx.response });
      });
  }

  return next(action);
};

export default [post];

