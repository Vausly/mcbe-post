import { useEffect } from 'react';

const Servers = () => {
  useEffect(() => {
    window.location.href = 'https://www.vausly.my.id/servers';
  }, []);

  return (
    <div>
      <p>Redirecting to servers page...</p>
    </div>
  );
};

export default Servers;
