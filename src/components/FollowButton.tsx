"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { LoaderPinwheel } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action';

function FollowButton({userId}: {userId: string}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleFollow = async () => {
        setIsLoading(true);

        try {
            await toggleFollow(userId);
            toast.success("user followed successfully");
        } catch (error) {
            toast.error("error in following user")
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <Button
    size={"sm"}
    variant={"secondary"}
    onClick={handleFollow}
    disabled={isLoading}
    className="w-20"
    >
        {isLoading ? <LoaderPinwheel className="size-4 animate-spin "/> : "Follow"}
    </Button>
  )
}

export default FollowButton