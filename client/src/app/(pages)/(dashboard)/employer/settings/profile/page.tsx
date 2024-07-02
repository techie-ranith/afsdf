"use client"
import React, { useState } from 'react';

interface CompanyProfileFormProps {
  onSubmit: (formData: CompanyFormData) => void;
}

interface CompanyFormData {
  companyName: string;
  logo: string;
  coverImage: string;
  tagline: string;
  websiteURL: string;
  industry: string;
  companySize: string;
  founded: number;
  type: string;
  specialties: string[];
  aboutUs: string;
  location: string;
  jobOpenings: {
    title: string;
    description: string;
    requirements: string;
    location: string;
  }[];
  companyUpdates: {
    title: string;
    content: string;
  }[];
  leadershipTeam: {
    name: string;
    title: string;
    bio: string;
    profileImage: string;
  }[];
  contactInformation: {
    email: string;
    phoneNumber: string;
  };
  socialMediaLinks: {
    platform: string;
    url: string;
  }[];
}

const CompanyProfileForm: React.FC<CompanyProfileFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CompanyFormData>({
    companyName: '',
    logo: '',
    coverImage: '',
    tagline: '',
    websiteURL: '',
    industry: '',
    companySize: '',
    founded: 0,
    type: '',
    specialties: [],
    aboutUs: '',
    location: '',
    jobOpenings: [],
    companyUpdates: [],
    leadershipTeam: [],
    contactInformation: {
      email: '',
      phoneNumber: '',
    },
    socialMediaLinks: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Company Name:
        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyProfileForm;
