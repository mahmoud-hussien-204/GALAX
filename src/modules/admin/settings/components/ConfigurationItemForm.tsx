import Button from "@/components/Button";

import {IConfigurationsItem} from "../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiRunConfigurationCommand} from "../services";

interface IProps {
  data: IConfigurationsItem;
}

const ConfigurationItemForm = ({data}: IProps) => {
  const {mutate, isPending} = useMutation({
    mutationFn: apiRunConfigurationCommand,
  });

  const onClick = () => {
    mutate(data.id);
  };

  return (
    <div className='rounded-btn border border-transparent bg-base-100 p-1rem transition-all hover:border-primary'>
      <h4 className='mb-0.25rem font-semibold text-white'>{data.title}</h4>
      <p className='mb-1rem text-14'>{data.description}</p>
      <Button
        type='button'
        isLoading={isPending}
        onClick={onClick}
        className='btn-link h-auto !min-h-0 !bg-transparent p-0 text-primary'
      >
        {data.linkTitle}
      </Button>
    </div>
  );
};

export default ConfigurationItemForm;
