import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  const { selectedData, user } = useSelector(
    (state) => state. Select_Data_Reducer 
  );
  return (
    <div className="container">
      {selectedData?.map((elem, index) => {
        return (
          <>
            <div key={index} className="CardContainer">
              <div className="CardHeading  ">
                <div className="title">
                  {elem[index].title}{" "}
                  <div class="title-number">{elem[index]?.value.length}</div>
                </div>
                <div>
                <FontAwesomeIcon icon={faPlus} style={{color: "#9e9e9e",paddingRight:"3px"}} />
                <FontAwesomeIcon icon={faEllipsis} style={{color: "#9e9e9e",}} />
                </div>
              </div>
              <div>
                {elem[index]?.value?.map((elem, ind) => {
                  return (
                    <Card id={elem.id} title={elem.title} tag={elem.tag} />
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Main;
