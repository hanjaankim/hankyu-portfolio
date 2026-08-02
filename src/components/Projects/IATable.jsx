import "./IATable.css";

/**
 * Renders an information-architecture tree as an actual table instead of a
 * tall screenshot — the source image was a 1057x2174 crop of a spreadsheet,
 * which shrinks illegibly next to the project's other, squarer artifacts.
 * `rows` is a flat list of { category, sub, items }; identical consecutive
 * `category` values are merged into one rowspan cell.
 */
function IATable({ rows }) {
  return (
    <div className="ia-table-wrap">
      <table className="ia-table">
        <thead>
          <tr>
            <th>대분류</th>
            <th>중분류</th>
            <th>소분류</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isNewCategory = index === 0 || rows[index - 1].category !== row.category;
            const rowspan = isNewCategory
              ? rows.filter((r, i) => i >= index && r.category === row.category).length
              : 0;

            return (
              <tr key={`${row.category}-${row.sub}`}>
                {isNewCategory && <td rowSpan={rowspan}>{row.category}</td>}
                <td>{row.sub}</td>
                <td>{row.items.join(", ") || "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IATable;
