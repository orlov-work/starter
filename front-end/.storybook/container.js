import React from 'react';

export default function Container({ story }) {
  return (
    <div className="container">{story()}</div>
  )
}
