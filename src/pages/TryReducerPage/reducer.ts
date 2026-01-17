interface State {
    count: number;
    errorMessage: string | null;
}

export const initialState: State = {
  count: 0,
  errorMessage: null,
};

export const reducer = (state: State, action: string): State => {
    const increment = () => {
        return { ...state, count: state.count + 1 };
    };

    const decrement = () => {
        if (state.count <= 0) {
            return { ...state, errorMessage: "Count cannot be less than zero." };
        }

        return { ...state, count: state.count - 1 };
    };

    const reset = () => {
        return { ...state, count: 0 };
    }

  switch (action) {
    case "increment":
      return increment();
    case "decrement":
      return decrement();
    case "reset":
      return reset();
    default:
      throw new Error("Unexpected action");
  }
};
