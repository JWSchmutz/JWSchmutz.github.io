import "./ProjectRow.css";
import Project from "../Project/Project";
import React, { useEffect, useState } from "react";

const ProjectRow = (props) => {
  const rowRef = React.useRef();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scrollArrows, setScrollArrows] = useState(false);
  const [left, setLeft] = useState(0);
  const [rowWidth, setRowWidth] = useState(null);

  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const setVariables = () => {
      console.log(scrollArrows);
      if (rowRef.current?.offsetWidth < rowRef.current?.scrollWidth) {
        setRowWidth(rowRef.current.offsetWidth);
        if (!scrollArrows) {
          console.log("scrollArrows true now");
          setScrollArrows(true);
        }
      } else {
        setScrollArrows(false);
      }
    };

    if (!hasLoaded) setVariables();

    const debouncedHandleResize = debounce(setVariables, 300);

    window.addEventListener("resize", debouncedHandleResize);

    setHasLoaded(true);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const goLeft = () => {
    const projectWidth = rowRef.current.childNodes[2].firstChild.offsetWidth;
    if (rowRef.current.childNodes[2].firstChild.getBoundingClientRect().x < 0)
      setLeft(left + projectWidth + 20);
  };
  const goRight = () => {
    const projectWidth = rowRef.current.childNodes[2].firstChild.offsetWidth;
    if (
      rowRef.current.childNodes[2].lastChild.getBoundingClientRect().x +
        projectWidth >
      rowWidth
    )
      return setLeft(left - (projectWidth + 20));
  };

  return (
    <div className="project-row" ref={rowRef}>
      <h3 className="project-row-title light-gray bg-dark-gray">
        {props.data.groupName}
      </h3>
      <hr className="gray-bar" />
      <div className="slider" style={{ left: `${left}px` }}>
        {props.data.projects.map((project, i) => (
          <Project data={project} key={i} />
        ))}
      </div>
      {scrollArrows && (
        <div className="arrow arrow-left" onClick={goLeft}>
          &#60;
        </div>
      )}
      {scrollArrows && (
        <div className="arrow arrow-right" onClick={goRight}>
          &#62;
        </div>
      )}
    </div>
  );
};

export default ProjectRow;
