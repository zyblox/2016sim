import './votesbar.css';

export function VotesBar({ percent = 0 }) {
  const width = Math.min(100, Math.max(0, percent));

  return (
    <div className='rbx-votes'>
      <div className='vote-bar'>
        <div className='thumbs-up'>
          <span className='rbx-icon-thumbs-up'></span>
        </div>
        <div className='voting-container'>
          <div className='background'></div>
          <div className='votes' style={{ width: `${width}%` }}></div>
          <div className='mask'>
            <div className='segment seg-one'></div>
            <div className='segment seg-two'></div>
            <div className='segment seg-three'></div>
            <div className='segment seg-four'></div>
          </div>
        </div>
        <div className='thumbs-down'>
          <span className='rbx-icon-thumbs-down'></span>
        </div>
      </div>
    </div>
  );
}
