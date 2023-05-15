import React from 'react'
import { useGetIdentity, useOne } from '@pankod/refine-core'
import { Profile } from 'components'

const MyProfile = () => {
  const {data: user} = useGetIdentity();

  const{ data, isLoading, isError} = useOne({
    resource:'users',
    id: user?.userid,
  })

  const myProfile = data?.data ?? [];

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <Profile
      type="My"
      name="John Doe"
      email="Hidden"
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  )
}

export default MyProfile