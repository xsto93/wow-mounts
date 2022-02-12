import React from 'react';

interface ContentProps {
    children? : JSX.Element | JSX.Element []
}

const Content = ({ children }: ContentProps) => {
  return (
      <div className="container-fluid">
          <div className="row">
                { children }
          </div>
      </div>
  )
}

export default Content;