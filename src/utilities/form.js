import { useState, useReducer } from 'react';

export const e = (func) => (event) => {
  event.preventDefault();
  return func(event);
};

export const eVal = (func) => (event) => e((ev) => func(ev.target.value))(event);

export const useFormFields = (initialState) => {
  const [ state, setState ] = useState(initialState);
  const setField = (field, value) => setState({ ...state, [field]: value });
  const setterGetterPairs = Object.entries(state).map(([key, value]) =>
    [ key, { value, set: (newValue) => setField(key, newValue) } ]
  );

  const fields = Object.fromEntries(setterGetterPairs);
  const reset = () => setState(initialState);
  return [ fields, reset ];
};

export const useProgress = () => {
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'START':
        return ({
          isLoading: true,
          isSuccess: false,
          isError: false
        });
      case 'SUCCESS':
        return ({
          isLoading: false,
          isSuccess: true,
          isError: false
        });
      case 'ERROR':
        return ({
          isLoading: false,
          isSuccess: false,
          isError: true
        });
      default:
        return initialState;
    }
  };

  return useReducer(reducer, initialState);
};

export const useForm = (initialState) => {
  const [ fields, clear ] = useFormFields(initialState);
  const [ progress, setProgress ] = useProgress();

  const submit = async (submissionStrategy) => {
    if (!submissionStrategy) {
      throw new Error('submit requires a submission strategy as its argument');
    }
    const formData = Object.fromEntries(Object.entries(fields).map(([ key, { value } ]) => [ key, value ]));
    setProgress({ type: 'START' });
    let canProceed = false;
    try {
      canProceed = await submissionStrategy(formData);
      clear();
      setProgress({ type: 'SUCCESS' });
    } catch (e) {
      canProceed = false;
      setProgress({ type: 'ERROR' });
    } finally {
      return canProceed;
    }
  };

  return [ fields, progress, submit, clear ];
};
