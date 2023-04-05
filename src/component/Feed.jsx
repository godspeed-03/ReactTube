import React, { useContext, useEffect } from "react";
import {Context} from '../assets/context'
import LeftNav from "./LeftNav";
import VideoCard from './VideoCard'
export default function Feed() {
  const { loading, searchResult } = useContext(Context);

  useEffect(() => {
      document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
      <div className="flex flex-row h-[calc(100%-56px)]">
          <LeftNav />
          <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 bg-black">
                  {!loading &&
                      searchResult.map((item) => {
                          if (item.type !== "video") return false;
                          return (
                              <VideoCard
                                  key={item?.video?.videoId}
                                  video={item?.video}
                              />
                          );
                      })}
              </div>
          </div>
      </div>
  );
                    }
