export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

interface Services {
  getTopMovies: RequesterServiceModel;
  getMovieDetails: RequesterServiceModel;
  getPopularMovies: RequesterServiceModel;
}

export const services: Services = {
  getTopMovies: {
    method: RequesterMethodEnum.GET,
    endpoint: 'top_rated?api_key=8f734c78d43475af7e46512d40fe4d20',
  },
  getPopularMovies: {
    method: RequesterMethodEnum.GET,
    endpoint: 'popular?api_key=8f734c78d43475af7e46512d40fe4d20',
  },
  getMovieDetails: {
    method: RequesterMethodEnum.GET,
    endpoint: '{{id}}?api_key=8f734c78d43475af7e46512d40fe4d20',
  },
};
