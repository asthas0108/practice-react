// components/MultiStepForm.jsx
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Two-step schema
const schema = [
  yup.object().shape({
    name: yup.string().required("Name is required"),
  }),
  yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema[step]),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    if (step < schema.length - 1) setStep(step + 1);
    else alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 border rounded">
      {step === 0 && (
        <div>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input {...field} className="border p-2 w-full" />}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
      )}

      {step === 1 && (
        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} className="border p-2 w-full" />}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
      )}

      <div className="flex gap-2">
        {step > 0 && (
          <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 bg-gray-300 rounded">
            Back
          </button>
        )}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {step === schema.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default MultiStepForm;
