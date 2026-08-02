import "./ProjectStats.css";

function Tiles({ items }) {
  return (
    <div className="stats-tiles">
      {items.map((item) => (
        <div className="stats-tile" key={item.label}>
          <p className="stats-tile__value">{item.value}</p>
          <p className="stats-tile__label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function Meter({ label, value, max, displayValue }) {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="stats-meter">
      <div className="stats-meter__head">
        <span className="stats-meter__label">{label}</span>
        <span className="stats-meter__value">{displayValue ?? `${percent}%`}</span>
      </div>
      <div className="stats-meter__track">
        <div className="stats-meter__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Bars({ title, items }) {
  const max = Math.max(...items.map((item) => item.value));
  return (
    <div className="stats-bars">
      {title && <p className="stats-bars__title">{title}</p>}
      <ul className="stats-bars__list">
        {items.map((item) => (
          <li className="stats-bars__row" key={item.label}>
            <span className="stats-bars__label">{item.label}</span>
            <div className="stats-bars__track">
              <div
                className="stats-bars__fill"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
            <span className="stats-bars__value">{item.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectStats({ stats }) {
  if (!stats) return null;

  return (
    <div className="project-card__block">
      {stats.tiles && <Tiles items={stats.tiles} />}
      {stats.meter && <Meter {...stats.meter} />}
      {stats.bars && <Bars {...stats.bars} />}
    </div>
  );
}

export default ProjectStats;
