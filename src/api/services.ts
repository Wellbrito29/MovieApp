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
}

export const services: Services = {
  getTopMovies: {
    method: RequesterMethodEnum.GET,
    endpoint: 'top_rated?api_key=8f734c78d43475af7e46512d40fe4d20',
  },
  getMovieDetails: {
    method: RequesterMethodEnum.GET,
    endpoint: '{{movie_id}}?',
  },
};
