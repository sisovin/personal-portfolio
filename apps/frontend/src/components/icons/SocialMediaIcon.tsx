import React from 'react';

interface SocialMediaIconProps {
  platform: 'twitter' | 'linkedin' | 'github';
  width?: number;
  height?: number;
  fill?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  platform,
  width = 24,
  height = 24,
  fill = 'currentColor',
}) => {
  const renderIcon = () => {
    switch (platform) {
      case 'twitter':
        return (
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.59 8.59 0 01-2.72 1.04 4.26 4.26 0 00-7.26 3.88 12.1 12.1 0 01-8.78-4.45 4.26 4.26 0 001.32 5.68 4.23 4.23 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.27 4.27 0 01-1.92.07 4.26 4.26 0 003.98 2.96A8.54 8.54 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
        );
      case 'linkedin':
        return (
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.25 9.75h-2.5v-4.25c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.26v4.32h-2.5v-8.5h2.4v1.16h.03c.33-.63 1.14-1.29 2.35-1.29 2.51 0 2.97 1.65 2.97 3.79v5.84z" />
        );
      case 'github':
        return (
          <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z" />
        );
      default:
        return null;
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcon()}
    </svg>
  );
};

export default SocialMediaIcon;
