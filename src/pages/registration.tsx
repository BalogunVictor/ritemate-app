import React, { useEffect, useState } from 'react';
import GroupForm from '@ui/GroupForm';
import IndividualForm from '@ui/IndividualForm';
import Nav from '@ui/Nav';
import Tag from '@ui/Tag';
import { Layout } from 'src/layouts';

const Registration = () => {
  const [clicked, setClicked] = useState(false);
  const [currentForm, setCurrentForm] = useState<string>('');

  useEffect(() => {
    const storedData = localStorage.getItem('homepageResponse');
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.accountType === '1 Individual - N25,000.00') {
        setCurrentForm('individual');
      } else {
        setCurrentForm('group');
      }
    }
  }, []);

  const handleClicked = () => {
    setClicked((previous) => !previous);
  };

  function CurrentForm(props: string) {
    switch (props) {
      case 'individual':
        return <IndividualForm />;
      case 'group':
        return <GroupForm />;
      default:
        return <IndividualForm />;
    }
  }
  return (
    <Layout>
      <Nav invert />
      <div className="container mx-[10%]">
        <h1 className="py-8 text-2xl font-medium">Registration</h1>
        <div>
          <li>1 Individual - N25,000.00 </li>
          <li>Group of 5 - 10% discount - N113,000.00</li>
          <li>Group of 10 - 20% discount - N200,000.00</li>
        </div>
        <h1 className="py-4 text-3xl">How will you like to Register?</h1>
        <div className="flex gap-4 py-6">
          <Tag
            onClick={() => {
              handleClicked();
              setCurrentForm('group');
            }}
            pointer={currentForm === 'group'}
            variants={currentForm === 'group' ? 'primary' : 'secondary'}
          >
            Group Registration
          </Tag>
          <Tag
            onClick={() => {
              handleClicked();
              setCurrentForm('individual');
            }}
            pointer={currentForm === 'individual'}
            variants={currentForm === 'individual' ? 'primary' : 'secondary'}
          >
            Individual Registration
          </Tag>
        </div>
      </div>
      {CurrentForm(currentForm)}
    </Layout>
  );
};

export default Registration;
