export const PAGINATIONCONST = {
  LIMIT: 10,
  CURRENTPAGE: 1,
  TOTAL: 0,
};

export const resizeParagph = (par) => {
  const getPar = par.slice(0, 100);
  return getPar + "...";
};

export const resizeParagph1 = (par) => {
  const getPar = par.slice(0, 2000);
  return getPar;
};
