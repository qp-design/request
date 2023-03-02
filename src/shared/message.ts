const imgUrl =
  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS5kYWJhY2JiLCAyMDIxLzA0LzE0LTAwOjM5OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzA0OEVFQTZBMzUxMUVEQThENUIyQURDQ0NGMzA5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzA0OEVFOTZBMzUxMUVEQThENUIyQURDQ0NGMzA5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3MDQ4RUU1NkEzNTExRURBOEQ1QjJBRENDQ0YzMDlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3MDQ4RUU2NkEzNTExRURBOEQ1QjJBRENDQ0YzMDlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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';

function fragment(msg: string) {
  const dom = document.createElement('div');
  dom.innerHTML = `
    <div
      style="
        box-sizing: border-box; 
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.88);
        font-size: 14px; 
        line-height: 1.5714285714285714;
        list-style: none;
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
        position: fixed;
        top: 8px;
        inset-inline-start: 0;
        width: 100%;
        text-align: center;
        pointer-events: none;
        z-index: 1010;"
      >
      <div
        style="display: inline-block;
        padding: 9px 12px;
        background: #fff;
        border-radius: 8px;
        line-height: 1;
        box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
        pointer-events: all"
        >
          <span
            style="vertical-align: text-bottom;
            margin-inline-end: 4px;
            font-size: 16px;
            display: inline-block;
            font-style: normal;
            line-height: 0;
            text-align: center;
            text-transform: none;
            text-rendering: optimizeLegibility"
          >
            <img width="16" alt="error" src=${imgUrl}>
        </span>
        <span>
            ${msg}
          </span>
      </div>
    </div>`;

  return dom;
}

export function message(msg: string) {
  const root = fragment(msg);
  document.body.appendChild(root);
  setTimeout(() => {
    document.body.removeChild(root);
  }, 1000);
}
