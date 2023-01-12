import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted')
        console.log(data)
    }


    //register function confirms the key for the respective field

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register('fullName')} />
            <input type="text" placeholder="Email..." {...register('email')} />
            <input type="number" placeholder="Age..." {...register('age')} />
            <input type="password" placeholder="Password..." {...register('password')} />
            <input type="password" placeholder="Confirm password" {...register('confirmPassword')} />
            <button type="submit" placeholder="submit"  >Submit</button>
        </form>
    )
}