import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'raveindia | Tickets',
  description: 'We sell exclusive event tickets for best price',
  keywords: 'events,parties,goa,darkpsy,hitech',
}

export default Meta
