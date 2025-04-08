import type { ReactNode } from 'react';

type HistoryItemProps = {
  year: string;
  children: ReactNode;
};

export const HistoryItem = (props: HistoryItemProps) => {
  return (
    <div className="p-4">
      <div className="text-gray-800">{props.year}</div>
      <div className="bg-white rounded-md w-full p-4">{props.children}</div>
    </div>
  );
};
