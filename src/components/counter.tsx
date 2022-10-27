import { useSignal } from '@preact/signals-react';
import { twMerge as tw } from 'tailwind-merge';
import { MdOutlineRemove, MdOutlineAdd } from 'react-icons/md';

export interface CounterProps {
  className: string;
  count: number;
}

export default function Counter(props: CounterProps) {
  const count = useSignal(props.count);

  const buttonClassName = tw(
    'flex flex-row justify-content items-center',
    'hover:backdrop-invert hover:backdrop-opacity-20'
  );

  const increase = () => {
    count.value += 1;
  };

  const decrease = () => {
    count.value -= 1;
  };

  return (
    <div
      className={tw(
        'counter-component',
        'flex flex-row h-[40px] items-center',
        'text-bold text-red-500 text-base',
        props.className
      )}
    >
      <button className={buttonClassName} onClick={decrease}>
        <MdOutlineRemove />
      </button>
      <div className={tw('w-36 flex flex-row justify-center items-center')}>
        {count.value}
      </div>
      <button className={buttonClassName} onClick={increase}>
        <MdOutlineAdd />
      </button>
    </div>
  );
}
