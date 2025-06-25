'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function EditProfile() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('newUserName', name);
    formData.append('newEmail', email);
    if (profilePhoto) formData.append('profilePicture', profilePhoto);
    formData.append('newPassword', password);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/update/editProfile`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include',
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(data.message);
        setErrorMsg('');
        setTimeout(() => router.push('/borrowedBooks'), 1500);
      } else {
        setErrorMsg(data.message);
        setSuccessMsg('');
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      setErrorMsg('Something went wrong, please try again.');
      setSuccessMsg('');
    }
  };

  return (
    <section className="w-full h-full pb-40">
      <div className="bg-primary h-28 flex items-center justify-center px-4 xl:px-16">
        <Header />
      </div>

      <div className="flex items-center justify-center pt-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-md"
          encType="multipart/form-data"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-zinc-800 dark:text-white">
            Edit Profile
          </h2>

          {successMsg && <p className="text-green-600 text-center mb-4">{successMsg}</p>}
          {errorMsg && <p className="text-red-600 text-center mb-4">{errorMsg}</p>}

          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-gray-300 mb-2">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-md border dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="New Username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md border dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-gray-300 mb-2">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setProfilePhoto(e.target.files[0]);
                }
              }}
            />
          </div>

          <div className="mb-6">
            <label className="block text-zinc-700 dark:text-gray-300 mb-2">New Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md border dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
