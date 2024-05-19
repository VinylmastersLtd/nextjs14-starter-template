"use client";

import PageWrapper from '@/components/Container/PageWrapper'
import { Button } from '@/components/ui/button'
import CreateSearchForm from '@/components/ui/CreateSearchForm';
import GenerateSerialNumbers from '@/components/ui/GenerateSerialNumbers';
import SearchForm from '@/components/ui/SearchForm';
import ManagePage from '@/components/ui/ManagePage';
import { Metadata } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  keywords: [''],
  title: 'Marketing page',
  openGraph: {
    description: 'Put description of the page.',
    images: ['']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing page',
    description: 'Put jjjj of the page.',
    siteId: "",
    creator: "@rasmickyy",
    creatorId: "",
    images: [''],
  },
}

export default function MarketingPage() {
  const [serialNumbers, setSerialNumbers] = useState([]);
  const [formId] = useState(Date.now().toString());

  const addSerialNumber = (serialNumber) => {
    setSerialNumbers([...serialNumbers, serialNumber]);
  };

  return (
    <PageWrapper>
      <div className='flex flex-col min-h-screen items-center mt-[4rem] p-3 w-full'>
        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl text-center">
          Example Marketing Page
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-md text-center mt-2 dark:text-gray-400">
          Use this static page to have an explainer video with CTA and some copy.
        </p>
        <Link href="/dashboard" className="mt-2">
          <Button>Get Started</Button>
        </Link>
        <div className='my-3'>
          <video width="900" height="240" controls id="player1" preload="none">
            <source src="https://www.youtube.com/watch?v=ml9Fz2aUx9k" type="video/mp4" />
          </video>
        </div>
        <div className='flex flex-col max-w-[900px] items-center my-[2rem]'>
          <CreateSearchForm />
          <GenerateSerialNumbers addSerialNumber={addSerialNumber} />
          <SearchForm serialNumbers={serialNumbers} />
          <ManagePage formId={formId} />
        </div>
      </div>
    </PageWrapper>
  )
}
