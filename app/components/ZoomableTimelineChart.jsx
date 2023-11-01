"use client";

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import momentsInHistory from "../constants/data";

const ZoomableTimelineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 20, bottom: 10, left: 20 };
    const width = 800 - margin.left - margin.right;
    const height = 400;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("class", "svg-content")
      .attr("width", width)
      .attr("height", height + margin.top + margin.bottom);
    // .append("g")

    // Define the time scale for the x-axis (assuming your data contains date/time values)
    const xScale = d3
      .scaleTime()
      .domain([new Date("1900-01-01"), new Date("1999-12-31")]) // Example date range
      .range([0, width])
      .nice(d3.timeMonth)
      .clamp(true);

    // Create a simple x-axis
    const xAxis = d3.axisBottom(xScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    // Loop through the momentsInHistory array and create rectangles for each event
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
      .attr("height", 20)
      .attr("y", height - 20)
      .attr("fill", "blue");

    // Zoom behavior
    const zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);

    // Define the zoom function
    function zoomed(event) {
      const transform = event.transform;

      // Update the xScale's domain based on the zoom transformation
      const newXScale = transform.rescaleX(xScale);
      svg.select(".x-axis").call(xAxis.scale(newXScale));

      // Update the position of event rectangles
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

  return <div className="chart-ref" ref={chartRef}></div>;
};

export default ZoomableTimelineChart;
