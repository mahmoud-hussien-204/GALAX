import ModalFooter from "@/components/ModalFooter";

import useGiveCoinForm from "../hooks/useGiveCoinForm";

import ModalHeader from "@/components/ModalHeader";

import ModalBody from "@/components/ModalBody";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import useQuery from "@/hooks/useQuery";

import {apiGetUsers} from "../services";

import {useMemo} from "react";

import AppHelper from "@/helpers/appHelper";

const GiveCoinForm = () => {
  const {form, handleSubmit, isPending} = useGiveCoinForm();

  const {data, isLoading} = useQuery({
    queryKey: ["get-give-default-coin-to-users-list"],
    queryFn: apiGetUsers,
  });

  const usersListData = useMemo(() => data?.users || [], [data]);

  return (
    <form
      noValidate
      name='give-default-coin-form'
      id='give-default-coin-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Give Default Coin to User' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='give-default-coin-form-amount'>Coin Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter Coin Amount'
            id='amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
        </div>

        {isLoading ? (
          <div className='flex justify-center'>
            <span className='loading loading-spinner w-2rem'></span>
          </div>
        ) : (
          <div className='mb-1.25rem grid max-h-[20rem] grid-cols-4 gap-1.25rem overflow-y-auto'>
            {usersListData.map((item) => (
              <div key={item.id}>
                <label className='label cursor-pointer justify-start gap-0.5rem'>
                  <input
                    type='checkbox'
                    value={item.id}
                    className='checkbox-primary checkbox'
                    {...form.register("user_id")}
                  />
                  <span className='label-text'>
                    {AppHelper.sliceContent(item.first_name + " " + item.last_name, 15)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        )}
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Give Default Coin' />
    </form>
  );
};

export default GiveCoinForm;
