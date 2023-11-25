import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Motion from 'src/layouts/motion';
import * as Yup from 'yup';

import { addIndividual, IndividualProps } from './Utils/HandleApi';
import { Button } from './buttons';
import { Input } from './Input';

const validationSchema = Yup.object().shape({
  callName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  clubName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  districtNo: Yup.string()
    .min(3, 'Too Short!')
    .max(4, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const IndividualForm = () => {
  const router = useRouter();
  const methods = useForm<IndividualProps>({
    resolver: yupResolver(validationSchema),
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
  } = methods;

  const onSubmit: SubmitHandler<IndividualProps> = async (value) => {
    try {
      await addIndividual(value);
      console.log('success');
      toast.success('successfully');
      reset();
      router.push('/checkout');
    } catch (error) {
      console.log(error);
      toast.error('There was an error');
    }
  };

  return (
    <Motion>
      <FormProvider {...methods}>
        <form className="h-[700px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[300px] bg-[#F0F0F0]">
            <div className="container mx-[10%]">
              <div className="grid w-[800px] grid-cols-2 gap-8 py-10">
                <Input
                  label="Your District No. e.g 9110"
                  {...register('districtNo')}
                  disabled={isSubmitting}
                  error={errors.districtNo?.message}
                />
                <Input
                  label="Name of your club? e.g RC Omole-Golden"
                  {...register('clubName')}
                  disabled={isSubmitting}
                  error={errors.clubName?.message}
                />
                <Input
                  disabled={isSubmitting}
                  label="Your email address"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
            </div>
          </div>
          <div className="container mx-[10%]">
            <div className="grid w-[800px] grid-cols-2 gap-8 py-10">
              <Input
                disabled={isSubmitting}
                label="Full name of participant"
                {...register('fullName')}
                error={errors.fullName?.message}
              />
              <Input
                disabled={isSubmitting}
                label="Call name of participant"
                {...register('callName')}
                error={errors.callName?.message}
              />
            </div>
            <div className="w-[273px]">
              <Button disabled={isSubmitting} type="submit" variants="primary">
                Pay N25,000.00
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Motion>
  );
};

export default IndividualForm;
