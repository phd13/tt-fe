import { useEffect, useState } from "react";
import { getApps } from "./HttpService";
import TableItem from "./Components/TableItem/TableItem";
import "./App.css";

function App() {
  const [apps, setApps] = useState({});

  useEffect(() => {
    (async () => {
      const res = await getApps(1, 25);
      if (res) {
        setApps(res);
      }
    })();

    return () => {};
  }, [apps.length]);

  const tableItems = apps.appRows.map((app) => <TableItem data={app} />);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <h2>App Inventory</h2>
        {tableItems}
      </div>
    </div>
  );
}

export default App;
