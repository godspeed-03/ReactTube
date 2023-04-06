import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../assets/constants";
import { Context } from "../assets/context";


export default function LeftNav() {
  const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context);

const navigate = useNavigate();



return (
  <div
  className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-1 md:translate-x-0 transition-all ${
    !mobileMenu ? "translate-x-[-240px]" : ""
}`}
  >
      <div className="flex px-5 flex-col">
          {categories.map((item) => {
              return (
                  <React.Fragment>
                      <LeftNavMenuItem
                          text={ item.name}
                          icon={item.icon}
                          action={() => {
                            setSelectCategory(item.name)
                         
                            //   clickHandler(item.name, item.type);
                              // navigate("/");
                          }}
                          className={`${
                              selectCategory === item.name
                                  ? "bg-white/[0.15]"
                                  : ""
                          }`}
                      />
                      {item.divider && (
                          <hr className="my-5 border-white/[0.2]" />
                      )}
                  </React.Fragment>
                  
              );
          })}
 
      </div>
  </div>
);
};
