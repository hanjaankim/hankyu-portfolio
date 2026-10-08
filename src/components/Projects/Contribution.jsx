import "./Contribution.css";

function Contribution({ items }) {
  if (!items?.length) return null;

  return (
    <div className="project-card__block">
      <h4 className="project-card__block-title">기여도</h4>
      <ul className="contribution">
        {items.map((item) => (
          <li className="contribution__row" key={item.area}>
            <span className="contribution__area">{item.area}</span>
            <div className="contribution__bar">
              {item.percent != null ? (
                <>
                  <div className="contribution__track">
                    <div className="contribution__fill" style={{ width: `${item.percent}%` }} />
                  </div>
                  <span className="contribution__value">{item.percent}%</span>
                </>
              ) : (
                <span className="contribution__value contribution__value--collab">협업</span>
              )}
            </div>
            <p className="contribution__note">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contribution;
