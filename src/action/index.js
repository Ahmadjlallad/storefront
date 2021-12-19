export const newCart = (customer) => {
  return {
    type: "INITIALIZE",
    payload: customer,
  };
};
