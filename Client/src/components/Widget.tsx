import RB_logo from '../assets/RB_logo.png'


const Widget = () => {
  return (
    <div className='widget_container'>
      <div className="widget">
        <img src={RB_logo} alt="widget_img" />
        <h1 className="widget_title">Welcome to Cosmos </h1>
        <p>Begin your journey to speaker management by creating an event</p>
        <button className="event_btn">Select Event Template</button>
      </div>
    </div>
  );
};

export default Widget;
