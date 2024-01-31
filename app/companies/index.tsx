import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import TableOne from '@/components/Tables/TableOne'
import React from 'react'

const index = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div>
        <TableOne />
      </div>
    </>
  )
}

export default index