export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

interface Services {
  getRandomMovies: RequesterServiceModel;
  getMovieDetails: RequesterServiceModel;
}

export const services: Services = {
  getRandomMovies: {
    method: RequesterMethodEnum.GET,
    endpoint: '',
  },
  getMovieDetails: {
    method: RequesterMethodEnum.GET,
    endpoint: '',
  },
};
