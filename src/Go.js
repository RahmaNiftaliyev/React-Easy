export const Go = {
  to: (paramsNavigate, path) => paramsNavigate(path),
  back: (paramsNavigate) => paramsNavigate(-1),
  forward: (paramsNavigate) => paramsNavigate(1),
};
