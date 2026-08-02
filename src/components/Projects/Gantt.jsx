import "./Gantt.css";

/**
 * Schematic Gantt: real project period (from `period`), phases divided
 * into equal sequential segments since we don't have real per-phase
 * boundaries — showing them as precisely-dated would be fabricated.
 * The point isn't the exact split, it's that the work was scheduled
 * across a real, dated span rather than an undated to-do list.
 */
function parsePeriod(period) {
  const matches = [...period.matchAll(/(\d{4})\.(\d{2})/g)];
  if (matches.length < 2) return null;

  const toIndex = ([, y, m]) => Number(y) * 12 + (Number(m) - 1);
  const startIndex = toIndex(matches[0]);
  const endIndex = toIndex(matches[1]);

  if (endIndex <= startIndex) return null;

  return {
    startLabel: matches[0][0],
    endLabel: matches[1][0],
    totalMonths: endIndex - startIndex + 1,
  };
}

function Gantt({ period, phases }) {
  const parsed = parsePeriod(period);
  if (!parsed || phases.length === 0) return null;

  const segmentWidth = 100 / phases.length;

  return (
    <div className="gantt">
      <div className="gantt__axis">
        <span>{parsed.startLabel}</span>
        <span>{parsed.endLabel}</span>
      </div>
      <ul className="gantt__rows">
        {phases.map((phase, index) => (
          <li className="gantt__row" key={phase}>
            <span className="gantt__row-label">{phase}</span>
            <div className="gantt__track">
              <div
                className="gantt__bar"
                style={{
                  left: `${segmentWidth * index}%`,
                  width: `${segmentWidth}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gantt;
