import { useParams } from "react-router-dom";

const Detailpage = () => {
  const { id } = useParams();
  return <div>Detailpage {id}</div>;
};

export default Detailpage;
