const INITIAL_STATE = [
  { id: 1, text: "fazer o cafe" },
  { id: 2, text: "fazer o cafe com leite" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
