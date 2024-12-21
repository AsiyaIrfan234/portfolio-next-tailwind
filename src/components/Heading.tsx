import React from 'react'

interface propsType {
    title: string;
    className?: string;
}

const Heading: React.FC<propsType> = ({ title,className }) => {
  return (
    <div className={`text-center text-4xl pb-8 ${className}`}> {/* Apply className here */}
        <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  );
}

export default Heading;