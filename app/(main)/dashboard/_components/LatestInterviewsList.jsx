"use client"
import React, { useState } from 'react'
import { Video } from 'lucide-react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState([]);
  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl'>previously Created Interviews</h2>

      {interviewList?.length==0&&
      <div className='p-5 flex flex-col gap-3 items-center mt-5'>
        <Video className='h-10 w-10 text-primary'/>
        <h2>You don't have any interviews created</h2>
        <Link href={'/dashboard/create-interview'}>
          <Button className='hover:cursor-pointer'>
            + Create New Interview
          </Button>
        </Link>
      </div>}
    </div>
  )
}

export default LatestInterviewsList
