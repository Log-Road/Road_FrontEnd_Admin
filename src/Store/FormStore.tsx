import { create } from 'zustand';

interface FormState {
  contestName: string;
  target: string;
  locate: string;
  awardName: string;
  purpose: string;
}

interface FormStore {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: (newForm: Partial<FormState>) => void;
}

const useFormStore = create<FormStore>((set) => ({
  form: {
    contestName: '',
    target: '',
    locate: '',
    awardName: '',
    purpose: '',
  },
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      form: {
        ...state.form,
        [name]: value,
      },
    }));
  },
  setForm: (newForm) =>
    set((state) => ({
      form: {
        ...state.form,
        ...newForm,
      },
    })),
}));

export default useFormStore;
