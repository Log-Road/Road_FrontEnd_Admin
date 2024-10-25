import { useState } from "react";

export function useFrom<T>(initialState: T) {
  
  const [form, setForm] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return { form, setForm, handleChange };
}