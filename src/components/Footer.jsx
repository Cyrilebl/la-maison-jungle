import { useForm } from "react-hook-form";

export const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("Merci de votre confiance"), reset();
  };

  return (
    <footer className="border-t-2 border-neutral-900 p-8 text-center">
      <p className="mb-3 font-semibold">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </p>
      <div className="mb-2 font-semibold">Laissez-nous votre mail :</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-3"
      >
        <input
          {...register("email", {
            required: {
              value: true,
              message: "L'email est requis",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Cela correspond pas au format d'un email",
            },
          })}
          type="text"
          placeholder="example@gmail.com"
          className="rounded border border-neutral-300 bg-neutral-100 py-1 pl-2 text-neutral-900 placeholder:text-neutral-500"
        />
        <button type="submit">Entrer</button>
      </form>
      {errors.email && (
        <p className="mt-1 text-red-500">{errors.email.message}</p>
      )}
    </footer>
  );
};
