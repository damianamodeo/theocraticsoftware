import { Select } from '@ui';

export const TheocraticSoftware = () => {
  const options = [
    { value: '1', label: 'Test' },
    { value: '2', label: 'Test 2' },
    { value: '3', label: 'Test 3' },
    { value: '4', label: 'Test 4' },
  ];

  const handleOnValueChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className="full centered p-4">
      <Select
        placeholder="Choose Tool"
        onValueChange={handleOnValueChange}
        options={options}
      ></Select>
    </div>
  );
};
