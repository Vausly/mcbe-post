import { useEffect } from 'react';

const Skins = () => {
  useEffect(() => {
    window.location.href = 'https://www.vausly.my.id/skins';
  }, []);

  return (
    <div>
      <p>Redirecting to skins page...</p>
    </div>
  );
};

export default Skins;
