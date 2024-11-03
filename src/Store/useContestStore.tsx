import { create } from 'zustand';
import { FormState } from '@/Models/Manage';

interface FormStore {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: (newForm: Partial<FormState>) => void;
  resetForm: () => void
}

const initialFormState: FormState = {
  id: '',
  name: '',
  status: "ONGOING",
  startDate: '',
  endDate: '',
  purpose: '',
  audience: '',
  place: '',
  awardName: '',
  awards: [{ name: '', count: 0 }]
}

const useContestStore = create<FormStore>((set) => ({
  form: initialFormState,

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

  resetForm: () => {
    set({ form: initialFormState })
  }
}));

export default useContestStore;
