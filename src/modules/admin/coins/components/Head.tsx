import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import Search from "@/components/Search";

import useMutation from "@/hooks/useMutation";

import {apiAdjustCoin} from "../../users/services";

const Head = () => {
  const {mutate, isPending} = useMutation({
    mutationFn: apiAdjustCoin,
    mutationKey: ["admin-adjust-coin-list-with-coin-payment"],
  });
  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in coins' />
      </div>
      <Button type='button' onClick={() => mutate(null)} isLoading={isPending}>
        <IconPlus />
        Adjust coin with coinPayment
      </Button>
    </div>
  );
};

export default Head;
