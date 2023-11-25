import toast from 'react-hot-toast';
import axios from 'axios';

export interface IndividualProps {
  callName: string;
  clubName: string;
  districtNo: string;
  email: string;
  fullName: string;
}

export interface HomepageProps {
  clubName: string;
  districtNo: string;
  email: string;
  accountType: string;
}

export interface GroupProps {
  callName1: string;
  callName2: string;
  callName3: string;
  callName4: string;
  callName5: string;
  clubName: string;
  districtNo: string;
  email: string;
  fullName1: string;
  fullName2: string;
  fullName3: string;
  fullName4: string;
  fullName5: string;
  medicalCondition1: string;
  medicalCondition2: string;
}

const baseUrl = 'https://ritemate-backend.onrender.com';

const addIndividual = async (payload: IndividualProps) => {
  try {
    localStorage.clear();
    const response = await axios.post(`${baseUrl}/saveindividual`, payload);
    localStorage.setItem('data', JSON.stringify(response.data));
  } catch (error) {
    toast.error('There was an error');
  }
};

const addGroup = async (payload: GroupProps) => {
  try {
    localStorage.clear();
    const response = await axios.post(`${baseUrl}/savegroup`, payload);
    localStorage.setItem('data', JSON.stringify(response.data));
  } catch (error) {
    toast.error('There was an error');
  }
};

const addHomepage = async (payload: HomepageProps) => {
  try {
    localStorage.clear();
    const response = await axios.post(`${baseUrl}/savehomepage`, payload);
    localStorage.setItem('homepageResponse', JSON.stringify(response.data));
  } catch (error) {
    toast.error('There was an error');
  }
};

export { addGroup, addHomepage, addIndividual };
