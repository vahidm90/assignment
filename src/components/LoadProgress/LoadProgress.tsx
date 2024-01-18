import React from "react";

export interface LoadProgressProps {
    title?: string;
}

export const LoadProgress: React.FC<LoadProgressProps> = ({ title = 'Loading...'  }) => {
    return <div className="load-progress">{title}</div>;
}

export default LoadProgress;
