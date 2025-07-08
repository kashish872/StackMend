'use client'

import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
import { loginUser } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
// import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { user, token } = await dispatch(
        loginUser({ email: data.email, password: data.password })
      ).unwrap();

      if (user && token) {
        // toast.success('Logged in successfully!');
        router.push('/dashboard');
        
      }
    } catch (error: any) {
      if (error?.status === 401) {
        toast.error('Invalid email or password');
      } else {
        toast.error(error.message || 'Login failed. Please try again.');
      }
    }
  };

  const handleToast = () =>{
    toast("Logged in successfully", {
          // description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Ok",
            onClick: () => console.log("Ok"),
          },
        })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email address"
        type="email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        required
      />
      <Button fullWidth type="submit">
        Sign in
      </Button>
      <Button onClick={()=>toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })}>
        Show Toast
      </Button>
    </form>
  );
}