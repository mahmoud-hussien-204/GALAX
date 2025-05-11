import Search from "@/components/Search";

import Button from "@/components/Button";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

import IconPlus from "@/components/icons/IconPlus";

const GiveCoinHistoryHead = () => {
  const {show} = useModal();

  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in give coin History' />
      </div>

      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconPlus />
        Give Default Coin
      </Button>
    </div>
  );
};

export default GiveCoinHistoryHead;
