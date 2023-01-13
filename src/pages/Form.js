import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Name required"),
        email: yup.string().required('Email required'),
        age: yup.number().positive().integer().min(18).required('Age required'),
        password: yup.string().min(8).max(16).required('Password requiredd'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('Passwords must match')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('Submitted')
        console.log(data)
    }


    //register function confirms the key for the respective field

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register('email')} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register('age')} />
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register('password')} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm password" {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
            <button type="submit" placeholder="submit"  >Submit</button>
        </form>
    )
}