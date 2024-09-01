import { useNavigate } from 'react-router-dom';

export default function RouterPage() {
  const navigate = useNavigate();

  const moveUseEffect = () => {
    navigate('/useEffect');
  };

  const moveUseQuery = () => {
    navigate('/useQuery');
  };

  const moveBasicSuspense = () => {
    navigate('/basicSuspense');
  };

  return (
    <section>
      <h1>hi im router pageS</h1>
      <h2>fetch on render</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={moveUseEffect}>
          move useEffect for data fetching
        </button>
        <button onClick={moveUseQuery}>move useQuery for data fetching</button>
      </div>

      <h2>render as you fetch</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={moveBasicSuspense}>
          move useQuery for data fetching
        </button>
      </div>
    </section>
  );
}
