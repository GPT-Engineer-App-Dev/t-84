import React from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AddButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white"
    >
      <PlusIcon className="mr-2 h-4 w-4" /> Add
    </Button>
  );
};

export default AddButton;