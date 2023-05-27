import { ComentsListProps, comentProps } from "../types/IComent";
import ComentItem from "./ComentItem";
import { motion } from "framer-motion";

const ComentList = ({ comentsList, error }: ComentsListProps) => {
  if (error) return <p>Fetch Error</p>;
  const coments = comentsList.map((coment: comentProps) => {
    return (
      <motion.div
        key={coment.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ComentItem email={coment.email} body={coment.body} />
      </motion.div>
    );
  });
  return <>{coments}</>;
};

export default ComentList;
