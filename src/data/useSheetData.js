import { useEffect, useState } from "react";

// "JYDA Data" Google Sheet, served as JSON by its Apps Script web app (google-apps-script/Code.gs).
// Each section (gallery, donors, committee, families, culture) is one tab, managed from /admin.
export const SHEET_URL = "https://script.google.com/macros/s/AKfycbxWMLCt2lKg6lTcJK_Qt7gduaReQTSj-T0Io__at2p5QGt11_6a7lXY8_ITNNFlwQSQ6A/exec";

let request; // one request per page load, shared by every section
const loadSheet = () => (request ||= fetch(SHEET_URL).then((res) => res.json()).catch(() => ({})));

// Rows of one Sheet tab; until that tab has rows, the built-in list is shown.
export default function useSheetData(tab, builtIn) {
  const [rows, setRows] = useState(builtIn);

  useEffect(() => {
    let cancelled = false;
    loadSheet().then((data) => {
      if (!cancelled && Array.isArray(data[tab]) && data[tab].length) setRows(data[tab]);
    });
    return () => {
      cancelled = true;
    };
  }, [tab]);

  return rows;
}
