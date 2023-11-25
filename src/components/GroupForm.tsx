import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Motion from 'src/layouts/motion';
import * as Yup from 'yup';

import { addGroup, GroupProps } from './Utils/HandleApi';
import { Button } from './buttons';
import { Input } from './Input';

const options = [
  { label: 'none', value: 'none' },
  { label: 'Environmental allergies', value: 'Environmental allergies' },
];

const validationSchema = Yup.object().shape({
  callName1: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  callName2: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  callName3: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  callName4: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  callName5: Yup.string()
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
  fullName1: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  fullName2: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  fullName3: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  fullName4: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  fullName5: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const GroupForm = () => {
  const router = useRouter();
  const methods = useForm<GroupProps>({
    resolver: yupResolver(validationSchema),
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<GroupProps> = async (value) => {
    try {
      setValue(
        'medicalCondition1',
        selectedOption1 ? selectedOption1.value : null
      );
      setValue(
        'medicalCondition2',
        selectedOption2 ? selectedOption2.value : null
      );
      await addGroup(value);
      console.log('success');
      toast.success('successfully');
      reset();
      router.push('/checkout');
    } catch (error) {
      console.log(error);
      toast.error('There was an error');
    }
  };
  const [selectedOption1, setSelectedOption1] = useState<any>(null);
  const [selectedOption2, setSelectedOption2] = useState<any>(null);

  return (
    <Motion>
      <FormProvider {...methods}>
        <form className="h-[1000px]" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="grid w-[800px] grid-cols-3 gap-8 py-10">
              <Input
                label="Full name of participant #1"
                {...register('fullName1')}
                disabled={isSubmitting}
                error={errors.fullName1?.message}
              />
              <Input
                label="Call name of participant #1"
                {...register('callName1')}
                disabled={isSubmitting}
                error={errors.callName1?.message}
              />
              <div className="w-full">
                <label className="text-sm font-medium">
                  Medical Conditions
                </label>
                <Select
                  {...register('medicalCondition1')}
                  className="rounded-md border-2 border-black/40 transition-all "
                  defaultValue={selectedOption1}
                  onChange={setSelectedOption1}
                  options={options}
                />
              </div>
              <Input
                label="Call name of participant #2"
                {...register('callName2')}
                disabled={isSubmitting}
                error={errors.callName2?.message}
              />
              <Input
                label="Full name of participant #2"
                {...register('fullName2')}
                disabled={isSubmitting}
                error={errors.fullName2?.message}
              />
              <div className="w-full">
                <label className="text-sm font-medium">
                  Medical Conditions
                </label>
                <Select
                  {...register('medicalCondition2')}
                  className="rounded-md border-2 border-black/40 transition-all "
                  defaultValue={selectedOption2}
                  onChange={setSelectedOption2}
                  options={options}
                />
              </div>
            </div>
            <div className="grid w-[800px] grid-cols-2 gap-8 py-10">
              <Input
                label="Full name of participant #3"
                {...register('fullName3')}
                disabled={isSubmitting}
                error={errors.fullName3?.message}
              />
              <Input
                label="Call name of participant #3"
                {...register('callName3')}
                disabled={isSubmitting}
                error={errors.callName3?.message}
              />
              <Input
                label="Full name of participant #4"
                {...register('fullName4')}
                disabled={isSubmitting}
                error={errors.fullName4?.message}
              />
              <Input
                label="Call name of participant #4"
                {...register('callName4')}
                disabled={isSubmitting}
                error={errors.callName4?.message}
              />
              <Input
                label="Full name of participant #5"
                {...register('fullName5')}
                disabled={isSubmitting}
                error={errors.fullName5?.message}
              />
              <Input
                label="Call name of participant #5"
                {...register('callName5')}
                disabled={isSubmitting}
                error={errors.callName5?.message}
              />
            </div>
            <div className="w-[273px]">
              <Button disabled={isSubmitting} type="submit" variants="primary">
                Pay N133,000.00
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Motion>
  );
};

export default GroupForm;
