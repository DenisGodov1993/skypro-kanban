import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
// import Modal from "../Modal/Modal";
// import EditIcon from "../icons/EditIcon";
import { cardList } from "../../data.js";

const ViewEditCard = () => {
  const { id } = useParams ();
  const word = useMemo(
    () => cardList.find((w) => w.id === id) || { name: "", translation: "" },
    [id]
  );

  return (
    <Modal>
        <div className="modal-content">
            <Card word={word} open={true} />
            <div className="actions">
                <Button type="icon">
                    <div style={{ display: "flex" }}>
                        <EditIcon />
                    </div>
                </Button>
                <Link to="/">
                  <Button type="secondary" text="Закрыть" />{" "}
                </Link>
            </div>
            <Button text="Редактировать задачу" />
        </div>
    </Modal>
  );
};

export default ViewEditCard;