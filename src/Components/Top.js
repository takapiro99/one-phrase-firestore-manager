import { useEffect, useState } from "react";
import { db } from "../firebase";
import BasicTable from "./Table";
import Container from "@material-ui/core/Container";

const Top = () => {
  const [senryus, setSenryus] = useState([]);
  useEffect(() => {
    db.collection("senryus")
      .limit(30)
      .get()
      .then((querySnapshot) => {
        fetchDone(querySnapshot);
      })
      .catch((e) => alert(`err at fetchData, map: ${e}`));
  }, []);

  const fetchDone = (querySnapshot) => {
    let items = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setSenryus(items);
    console.log(items);
  };

  return (
    <div>
      <div>
        <div>俳句manager</div>
      </div>
      <Container maxWidth="lg">
        <BasicTable senryus={senryus} />
      </Container>
    </div>
  );
};

export default Top;
