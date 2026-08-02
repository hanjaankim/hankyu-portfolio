import "./ProcessFlow.css";

/**
 * Sequence-only step diagram — deliberately has no dates/durations.
 * We don't have real phase-level scheduling data for these projects,
 * so a calendar-accurate Gantt chart would be fabricated; this shows
 * the true methodology order without implying timing that isn't real.
 */
function ProcessFlow({ steps }) {
  return (
    <ol className="process-flow">
      {steps.map((step, index) => (
        <li className="process-flow__step" key={step}>
          <span className="process-flow__index">{String(index + 1).padStart(2, "0")}</span>
          <span className="process-flow__label">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default ProcessFlow;
