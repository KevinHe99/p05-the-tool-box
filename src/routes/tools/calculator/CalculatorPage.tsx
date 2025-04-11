import "./CalculatorPage.css";

function CalculatorPage() {
  return (
    <>
      <div>
        <h1>Calculator</h1>

        <table>
          <tr>
            <th colSpan={4}>0</th>
          </tr>
          <tr>
            <td colSpan={2}>C</td>
            <td>%</td>
            <td>÷</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>X</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td colSpan={2}>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default CalculatorPage;
