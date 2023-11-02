"use client";

import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import momentsInHistory from "../constants/data";
import UICard from "./UICard";

const ZoomableTimelineChart = ({ data }) => {
  const chartRef = useRef();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 1200;
    const height = 300;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("class", "svg-content")
      .attr("width", width + margin.top + margin.bottom)
      .attr("height", height + margin.left + margin.right);

    const xScale = d3
      .scaleTime()
      .domain([new Date("1900-01-01"), new Date("1999-12-31")])
      .range([0, width])
      .nice(d3.timeMonth)
      .clamp(true);

    const xAxis = d3.axisBottom(xScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(${margin.left}, ${height})`)
      .call(xAxis);

    const eventRectangles = svg
      .selectAll(".event-rectangle")
      .data(momentsInHistory)
      .enter()
      .append("rect")
      .attr("class", "event-rectangle")
      .attr("x", (event) => xScale(new Date(event.startDate)))
      .attr(
        "width",
        (event) =>
          xScale(new Date(event.endDate)) - xScale(new Date(event.startDate))
      )
      .attr("height", 60)
      .attr("y", height - 60)
      .attr("fill", (event) => `${event.color}`)
      .on("click", function () {
        setSelectedEvent(this.__data__);
      });

    const zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);

    function zoomed(event) {
      const transform = event.transform;

      const newXScale = transform.rescaleX(xScale);
      svg.select(".x-axis").call(xAxis.scale(newXScale));

      svg
        .selectAll(".event-rectangle")
        .attr("x", (d) => newXScale(new Date(d.startDate)))
        .attr(
          "width",
          (d) =>
            newXScale(new Date(d.endDate)) - newXScale(new Date(d.startDate))
        );
    }

    return () => {
      // Cleanup if component unmounts
    };
  }, [data]);

  return (
    <div className="chart-ref" ref={chartRef}>
      {selectedEvent && <UICard moment={selectedEvent} state={setSelectedEvent} />}
    </div>
  );
};

export default ZoomableTimelineChart;
