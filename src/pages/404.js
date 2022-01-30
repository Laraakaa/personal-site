import React from 'react'

import PageLayout from '../components/PageLayout';

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="Home" showHeader showBackgroundImage>
      <div className='404'>
        <h1>404 - Not found</h1>
        <a href="#" onClick={() => { window.history.back() }}>Go back</a>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
