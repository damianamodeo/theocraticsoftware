import {
  GetFirestoreDocumentData,
  PDFFormatTesting,
  SubscribeToFirestoreDocumentData,
  WriteTestFirestoreDocumentData,
} from '@tool';
import { Select } from '@ui';
import { useState } from 'react';

export const TheocraticSoftware = () => {
  const [tool, setTool] = useState(0);
  const tools = [
    <SubscribeToFirestoreDocumentData></SubscribeToFirestoreDocumentData>,
    <WriteTestFirestoreDocumentData></WriteTestFirestoreDocumentData>,
    <GetFirestoreDocumentData></GetFirestoreDocumentData>,
    <PDFFormatTesting></PDFFormatTesting>
  ];

  const options = [
    { label: 'Subscribe Firestore Document Data' },
    { label: 'Write Test Firestore Doc' },
    { label: 'Get Firestore Document Data' },
    { label: 'PDF Formatting' },
  ];

  const handleOnValueChange = (value: number) => {
    setTool(value);
  };

  return (
    <div className="full centered p-4 gap-2">
      <Select
        placeholder="Choose Tool"
        onValueChange={handleOnValueChange}
        options={options}
      ></Select>

      {tools[tool]}
    </div>
  );
};
