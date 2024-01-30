import { useEffect, useState } from "react";

const host = import.meta.env.VITE_SERVER_URL;
const apiUrl = `${host}/users`;

export default function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl);
      const resBody = await res.json();
      setData(resBody);
    })();
  }, [])

  if (!data) {
    return 'Loading...'
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}