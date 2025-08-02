import React from "react";

const Question = ({ question, onClick }) => {
  const renderContent = () => {
    switch (question.type) {
      case "comparison-table":
        return (
          <div className="comparison-table-container">
            {question.description && (
              <p className="table-description">{question.description}</p>
            )}

            {/* Render table */}
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    {question.content.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.content.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                          {cell.includes("✅") || cell.includes("❌") ? (
                            cell
                          ) : cell.startsWith("{") ||
                            cell.startsWith("JSON") ? (
                            <code>{cell}</code>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Render extraInfo if available */}
            {question.extraInfo && (
              <div className="extra-info">
                <h3>📌 Additional Details</h3>

                {/* --- React Lifecycle-specific rendering --- */}
                {question.extraInfo.phases && (
                  <div className="phase-details">
                    <h4>Phases of React Lifecycle</h4>
                    <ul>
                      {Object.entries(question.extraInfo.phases).map(
                        ([phase, desc], idx) => (
                          <li key={idx}>
                            <strong>{phase}:</strong> {desc}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {question.extraInfo.lifecycleMethods?.classComponents && (
                  <div className="method-details">
                    <h4>Class Component Lifecycle Methods</h4>
                    {Object.entries(
                      question.extraInfo.lifecycleMethods.classComponents
                    ).map(([phase, methods], idx) => (
                      <div key={idx}>
                        <strong>{phase}:</strong>
                        <ul>
                          {methods.map((method, mIdx) => (
                            <li key={mIdx}>{method}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {question.extraInfo.lifecycleMethods?.functionalComponents && (
                  <div className="method-details">
                    <h4>Functional Component Lifecycle Equivalents</h4>
                    <p>
                      {
                        question.extraInfo.lifecycleMethods.functionalComponents
                          .useEffect
                      }
                    </p>
                  </div>
                )}

                {question.extraInfo.lifecycleMethods?.deprecatedMethods && (
                  <div className="deprecated-methods">
                    <h4>⚠️ Deprecated Lifecycle Methods</h4>
                    <ul>
                      {question.extraInfo.lifecycleMethods.deprecatedMethods.map(
                        (m, idx) => (
                          <li key={idx}>{m}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* --- Generic extraInfo rendering for Redux / Others --- */}
                {!question.extraInfo.phases &&
                  !question.extraInfo.lifecycleMethods &&
                  Object.entries(question.extraInfo).map(
                    ([key, value], idx) => (
                      <div key={idx} className="generic-extra-info">
                        <strong>{key}:</strong>
                        {Array.isArray(value) ? (
                          <ul>
                            {value.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{value}</p>
                        )}
                      </div>
                    )
                  )}
              </div>
            )}
          </div>
        );

      case "text-with-code":
        return (
          <>
            <p>{question.description}</p>
            <div className="example">
              <h4>Example:</h4>
              <div className="code-block">
                <pre>{question.code}</pre>
              </div>
            </div>
            {question.tip && <div className="tip">{question.tip}</div>}
            {renderExtraInfo(question)}
          </>
        );

      case "text-with-list":
        return (
          <>
            <p>{question.description}</p>
            <div className="example">
              <h4>Process:</h4>
              <ol>
                {question.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
            {renderExtraInfo(question)}
          </>
        );

      case "list-only":
        return (
          <>
            <ul>
              {question.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {renderExtraInfo(question)}
          </>
        );

      case "code-only":
        return (
          <>
            <div className="example">
              <h4>Implementation:</h4>
              <div className="code-block">
                <pre>{question.code}</pre>
              </div>
            </div>
            {renderExtraInfo(question)}
          </>
        );

      default:
        return (
          <>
            <p>{question.description}</p>
            {renderExtraInfo(question)}
          </>
        );
    }
  };

  // Helper to render extraInfo for all types
  const renderExtraInfo = (question) => {
    if (!question.extraInfo) return null;

    return (
      <div className="extra-info">
        <h3>📌 Additional Details</h3>
        {Object.entries(question.extraInfo).map(([key, value], idx) => (
          <div key={idx} className="generic-extra-info">
            <strong>{key}:</strong>
            {Array.isArray(value) ? (
              <ul>
                {value.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="question" onClick={onClick}>
      <h3>{question.title}</h3>
      {renderContent()}
    </div>
  );
};

export default Question;
