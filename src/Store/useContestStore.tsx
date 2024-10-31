import { create } from 'zustand';
import { FormState } from '@/Models/Manage';

interface FormStore {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: (newForm: Partial<FormState>) => void;
}

const useContestStore = create<FormStore>((set) => ({
  form: {
    id: '',
    name: '',
    status: "ONGOING",
    startDate: '',
    endDate: '',
    purpose: '',
    audience: '',
    place: '',
    awardName: '',
    awards: []
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

export default useContestStore;
