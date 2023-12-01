
export default function WhoAreWe() {
  return (
    <div className="scene">
      <button>
        <span className="measurements">
          <span className="width">100cqw</span>
          <span className="height">100cqh</span>
        </span>
        <span className="glows">
          <span className="spark__container spark__glows">
            <span className="spark"></span>  
            <span className="spark"></span>  
          </span>
        </span>
        <span className="spark__container">
          <span className="spark"></span>  
          <span className="spark"></span>  
        </span>
        <span className="spark__container spark__container--reveal">
          <span className="spark"></span>  
          <span className="spark"></span>  
        </span>
        <span className="backdrop"></span>
        <span className="text">
          Deploy
        </span>
        <span className="labels">
          <span className="label label--button">Button</span>
          <span className="label label--glow">Glows</span>
          <span className="label label--text">Text</span>
        </span>
      </button>
    </div>
  );
}
